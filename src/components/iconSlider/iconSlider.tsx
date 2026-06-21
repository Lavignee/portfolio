import { gsap } from 'gsap';
import React from 'react';

import useMounted from '@/hooks/useMounted';

import './iconSlider.scss';

const IconSlider = ({ sliderTrigger }: { sliderTrigger: boolean }) => {
  const mounted = useMounted();
  const [svgs, setSvgs] = React.useState<string[]>([]);
  const [willChange, setWillChange] = React.useState(sliderTrigger);
  const [row, setRow] = React.useState('');
  const SliderRef = React.useRef<gsap.core.Tween | null>(null);

  // 아이콘 데이터(약 392KB)를 마운트 후 동적 로드해 홈 초기 번들에서 분리한다.
  React.useEffect(() => {
    let active = true;
    import('@/data/icon-svg.json').then((mod) => {
      if (active) setSvgs(Object.values(mod.default));
    });
    return () => {
      active = false;
    };
  }, []);

  // 각 라인(0~11)의 아이콘 인덱스 집합을 svgs 로드 후 1회 생성한다.
  // 렌더마다 새 랜덤을 만들면 willChange 토글(스크롤 진입)마다 아이콘이 바뀌며 깜빡이므로 useMemo로 고정.
  const lineIcons = React.useMemo(() => {
    if (svgs.length === 0) return [];
    const pick = () => {
      const result: number[] = [];
      while (result.length < 10) {
        const number = Math.floor(Math.random() * svgs.length);
        if (!result.includes(number)) result.push(number);
      }
      return result;
    };
    return Array.from({ length: 12 }, () => pick());
  }, [svgs]);

  // 아이콘 슬라이더 한 줄 생성. (컴포넌트가 아닌 일반 함수 — 인라인 JSX로 렌더해
  //  매 렌더마다 서브트리 전체가 리마운트되던 churn을 막는다. 장식 요소라 aria-hidden.)
  const renderLine = (line: number) => (
    <div
      key={line}
      className={`icon-slider ${row}${line % 2 !== 0 ? ' reverse' : ''}`}
      aria-hidden='true'
    >
      {lineIcons[line].map((item) => (
        <div
          key={`${line}-${item}`}
          className={`icon-content-frame${willChange ? ' will-change' : ''}`}
        >
          <div className='content' dangerouslySetInnerHTML={{ __html: svgs[item] }}></div>
        </div>
      ))}
    </div>
  );

  // 애니메이션을 1회 생성(paused). 과거엔 willChange 토글마다 kill→재생성해 스크롤 경계마다 히치+위치점프가 났다.
  const startAnimation = React.useCallback(() => {
    gsap.set('.icon-content-frame', {
      x: (i) => `${i * 100}%`,
    });

    SliderRef.current = gsap.to('.icon-content-frame', {
      id: 'slider-animation',
      duration: 80,
      ease: 'none',
      x: '+=1000%',
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % 1000),
      },
      repeat: -1,
      paused: true,
    });
  }, []);

  // 높이값이 특정 구간에 들어올 시 슬라이더의 크기 및 간격을 조정.
  const autoHeightContent = React.useCallback(() => {
    if (window.innerHeight < 739.2) {
      setRow('four');
    } else if (window.innerHeight < 950.4) {
      setRow('five');
    } else if (window.innerHeight < 1161.6) {
      setRow('six');
    } else if (window.innerHeight < 1372.8) {
      setRow('seven');
    } else if (window.innerHeight < 1584) {
      setRow('eight');
    } else if (window.innerHeight < 1795.2) {
      setRow('nine');
    } else if (window.innerHeight < 2006.4) {
      setRow('ten');
    }
  }, []);

  // 셋업 effect가 deps 없이 현재 재생 상태를 참조하기 위한 ref.
  const willChangeRef = React.useRef(willChange);
  React.useEffect(() => {
    willChangeRef.current = willChange;
  }, [willChange]);

  // 아이콘 렌더 준비(svgs 로드)·라인 구성(row) 변경 시에만 트윈을 (재)생성한다(노드 집합이 바뀔 때만).
  // biome-ignore lint/correctness/useExhaustiveDependencies: 재생/정지는 별도 effect가 담당하므로 willChange는 셋업 deps에서 제외.
  React.useEffect(() => {
    if (!mounted || svgs.length === 0) return;
    SliderRef.current?.kill();
    startAnimation();
    // 재셋업(보이는 중 resize 등) 시 현재 재생 상태 반영.
    if (willChangeRef.current) SliderRef.current?.play();
    return () => {
      SliderRef.current?.kill();
    };
  }, [mounted, svgs.length, row, startAnimation]);

  // 가시성(willChange)에 따라 재생/정지만 — 트윈 재생성 없음(스크롤 경계 히치 제거).
  React.useEffect(() => {
    if (willChange) {
      SliderRef.current?.play();
    } else {
      SliderRef.current?.pause();
    }
  }, [willChange]);

  // 아이콘 슬라이더가 화면에 보이는지 여부에 따라 애니메이션 동작 변경.
  React.useEffect(() => {
    if (sliderTrigger) {
      setWillChange(true);
    }

    return () => setWillChange(false);
  }, [sliderTrigger]);

  // 최초 랜더시
  React.useEffect(() => {
    // 높이값 측정하여 슬라이더의 크기 및 간격 조정.
    autoHeightContent();

    // 화면의 크기가 변경되면 설정구간을 체크.
    window.addEventListener('resize', autoHeightContent);

    // 화면 벗어날 시, 슬라이더들 삭제 및 이벤트리스터 삭제.
    return () => {
      SliderRef.current?.kill();
      window.removeEventListener('resize', autoHeightContent);
    };
  }, [autoHeightContent]);

  // window.innerHeight/Math.random 의존 + 아이콘 데이터 동적 로드이므로 마운트·로드 후에만 렌더.
  if (!mounted || svgs.length === 0) return null;

  // 화면 높이에 따라 노출할 라인 결정.(기존 임계값 유지: line4 >739.2 ... line11 >2217.6)
  const h = window.innerHeight;
  const thresholds = [739.2, 950.4, 1161.6, 1372.8, 1584, 1795.2, 2006.4, 2217.6];
  const visibleLines = [0, 1, 2, 3];
  thresholds.forEach((t, idx) => {
    if (h > t) visibleLines.push(idx + 4);
  });

  return <>{visibleLines.map((line) => renderLine(line))}</>;
};

export default IconSlider;
