import React from 'react';
import { useRouter } from 'next/router';
import { useCommonValueStore } from '@/stores/commonValue';
import { isDesktop } from 'react-device-detect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import language from '../../data/dataSkill/languageSkill.json';
import lib from '../../data/dataSkill/libSkill.json';
import tool from '../../data/dataSkill/toolSkill.json';
import interest from '../../data/dataSkill/interestSkill.json';
import svg from '../../../public/images/icon-svg.json';

// import './skillDetail.scss';

import Scrollbar from 'smooth-scrollbar';

// SSR에서 window가 없어서 바로 호출하면 터질 수 있으니 가드
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Props로 받는 이벤트들에 대한 interface 정의.
interface SkillDetailProps {
  _onHover: (hoverCursor: string, hoverText?: string | null) => void;
  _onLeave: (hoverText?: string | null) => void;
}

const SkillDetail = ({ _onHover, _onLeave }: SkillDetailProps) => {
  const router = useRouter();

  // Zustand에서 setter 하나 꺼내오기
  const setGsapState = useCommonValueStore((s) => s.setGsapState);

  const gsapReady = React.useCallback(
    (value: boolean) => setGsapState(value),
    [setGsapState]
  );

  const currentGsapState = useCommonValueStore((s) => s.currentGsapState);

  const lists = React.useRef<HTMLLIElement[]>([]);
  const scrollPosition = React.useRef<HTMLUListElement | null>(null);

  const [currentSkillScroller, setCurrentSkillScroller] =
    React.useState<any>(null);
  const [currentUrl, setCurrentUrl] = React.useState<string>('language'); // 기본값
  const [listHoverMotion, setListHoverMotion] = React.useState('');
  const [currentTarget, setCurrentTarget] = React.useState(0);
  const [opacity, setOpacity] = React.useState('');

  // 스무스 스크롤 재생성.
  const makeSmoothScrollbarforSkill = React.useCallback(() => {
    if (!scrollPosition.current) return;

    let skillScrollBar: any;
    // 기기에 따라 다른 스크롤 딜레이 적용.
    if (isDesktop) {
      skillScrollBar = Scrollbar.init(scrollPosition.current, {
        damping: 0.02,
        alwaysShowTracks: true,
      });
    } else {
      skillScrollBar = Scrollbar.init(scrollPosition.current, {
        damping: 0.1,
        alwaysShowTracks: true,
      });
    }

    // 새로운 스크롤 생성 시 위치 초기화.(재랜더가 아니므로 이전 위치로 인한 오류 방지.)
    skillScrollBar.setPosition(0, 0);

    // GSAP 스크롤 트리거에 스무스 스크롤의 스크롤 값 동기화.
    ScrollTrigger.scrollerProxy(scrollPosition.current, {
      scrollTop(value) {
        if (arguments.length) {
          skillScrollBar.scrollTop = value;
        }
        return skillScrollBar.scrollTop;
      },
    });
    ScrollTrigger.defaults({ scroller: scrollPosition.current });
    skillScrollBar.addListener(ScrollTrigger.update);

    // 다른 함수에서도 스크롤 컨트롤을 위해 state에 지정.
    setCurrentSkillScroller(skillScrollBar);

    // GSAP의 사용 준비 완료.
    gsapReady(true);
  }, [gsapReady]);

  // skill 세부 목록에 마우스 오버 시,
  const listHover = (number: number) => {
    // 커서 형태 변경.
    _onHover(' focus-cursor');
    // 마우스 오버 된 컨텐츠의 위치(위, 아래)에 따라 애니메이션 동작.
    if (currentTarget + 1 > number) {
      setListHoverMotion('top');
    } else if (currentTarget + 1 < number) {
      setListHoverMotion('bottom');
    }
  };

  // skill 세부 목록에서 마우스 벗어날 시,
  const onListLeave = React.useCallback(() => {
    // 커서 형태 초기화.
    _onLeave();
    // 마우스 오버 애니메이션 제거.
    setListHoverMotion('');
  }, [_onLeave]);

  // skill 목록 클릭 시 (Next router 사용)
  const changeList = (targetUrl: string) => {
    if (targetUrl !== currentUrl) {
      router.push(`/skill/${targetUrl}`);
    } else if (currentSkillScroller) {
      currentSkillScroller.scrollTo(0, 0, 600);
    }
  };

  // 클릭이 아닌 히스토리를 통한 목록 변경 시.
  const changeHistoryList = React.useCallback(
    async (nextUrl: string) => {
      // 기존의 skill 세부 목록을 초기화.
      lists.current = [];
      // 기존의 스크롤 데이터 삭제.
      Scrollbar.destroyAll();
      // 스크롤과 동기화 된 gsap 관련 로직 비활성화.
      await gsapReady(false);
      // 활성화 된 skill content 초기화.
      setCurrentTarget(0);
      // 현재 url 정보를 활성화 목록에 재정의.
      setCurrentUrl(nextUrl);
      // 재정의된 내용으로 스크롤 다시 생성.
      makeSmoothScrollbarforSkill();
    },
    [gsapReady, makeSmoothScrollbarforSkill]
  );

  //스크롤 트리거가 변경 된 경우.
  const changeTarget = React.useCallback((id: number) => {
    // 스크롤 트리거가 감지한 영역 ID로 content를 변경.
    setCurrentTarget(id);
    // content의 text를 숨김.
    setOpacity('');

    // 시간차를 두고 텍스트 출력.
    const opacityTimer = setTimeout(() => {
      setOpacity('opacity');
      clearTimeout(opacityTimer);
    }, 100);
  }, []);

  const addToRefs = (el: HTMLLIElement | null) => {
    if (el && !lists.current.includes(el) && currentGsapState) {
      lists.current.push(el);
    }
  };

  // 중앙에 위치한 skill 세부 목록 영역에 스크롤 트리거 적용.
  const listScroller = React.useCallback(() => {
    lists.current.forEach((el, index) => {
      gsap.to(el, {
        scrollTrigger: {
          id: `list-${index + 1}`,
          trigger: el,
          scroller: '.skill-list',
          start: 'top center',
          // 활성화 클래스를 토글.
          toggleClass: { targets: el, className: 'active' },
          // 아래에서 부터 영역 들어올 시 활성화 대상을 전달.
          onEnter: () => changeTarget(index),
          // 위에서 부터 영역 들어올 시 활성화 대상을 전달.
          onEnterBack: () => changeTarget(index),
          end: 'bottom center',
        },
      });
    });
  }, [changeTarget]);

  // 스크롤 트리거와 연동된 skew 애니메이션 적용.
  const scrollSkew = () => {
    const proxy = { skew: 0 };
    const skewSetter = gsap.quickSetter('.list', 'skewY', 'deg');
    const clamp = gsap.utils.clamp(-20, 20);

    ScrollTrigger.create({
      scroller: '.skill-list',
      onUpdate: (self) => {
        const skew = clamp(self.getVelocity() / -200);
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.3,
            ease: 'power3',
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });
  };

  // skill 세부 목록을 클릭 시,
  const clickList = (target: {
    number: number;
    id: string;
    name: string;
    workmanship: number;
    summary: string;
  }) => {
    if (!scrollPosition.current || !currentSkillScroller) return;
    // skill 세부 목록의 중앙 영역을 계산.
    const listHeight = scrollPosition.current.clientHeight / 3;
    // skill 세부 목록의 중앙 영역으로 스크롤 이동.
    currentSkillScroller.scrollTo(0, listHeight * (+target.number - 1), 600);
  };

  // Props로 받는 값에 대한 interface 정의.
  interface SkillListProps {
    targetUrl: string;
    text: string;
  }

  // skill 목록 템플릿.
  const SkillList = ({ targetUrl, text }: SkillListProps) => {
    return (
      <li>
        <button
          className={currentUrl === targetUrl ? 'active' : ''}
          onClick={() => changeList(targetUrl)}
          onMouseEnter={() => _onHover(' focus-cursor')}
          onMouseLeave={onListLeave}
          data-list={targetUrl}
        >
          {text}
        </button>
      </li>
    );
  };

  // skill 세부 목록 및 컨텐츠 템플릿.
  const contents = (contentKind: 'list' | 'detail') => {
    type SkillItem = {
      number: number;
      id: string;
      name: string;
      workmanship: number;
      summary: string;
    };

    let content: SkillItem[] = [];

    // svg json을 읽어와서 키와 값으로 할당.
    const svgs = Object.entries(svg as Record<string, string>);
    const svgContent = new Map<string, string>();
    svgs.forEach(([key, value]) => {
      svgContent.set(key, value);
    });

    // url에 따라 출력할 json 데이터를 매치.
    if (currentUrl === 'language') {
      content = (language as any).language;
    } else if (currentUrl === 'lib') {
      content = (lib as any).lib;
    } else if (currentUrl === 'tool') {
      content = (tool as any).tool;
    } else if (currentUrl === 'interest') {
      content = (interest as any).interest;
    } else {
      content = [{ number: 0, id: '', name: '', workmanship: 0, summary: '' }];
    }

    // skill 세부 목록 템플릿
    if (contentKind === 'list') {
      return content.map((item) => (
        <li
          key={item.number}
          className='list col-4 col-l-3 pl-pr-none'
          ref={addToRefs}
          onClick={() => clickList(item)}
          onMouseEnter={() => listHover(item.number)}
          onMouseLeave={onListLeave}
        >
          <div className={`inner ${listHoverMotion}`}>
            {svgContent.has(item.id) === false ? (
              <div>{item.name}</div>
            ) : (
              <div
                dangerouslySetInnerHTML={{
                  __html: svgContent.get(item.id) || '',
                }}
              ></div>
            )}
          </div>
        </li>
      ));
    }

    // skill 컨텐츠 템플릿.
    const current = content[currentTarget] || content[0];

    return (
      <>
        <div className='pagenation'>
          <span>{currentTarget + 1}</span>/<span>{content.length}</span>
        </div>
        <div className='content'>
          <div>
            <div className={`levels level-${current.workmanship} ${opacity}`}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h2 className={opacity}>{current.name}</h2>
          </div>
          <p className={`${opacity}${current.workmanship}`}>
            {current.summary.split('\n').map((item, idx) => (
              <span key={idx}>
                {item}
                <br />
              </span>
            ))}
          </p>
        </div>
        <span className={`back-text ${opacity}`}>{current.name}</span>
      </>
    );
  };

  // 화면 진입 또는 리랜더 시,
  React.useEffect(() => {
    // 기존 스크롤바 제거.
    Scrollbar.destroyAll();
    // 스크롤 트리거 비활성화.
    gsapReady(false);
    // 현재 컨텐츠 데이터에 맞춰 스크롤 재생성 및 스크롤 트리거 연결.
    makeSmoothScrollbarforSkill();

    // 화면 벗어날 시 스크롤 트리거 및 커서 초기화.
    return () => {
      const triggers = ScrollTrigger.getAll();
      triggers.forEach((item) => {
        item.kill();
      });

      _onLeave();
    };
  }, [gsapReady, makeSmoothScrollbarforSkill, _onLeave]);

  // gsap준비된 경우 스크롤 트리커 연결.
  React.useEffect(() => {
    if (currentGsapState) {
      listScroller();
      scrollSkew();
    }
  }, [currentGsapState, listScroller]);

  // url 변경 감지 (Next router 기반)
  React.useEffect(() => {
    if (!router.isReady) return;

    const listParam = router.query.list;
    const nextUrl = typeof listParam === 'string' ? listParam : 'language';

    if (nextUrl !== currentUrl) {
      // 스크롤 재생성 및 스크롤 트리거 재연동.
      changeHistoryList(nextUrl);
    }
  }, [router.isReady, router.query.list, currentUrl, changeHistoryList]);

  return (
    <div className='skill-detail'>
      <div className='container fluid pl-pr-none'>
        <ul className='skill-tab'>
          <SkillList targetUrl='language' text='언어' />
          <SkillList targetUrl='lib' text='프레임워크&라이브러리' />
          <SkillList targetUrl='tool' text='개발 도구' />
          <SkillList targetUrl='interest' text='최근 관심 기술' />
        </ul>

        <div className='row content-frame'>
          <div className='col-12 pl-pr-none skill-list-frame'>
            <ul className='skill-list' ref={scrollPosition}>
              <li className='default-list col-4 col-l-3'></li>
              {contents('list')}
              <li className='default-list col-4 col-l-3'></li>
            </ul>
          </div>

          <div className='col-8 off-4 col-l-9 off-l-3 pl-pr-none skill-detail-content-frame'>
            <div className='skill-detail-content'>{contents('detail')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetail;
