import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';
import React from 'react';
import { isDesktop } from '@/utils/device';
import { useShallow } from 'zustand/react/shallow';

import './smoothScroll.scss';

import Scrollbar from 'smooth-scrollbar';
import useStore from '../../store/useStore';

gsap.registerPlugin(ScrollTrigger);

// Props로 받는 이벤트들에 대한 interface 정의.
interface SmoothScrollProps {
  children?: React.ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  // next/navigation으로 현재 경로 확인.
  const pathname = usePathname();

  // 전역 스토어 액션 (zustand 액션은 참조가 안정적이라 의존성 배열에 안전하게 사용 가능).
  const gsapReady = useStore((s) => s.changeGsapState);
  const makeScroll = useStore((s) => s.makeSmoothScroll);
  const checkScroll = useStore((s) => s.checkScrollValue);
  const checkLimit = useStore((s) => s.checkScrollLimit);
  const onSmoothTop = useStore((s) => s.smoothTop);

  // 전역 스토어 구독.
  const [currentSmoothTopState, makeScrollState] = useStore(
    useShallow((s) => [s.currentSmoothTopState, s.makeScrollState])
  );

  const smoothScroller = React.useRef<HTMLDivElement>(null);
  const smoothScrollTarget = React.useRef<Scrollbar | null>(null);
  const [currentScroller, setCurrentScroller] = React.useState<Scrollbar | null>(null);

  // 마운트 시 스무스 스크롤을 1회만 생성하고, 언마운트 시 리스너 제거 및 인스턴스 파기.
  React.useEffect(() => {
    if (!smoothScroller.current) return;

    const scrollbar = Scrollbar.init(smoothScroller.current, {
      damping: 0.03,
      renderByPixels: isDesktop,
      continuousScrolling: isDesktop,
      alwaysShowTracks: true,
    });
    smoothScrollTarget.current = scrollbar;

    // 스크롤 퍼센트 출력을 위해 현재 scroll 및 max 값 저장.
    // add/remove에 동일한 함수 참조를 사용해야 정상적으로 제거된다.
    const onScrollUpdate = () => {
      checkScroll(scrollbar.scrollTop);
      checkLimit(scrollbar.limit.y);
    };
    scrollbar.addListener(onScrollUpdate);

    // 스크롤 트리거와 연계.
    ScrollTrigger.scrollerProxy(smoothScroller.current, {
      scrollTop(...args) {
        if (args.length) {
          scrollbar.scrollTop = args[0] as number;
        }
        return scrollbar.scrollTop;
      },
      // pinType = .scroll-content가 transform:translate3d로 움직이는 커스텀 스크롤러라 핀 좌표계를 transform으로 고정.
      pinType: 'transform',
    });
    ScrollTrigger.defaults({ scroller: smoothScroller.current });
    scrollbar.addListener(ScrollTrigger.update);

    // 트리거 생성 후 폰트 swap·이미지 디코드·SplitText 분해·아이콘 동적로드로 콘텐츠 높이가 뒤늦게 자라면
    // pin의 start/end·pin-spacer 좌표가 stale해져 위 섹션이 핀 영역을 침범한다(간헐적 섹션 겹침).
    // 높이 변동이 멎으면 refresh로 전 트리거 좌표를 재계산한다. (update≠refresh: 라이브러리는 limit만 갱신)
    let refreshTimer: ReturnType<typeof setTimeout> | undefined;
    const scheduleRefresh = () => {
      clearTimeout(refreshTimer);
      // 200ms trailing + rAF = SplitText처럼 5ms 간격으로 높이가 바뀌어도 멎은 뒤 1회만 refresh(폭주·점프 방지).
      refreshTimer = setTimeout(() => {
        requestAnimationFrame(() => {
          if (!smoothScrollTarget.current) return; // 언마운트 후 호출 방지.
          ScrollTrigger.refresh();
        });
      }, 200);
    };
    // 콘텐츠 높이 변동 감지(라이브러리의 scrollbar.update와 별개로 refresh만 예약).
    const contentResizeObserver = new ResizeObserver(scheduleRefresh);
    contentResizeObserver.observe(scrollbar.contentEl);
    // 비동기 안정화 신호도 같은 디바운스로 합류(어느 순서로 끝나도 마지막에 수렴).
    document.fonts?.ready.then(scheduleRefresh);
    window.addEventListener('load', scheduleRefresh, { once: true });

    gsapReady(true);
    setCurrentScroller(scrollbar);

    return () => {
      contentResizeObserver.disconnect();
      clearTimeout(refreshTimer);
      window.removeEventListener('load', scheduleRefresh);
      scrollbar.removeListener(onScrollUpdate);
      scrollbar.removeListener(ScrollTrigger.update);
      scrollbar.destroy();
      smoothScrollTarget.current = null;
    };
  }, [checkLimit, checkScroll, gsapReady]);

  // 페이지 전환 등으로 스크롤 재설정 요청(makeScrollState) 시 위치만 초기화.
  React.useEffect(() => {
    if (currentScroller && makeScrollState) {
      currentScroller.setPosition(0, 0);
      makeScroll(false);
    }
  }, [currentScroller, makeScrollState, makeScroll]);

  // 스크롤러가 있고, currentSmoothTopState이 true로 들어오면 스크롤 위치 초기화.
  React.useEffect(() => {
    if (currentScroller && currentSmoothTopState) {
      currentScroller.scrollTo(0, 0, 600);
      const reset = setTimeout(() => onSmoothTop(false), 600);
      return () => clearTimeout(reset);
    }
  }, [currentScroller, currentSmoothTopState, onSmoothTop]);

  return (
    <div
      className={`smooth-scroll-frame${pathname === '/footprint' ? ' opacity-none' : ''}`}
      ref={smoothScroller}
    >
      <div>{children}</div>
    </div>
  );
};

export default SmoothScroll;
