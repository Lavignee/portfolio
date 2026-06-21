import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import { useShallow } from 'zustand/react/shallow';

import './skill.scss';

import useStore from '../../store/useStore';
import IconSlider from '../iconSlider';

gsap.registerPlugin(ScrollTrigger);

// Props로 받는 이벤트들에 대한 interface 정의.
interface SkillProps {
  _onHover: (hoverCursor: string, hoverText?: string | null) => void;
  _onClick: (path: string, hoverText?: string | null) => void;
  _onLeave: (hoverText?: string | null) => void;
}

const Skill = ({ _onHover, _onClick, _onLeave }: SkillProps) => {
  // 전역 스토어 액션.
  const makeScroll = useStore((s) => s.makeSmoothScroll);

  // 전역 스토어 구독.
  const [currentGsapState, currentButtonDelay] = useStore(
    useShallow((s) => [s.currentGsapState, s.currentButtonDelay])
  );

  const [sliderTrigger, setliderTrigger] = React.useState(false);

  // skill 화면에 진입 및 벗어남에 따라 아이콘 슬라이더 동작 조정.
  const skillComponentGSAP = () => {
    gsap.to('.skill-section', {
      scrollTrigger: {
        trigger: '.skill-section',
        start: 'top bottom',
        onEnter: () => setliderTrigger(true),
        onLeaveBack: () => setliderTrigger(false),
        end: 'bottom top',
      },
    });

    gsap.fromTo(
      '.skill-section',
      {
        // opacity: 1,
        // filter: 'blur(0px)'
      },
      {
        // opacity: 0.1,
        // filter: 'blur(3px)',
        scrollTrigger: {
          trigger: '.skill-section',
          pin: true,
          start: 'bottom bottom',
          end: 'bottom+=100% bottom',
          scrub: true,
        },
      }
    );
  };
  // gsap.context로 이 컴포넌트가 만든 트리거만 추적·정리(형제 섹션 트리거 보호).
  const gsapCtx = React.useRef<ReturnType<typeof gsap.context> | null>(null);
  void (
    // gsap가 준비된 후 애니메이션 동작.
    // biome-ignore lint/correctness/useExhaustiveDependencies: GSAP 셋업은 currentGsapState 변화 시 1회만 실행해야 하며, 셋업 함수를 의존성에 추가하면 매 렌더 재초기화됨.
    React.useEffect(() => {
      makeScroll(true);
      gsapCtx.current = gsap.context(() => {
        currentGsapState && skillComponentGSAP();
      });

      return () => {
        gsapCtx.current?.revert();
      };
    }, [currentGsapState, makeScroll])
  );

  // Props로 받는 이벤트들에 대한 interface 정의.
  interface SkillListTemplateProps {
    path: string;
    text: string;
    text2?: string | null | undefined;
  }

  // 스킬리스트 템플릿.
  const SkillListTemplate = ({ path, text, text2 }: SkillListTemplateProps) => {
    return (
      <div className='off-m-2 col-m-10 off-xl-4 col-xl-8 off-w-6 col-w-6 list'>
        <button
          type='button'
          className={`link-button${currentButtonDelay ? ' delay' : ''}`}
          onMouseEnter={() => _onHover(' go-cursor')}
          onMouseLeave={() => _onLeave()}
          onClick={() => _onClick(path)}
        >
          {text}
          {text2 && (
            <>
              <br /> {text2}
            </>
          )}
        </button>
      </div>
    );
  };

  return (
    <section id='skill'>
      <div className='container skill-section fluid'>
        <IconSlider sliderTrigger={sliderTrigger} />
        <div className='container skill-frame'>
          <h1 className='title-text skill-title'>Skill</h1>
          <div className='row list-frame'>
            <SkillListTemplate path='/skill/language' text='언어' />
            <SkillListTemplate path='/skill/lib' text='프레임워크&' text2='라이브러리' />
            <SkillListTemplate path='/skill/tool' text='개발 도구' />
            <SkillListTemplate path='/skill/interest' text='최근 관심 기술' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Skill);
