import React, { memo, useState, useRef, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { isDesktop, isMobile } from 'react-device-detect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import aboutOne from 'static/images/about-one.jpg';
import aboutTwo from 'static/images/about-two.jpg';
import aboutThree from 'static/images/about-three.jpg';

import './about.scss';

gsap.registerPlugin(ScrollTrigger);

const About = ({ onHover, onClick, onLeaves }) => {
  const [currentGsapState, currentButtonDelay] = useSelector(state => [state.CommonValue.currentGsapState, state.CommonValue.currentButtonDelay], shallowEqual);

  const [nextText, setNextText] = useState(true);
  const [aboutAnimationReady, setAboutAnimationReady] = useState(false);
  const [aboutAnimationTrigger, setAboutAnimationTrigger] = useState(false);
  const savedChangeTarget = useRef();

  const aboutComponentGSAP = () => {
    const aboutDetailButtonTopTrigger = {
      trigger: '.about-detail-button button',
      start: 'top-=250% center',
      end: 'bottom-=50% center',
      scrub: true
    }

    const aboutDetailButtonBottomTrigger = {
      trigger: '.about-detail-button button',
      start: 'top+=50% center',
      end: 'bottom+=350% center',
      scrub: true
    }
    const aboutTitleTrigger = {
      trigger: '.about-section',
      start: 'top+=100 bottom',
      end: 'top+=1000 bottom',
      scrub: 2
    }
    const firstChangeTextTrigger = {
      trigger: '.text-animation-frame',
      start: 'top-=50% center',
      end: 'bottom+=35% center',
      scrub: true
    }
    const secondChangeTextTrigger = {
      trigger: '.text-animation-frame',
      start: 'top-=17% center',
      end: 'bottom+=68% center',
      scrub: true
    }
    const thirdChangeTextTrigger = {
      trigger: '.text-animation-frame',
      start: 'top+=16% center',
      end: 'bottom+=101% center',
      scrub: true
    }
    const changeTextParseIntModifiers = {
      y: (y) => {
        y = parseInt(y);
        var newY = y.toFixed(0);
        return newY + 'px';
      }
    }
    const yPercentParseIntModifiers = {
      y: (y) => {
        y = parseInt(y);
        var newY = y.toFixed(0);
        return newY + '%';
      }
    }

    gsap.fromTo('.two', {
      opacity: 0
    }, {
      opacity: 1,
      scrollTrigger: {
        trigger: '.two',
        start: 'top+=30% bottom',
        end: 'bottom bottom',
        scrub: 1
      }
    });

    gsap.fromTo('.about-side-image', {
      opacity: 0
    }, {
      opacity: 1,
      scrollTrigger: {
        trigger: '.about-side-image',
        start: 'top+=80% bottom',
        end: 'bottom+=80% bottom',
        scrub: 1
      }
    });

    gsap.fromTo('.two img', {
      yPercent: 5,
    }, {
      yPercent: -5,
      scrollTrigger: {
        trigger: '.about-image-frame',
        start: 'top center',
        end: 'bottom center',
        scrub: 1
      }
    });

    gsap.to('.text-animation-frame', {
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top bottom',
        onEnter: () => setAboutAnimationReady(true),
        onEnterBack: () => setAboutAnimationReady(true),
        onLeave: () => setAboutAnimationReady(false),
        onLeaveBack: () => setAboutAnimationReady(false),
        end: 'bottom top'
      }
    });

    if (isDesktop) {
      gsap.fromTo('.shadow-inset', {
        boxShadow: 'inset 0 0rem 0rem rgba(0, 0, 0, 0)'
      }, {
        boxShadow: 'inset 0 -1.5rem 0.7rem rgba(0, 0, 0, 0.1)',
        scrollTrigger: aboutDetailButtonBottomTrigger
      });

      gsap.fromTo('.shadow-inset-deep', {
        boxShadow: 'inset 0 0rem 0rem rgba(0, 0, 0, 0)'
      }, {
        boxShadow: 'inset 0 -1rem 0.5rem rgba(0, 0, 0, 0.3)',
        scrollTrigger: aboutDetailButtonBottomTrigger
      });

      gsap.fromTo('.shadow-inset-deep2', {
        boxShadow: 'inset 0 0rem 0rem rgba(0, 0, 0, 0)'
      }, {
        boxShadow: 'inset 0 -0.3rem 0.3rem rgba(0, 0, 0, 0.5)',
        scrollTrigger: aboutDetailButtonBottomTrigger
      });

      gsap.fromTo('.shadow-inset', {
        boxShadow: 'inset 0 1.5rem 0.7rem rgba(0, 0, 0, 0.1)'
      }, {
        boxShadow: 'inset 0 0rem 0rem rgba(0, 0, 0, 0)',
        scrollTrigger: aboutDetailButtonTopTrigger
      });

      gsap.fromTo('.shadow-inset-deep', {
        boxShadow: 'inset 0 1rem 0.5rem rgba(0, 0, 0, 0.3)'
      }, {
        boxShadow: 'inset 0 0rem 0rem rgba(0, 0, 0, 0)',
        scrollTrigger: aboutDetailButtonTopTrigger
      });

      gsap.fromTo('.shadow-inset-deep2', {
        boxShadow: 'inset 0 0.3rem 0.3rem rgba(0, 0, 0, 0.5)'
      }, {
        boxShadow: 'inset 0 0rem 0rem rgba(0, 0, 0, 0)',
        scrollTrigger: aboutDetailButtonTopTrigger
      });

      gsap.fromTo('.shadow', {
        boxShadow: '0 0rem 0rem rgba(0, 0, 0, 0)',
      }, {
        boxShadow: '0 -1rem 0.5rem rgba(0, 0, 0, 0.1)',
        scrollTrigger: aboutDetailButtonBottomTrigger
      });

      gsap.fromTo('.shadow-deep', {
        boxShadow: '0 0rem 0rem rgba(0, 0, 0, 0)',
      }, {
        boxShadow: '0 -0.5rem 0.3rem rgba(0, 0, 0, 0.3)',
        scrollTrigger: aboutDetailButtonBottomTrigger
      });

      gsap.fromTo('.shadow-deep2', {
        boxShadow: '0 0rem 0rem rgba(0, 0, 0, 0)',
      }, {
        boxShadow: '0 -0.25rem 0.1rem rgba(0, 0, 0, 0.5)',
        scrollTrigger: aboutDetailButtonBottomTrigger
      });

      gsap.fromTo('.shadow', {
        boxShadow: '0 1rem 0.5rem rgba(0, 0, 0, 0.1)'
      }, {
        boxShadow: '0 0rem 0rem rgba(0, 0, 0, 0)',
        scrollTrigger: aboutDetailButtonTopTrigger
      });

      gsap.fromTo('.shadow-deep', {
        boxShadow: '0 0.5rem 0.3rem rgba(0, 0, 0, 0.3)'
      }, {
        boxShadow: '0 0rem 0rem rgba(0, 0, 0, 0)',
        scrollTrigger: aboutDetailButtonTopTrigger
      });

      gsap.fromTo('.shadow-deep2', {
        boxShadow: '0 0.25rem 0.1rem rgba(0, 0, 0, 0.5)'
      }, {
        boxShadow: '0 0rem 0rem rgba(0, 0, 0, 0)',
        scrollTrigger: aboutDetailButtonTopTrigger
      });
    }

    ScrollTrigger.matchMedia({
      '(min-width: 769px)': () => {
        gsap.fromTo('.about-title', {
          yPercent: -250,
          textShadow: '0 5rem 1rem rgba(0,0,0,0.3)'
        }, {
          yPercent: 50,
          modifiers: yPercentParseIntModifiers,
          textShadow: '0 3rem 1rem rgba(0,0,0,0.3)',
          scrollTrigger: aboutTitleTrigger
        });

        gsap.fromTo('.first-span', {
          y: -30
        }, {
          y: 30,
          modifiers: changeTextParseIntModifiers,
          scrollTrigger: firstChangeTextTrigger
        });

        gsap.fromTo('.second-span', {
          y: -30
        }, {
          y: 30,
          modifiers: changeTextParseIntModifiers,
          scrollTrigger: secondChangeTextTrigger
        });

        gsap.fromTo('.third-span', {
          y: -30
        }, {
          y: 30,
          modifiers: changeTextParseIntModifiers,
          scrollTrigger: thirdChangeTextTrigger
        });
      },

      '(max-width: 768px)': () => {
        gsap.fromTo('.about-title', {
          yPercent: -350,
          textShadow: '0 2.5rem 1rem rgba(0,0,0,0.3)'
        }, {
          yPercent: 0,
          modifiers: yPercentParseIntModifiers,
          textShadow: '0 1.5rem 1rem rgba(0,0,0,0.3)',
          scrollTrigger: aboutTitleTrigger
        });

        if (isDesktop) {
          gsap.fromTo('.first-span', {
            y: -10
          }, {
            y: 10,
            modifiers: changeTextParseIntModifiers,
            scrollTrigger: firstChangeTextTrigger
          });

          gsap.fromTo('.second-span', {
            y: -10
          }, {
            y: 10,
            modifiers: changeTextParseIntModifiers,
            scrollTrigger: secondChangeTextTrigger
          });

          gsap.fromTo('.third-span', {
            y: -10
          }, {
            y: 10,
            modifiers: changeTextParseIntModifiers,
            scrollTrigger: thirdChangeTextTrigger
          });
        }
      }
    })
  }

  const autoChangeText = () => {
    setNextText(!nextText)
  }

  useEffect(() => {
    if (aboutAnimationReady) {
      setAboutAnimationTrigger(true)
    }
  }, [aboutAnimationReady])

  useEffect(() => {
    if (aboutAnimationTrigger) {
      const changeTextInterval = setInterval(() => {
        savedChangeTarget.current();
      }, 5000)
      return () => clearInterval(changeTextInterval);
    }

    return () => savedChangeTarget.current();
  }, [aboutAnimationTrigger])

  useEffect(() => {
    savedChangeTarget.current = autoChangeText;
  });

  useEffect(() => {
    currentGsapState && aboutComponentGSAP();
  }, [currentGsapState])

  return (
    <section id='about' className='container about-section fluid'>
      <div className='container about-frame'>
        <div className='title-frame'>
          <h1 className={`title-text about-title${aboutAnimationReady ? ' will-change' : ''}`}>About</h1>
        </div>

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

        <div className='text-animation-frame'>
          <div className={`first-line${isDesktop && aboutAnimationReady ? ' desktop will-change' : ''}${isMobile ? ' mobile' : ''}${nextText ? ' second' : ' first'}`}>{nextText ? <div>Idea<span className='first-span'>Idea</span> </div> : <div>AGILE<span className='first-span'>AGILE</span></div>}</div>

          <div className={`second-line${isDesktop && aboutAnimationReady ? ' desktop will-change' : ''}${isMobile ? ' mobile' : ''}${nextText ? ' second' : ' first'}`}>{nextText ? <div>Premeditated<span className='second-span'>Premeditated</span></div> : <div>Until it works<span className='second-span'>Until it works</span></div>}</div>

          <div className={`third-line${isDesktop && aboutAnimationReady ? ' desktop will-change' : ''}${isMobile ? ' mobile' : ''}${nextText ? ' second' : ' first'}`}>{nextText ? <div>Meticulous<span className='third-span'>Meticulous</span></div> : <div>Honest<span className='third-span'>Honest</span></div>}</div>
        </div>

        <div className='about-detail-button'>
          <button className={`${isDesktop && aboutAnimationReady ? 'will-change' : ''}${isMobile ? ' mobile' : ''}${currentButtonDelay ? ' delay' : ''}`} onMouseEnter={() => onHover(' go-cursor')} onMouseLeave={() => onLeaves()} onClick={() => onClick('/about')}>
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
    </section >
  )
}

export default memo(About);
