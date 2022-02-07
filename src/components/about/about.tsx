import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { isDesktop, isMobile } from 'react-device-detect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import aboutOne from '../../static/images/about-one.jpg';
import aboutTwo from '../../static/images/about-two.jpg';
import aboutThree from '../../static/images/about-three.jpg';

import './about.scss';
import { RootState } from '../../Modules';

gsap.registerPlugin(ScrollTrigger);

// Props로 받는 이벤트들에 대한 interface 정의.
interface AboutProps {
  _onHover: (hoverCursor: string, hoverText?: string | null) => void;
  _onClick: (path: string, hoverText?: string | null) => void;
  _onLeave: (hoverText?: string | null) => void;
}

const About = ({ _onHover, _onClick, _onLeave }: AboutProps) => {
  // redux useSelector 정의.
  const [currentGsapState, currentButtonDelay] = useSelector((state: RootState) => [state.CommonValue.currentGsapState, state.CommonValue.currentButtonDelay], shallowEqual);

  const [nextText, setNextText] = React.useState(true);
  const [aboutAnimationReady, setAboutAnimationReady] = React.useState(false);
  const savedChangeTarget = React.useRef<any>(null);

  // gasp 애니메이션 정의.
  const aboutComponentGSAP = () => {
    // 모어 버튼 트리거
    const aboutDetailButtonTopTrigger = {
      trigger: '.about-detail-button button',
      start: 'top-=250% center',
      end: 'bottom-=50% center',
      scrub: true,
    };

    const aboutDetailButtonBottomTrigger = {
      trigger: '.about-detail-button button',
      start: 'top+=50% center',
      end: 'bottom+=350% center',
      scrub: true,
    };

    // 어바웃 타이틀 트리거.
    const aboutTitleTrigger = {
      trigger: '.about-section',
      start: 'top+=100 bottom',
      end: 'top+=1000 bottom',
      scrub: 2,
    };

    // 슬라이드 텍스트 트리거
    const firstChangeTextTrigger = {
      trigger: '.text-animation-frame',
      start: 'top-=50% center',
      end: 'bottom+=35% center',
      scrub: true,
    };

    const secondChangeTextTrigger = {
      trigger: '.text-animation-frame',
      start: 'top-=17% center',
      end: 'bottom+=68% center',
      scrub: true,
    };

    const thirdChangeTextTrigger = {
      trigger: '.text-animation-frame',
      start: 'top+=16% center',
      end: 'bottom+=101% center',
      scrub: true,
    };

    // 슬라이드 텍스트 그림자 설정.
    const changeTextParseIntModifiers = {
      y: (y: any) => {
        y = parseInt(y);
        var newY = y.toFixed(0);
        return newY + 'px';
      },
    };

    // 어바웃 타이틀 그림자 설정.
    const yPercentParseIntModifiers = {
      y: (y: any) => {
        y = parseInt(y);
        var newY = y.toFixed(0);
        return newY + '%';
      },
    };

    // 어바웃 이미지 설정.
    gsap.fromTo('.two', {
      opacity: 0,
    }, {
      opacity: 1,
      scrollTrigger: {
        trigger: '.two',
        start: 'top+=30% bottom',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    gsap.fromTo('.about-side-image', {
      opacity: 0,
    }, {
      opacity: 1,
      scrollTrigger: {
        trigger: '.about-side-image',
        start: 'top+=80% bottom',
        end: 'bottom+=80% bottom',
        scrub: 1,
      },
    });

    gsap.fromTo('.two img', {
      yPercent: 5,
    }, {
      yPercent: -5,
      scrollTrigger: {
        trigger: '.about-image-frame',
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });

    // 슬라이드 텍스트 애니메이션 동작 여부.
    gsap.to('.text-animation-frame', {
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top bottom',
        onEnter: () => setAboutAnimationReady(true),
        onEnterBack: () => setAboutAnimationReady(true),
        onLeave: () => setAboutAnimationReady(false),
        onLeaveBack: () => setAboutAnimationReady(false),
        end: 'bottom top',
      },
    });

    // 모어 버튼 그림자 설정.
    if (isDesktop) {
      gsap.fromTo('.shadow-inset', {
        boxShadow: 'inset 0 0rem 0rem rgba(0, 0, 0, 0)',
      }, {
        boxShadow: 'inset 0 -1.5rem 0.7rem rgba(0, 0, 0, 0.1)',
        scrollTrigger: aboutDetailButtonBottomTrigger,
      });

      gsap.fromTo('.shadow-inset-deep', {
        boxShadow: 'inset 0 0rem 0rem rgba(0, 0, 0, 0)',
      }, {
        boxShadow: 'inset 0 -1rem 0.5rem rgba(0, 0, 0, 0.3)',
        scrollTrigger: aboutDetailButtonBottomTrigger,
      });

      gsap.fromTo('.shadow-inset-deep2', {
        boxShadow: 'inset 0 0rem 0rem rgba(0, 0, 0, 0)',
      }, {
        boxShadow: 'inset 0 -0.3rem 0.3rem rgba(0, 0, 0, 0.5)',
        scrollTrigger: aboutDetailButtonBottomTrigger,
      });

      gsap.fromTo('.shadow-inset', {
        boxShadow: 'inset 0 1.5rem 0.7rem rgba(0, 0, 0, 0.1)',
      }, {
        boxShadow: 'inset 0 0rem 0rem rgba(0, 0, 0, 0)',
        scrollTrigger: aboutDetailButtonTopTrigger,
      });

      gsap.fromTo('.shadow-inset-deep', {
        boxShadow: 'inset 0 1rem 0.5rem rgba(0, 0, 0, 0.3)',
      }, {
        boxShadow: 'inset 0 0rem 0rem rgba(0, 0, 0, 0)',
        scrollTrigger: aboutDetailButtonTopTrigger,
      });

      gsap.fromTo('.shadow-inset-deep2', {
        boxShadow: 'inset 0 0.3rem 0.3rem rgba(0, 0, 0, 0.5)',
      }, {
        boxShadow: 'inset 0 0rem 0rem rgba(0, 0, 0, 0)',
        scrollTrigger: aboutDetailButtonTopTrigger,
      });

      gsap.fromTo('.shadow', {
        boxShadow: '0 0rem 0rem rgba(0, 0, 0, 0)',
      }, {
        boxShadow: '0 -1rem 0.5rem rgba(0, 0, 0, 0.1)',
        scrollTrigger: aboutDetailButtonBottomTrigger,
      });

      gsap.fromTo('.shadow-deep', {
        boxShadow: '0 0rem 0rem rgba(0, 0, 0, 0)',
      }, {
        boxShadow: '0 -0.5rem 0.3rem rgba(0, 0, 0, 0.3)',
        scrollTrigger: aboutDetailButtonBottomTrigger,
      });

      gsap.fromTo('.shadow-deep2', {
        boxShadow: '0 0rem 0rem rgba(0, 0, 0, 0)',
      }, {
        boxShadow: '0 -0.25rem 0.1rem rgba(0, 0, 0, 0.5)',
        scrollTrigger: aboutDetailButtonBottomTrigger,
      });

      gsap.fromTo('.shadow', {
        boxShadow: '0 1rem 0.5rem rgba(0, 0, 0, 0.1)',
      }, {
        boxShadow: '0 0rem 0rem rgba(0, 0, 0, 0)',
        scrollTrigger: aboutDetailButtonTopTrigger,
      });

      gsap.fromTo('.shadow-deep', {
        boxShadow: '0 0.5rem 0.3rem rgba(0, 0, 0, 0.3)',
      }, {
        boxShadow: '0 0rem 0rem rgba(0, 0, 0, 0)',
        scrollTrigger: aboutDetailButtonTopTrigger,
      });

      gsap.fromTo('.shadow-deep2', {
        boxShadow: '0 0.25rem 0.1rem rgba(0, 0, 0, 0.5)',
      }, {
        boxShadow: '0 0rem 0rem rgba(0, 0, 0, 0)',
        scrollTrigger: aboutDetailButtonTopTrigger,
      });
    }

    // 뷰포트에 따라 위치값 조정.
    ScrollTrigger.matchMedia({
      '(min-width: 769px)': () => {
        gsap.fromTo('.about-title', {
          yPercent: -250,
          textShadow: '0 5rem 1rem rgba(0,0,0,0.3)',
        }, {
          yPercent: 50,
          modifiers: yPercentParseIntModifiers,
          textShadow: '0 3rem 1rem rgba(0,0,0,0.3)',
          scrollTrigger: aboutTitleTrigger,
        });

        gsap.fromTo('.first-span', {
          y: -30,
        }, {
          y: 30,
          modifiers: changeTextParseIntModifiers,
          scrollTrigger: firstChangeTextTrigger,
        });

        gsap.fromTo('.second-span', {
          y: -30,
        }, {
          y: 30,
          modifiers: changeTextParseIntModifiers,
          scrollTrigger: secondChangeTextTrigger,
        });

        gsap.fromTo('.third-span', {
          y: -30,
        }, {
          y: 30,
          modifiers: changeTextParseIntModifiers,
          scrollTrigger: thirdChangeTextTrigger,
        });
      },

      '(max-width: 768px)': () => {
        gsap.fromTo('.about-title', {
          yPercent: -350,
          textShadow: '0 2.5rem 1rem rgba(0,0,0,0.3)',
        }, {
          yPercent: 0,
          modifiers: yPercentParseIntModifiers,
          textShadow: '0 1.5rem 1rem rgba(0,0,0,0.3)',
          scrollTrigger: aboutTitleTrigger,
        });

        if (isDesktop) {
          gsap.fromTo('.first-span', {
            y: -10,
          }, {
            y: 10,
            modifiers: changeTextParseIntModifiers,
            scrollTrigger: firstChangeTextTrigger,
          });

          gsap.fromTo('.second-span', {
            y: -10,
          }, {
            y: 10,
            modifiers: changeTextParseIntModifiers,
            scrollTrigger: secondChangeTextTrigger,
          });

          gsap.fromTo('.third-span', {
            y: -10,
          }, {
            y: 10,
            modifiers: changeTextParseIntModifiers,
            scrollTrigger: thirdChangeTextTrigger,
          });
        }
      },
    });
  };

  const autoChangeText = React.useCallback(() => {
    setNextText(!nextText);
  }, [nextText]);

  // 화면에 어바웃 세션이 들어온 경우에 따라 동적 효과 동작 및 정지.
  React.useEffect(() => {
    if (aboutAnimationReady) {
      savedChangeTarget.current = setInterval(() => {
        autoChangeText();
      }, 5000);
    } else {
      savedChangeTarget.current && clearInterval(savedChangeTarget.current);
    }
    return () => clearInterval(savedChangeTarget.current);
  }, [aboutAnimationReady, autoChangeText]);

  // gasp가 준비된 경우 트리거 및 설정 진행.
  React.useEffect(() => {
    currentGsapState && aboutComponentGSAP();

    return () => {
      ScrollTrigger.clearMatchMedia();
      let triggers = ScrollTrigger.getAll();
      triggers.forEach((trigger) => {
        trigger.kill();
      });
    };
  }, [currentGsapState]);

  return (
    <section id='about' className='container about-section fluid'>
      <div className='container about-frame'>
        {/* 세션 타이틀 영역 */}
        <div className='title-frame'>
          <h1 className={`title-text about-title${aboutAnimationReady ? ' will-change' : ''}`}>
            About
          </h1>
        </div>

        {/* 이미지 영역 */}
        <div className='row about-image-frame'>
          <div className='col-4 pl-pr-none picture-frame'>
            <div className='one about-image about-side-image'>
              <img width='100%' height='100%' src={aboutOne} alt='creator 1' />
            </div>
          </div>

          <div className='col-4 pl-pr-none picture-frame'>
            <div className='two about-image'>
              <img width='100%' height='100%' src={aboutTwo} alt='creator 2' />
            </div>
          </div>

          <div className='col-4 pl-pr-none picture-frame'>
            <div className='three about-image about-side-image'>
              <img width='100%' height='100%' src={aboutThree} alt='creator 3' />
            </div>
          </div>
        </div>

        {/* 슬라이드 애니메이션 영역 */}
        <div className='text-animation-frame'>
          <div
            className={`first-line${isDesktop && aboutAnimationReady ? ' desktop will-change' : ''
              }${isMobile ? ' mobile' : ''}${nextText ? ' second' : ' first'}`}>
            {nextText ? (
              <div>
                Idea<span className='first-span'>Idea</span>
              </div>
            ) : (
              <div>
                AGILE<span className='first-span'>AGILE</span>
              </div>
            )}
          </div>

          <div
            className={`second-line${isDesktop && aboutAnimationReady ? ' desktop will-change' : ''
              }${isMobile ? ' mobile' : ''}${nextText ? ' second' : ' first'}`}>
            {nextText ? (
              <div>
                Premeditated<span className='second-span'>Premeditated</span>
              </div>
            ) : (
              <div>
                Until it works<span className='second-span'>Until it works</span>
              </div>
            )}
          </div>

          <div
            className={`third-line${isDesktop && aboutAnimationReady ? ' desktop will-change' : ''
              }${isMobile ? ' mobile' : ''}${nextText ? ' second' : ' first'}`}>
            {nextText ? (
              <div>
                Meticulous<span className='third-span'>Meticulous</span>
              </div>
            ) : (
              <div>
                Honest<span className='third-span'>Honest</span>
              </div>
            )}
          </div>
        </div>

        {/* 모어 버튼 영역 */}
        <div className='about-detail-button'>
          <button
            className={`${isDesktop && aboutAnimationReady ? 'will-change' : ''}${isMobile ? ' mobile' : ''}${currentButtonDelay ? ' delay' : ''}`}
            onMouseEnter={() => _onHover(' go-cursor')}
            onMouseLeave={() => _onLeave()}
            onClick={() => _onClick('/about')}
          >
            <span className='shadow-inset'></span>
            <span className='shadow-inset-deep'></span>
            <span className='shadow-inset-deep2'></span>
            More Detail
            <span className='shadow'></span>
            <span className='shadow-deep'></span>
            <span className='shadow-deep2'></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(About);
