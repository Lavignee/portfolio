import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeClassName, changeSecondClassName } from '../../Modules/CursorModule';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutOne from '../../Static/images/about-one.jpg';
import aboutTwo from '../../Static/images/about-two.jpg';
import aboutThree from '../../Static/images/about-three.jpg';
import './AboutComponent.scss';

gsap.registerPlugin(ScrollTrigger);

const AboutComponent = ({ screenCover }) => {
  const [nextText, setNextText] = useState(false);
  const savedChangeTarget = useRef();
  const dispatch = useDispatch();
  const cursorClass = (className) => dispatch(changeClassName(className));
  const cursorSecondClass = (secondClassName) => dispatch(changeSecondClassName(secondClassName));

  const aboutDetailHover = () => {
    cursorClass(' go-cursor');
  }

  const onLeave = () => {
    cursorClass('');
    cursorSecondClass('')
  };

  const onscreenCover = () => {
    screenCover();
    onLeave();
  }

  const autoChangeText = () => {
    setNextText(!nextText)
  }

  const aboutGsap = () => {
    gsap.fromTo('.two', {
      opacity: 0
    }, {
      opacity: 1,
      scrollTrigger: {
        scroller: '#root',
        id: 'two',
        trigger: '.two',
        start: 'top+=30% bottom',
        end: 'bottom bottom',
        scrub: true
      }
    });

    gsap.fromTo('.about-side-image', {
      opacity: 0
    }, {
      opacity: 1,
      scrollTrigger: {
        scroller: '#root',
        id: 'about-side-image',
        trigger: '.about-side-image',
        start: 'top+=80% bottom',
        end: 'bottom+=80% bottom',
        scrub: true
      }
    });

    gsap.fromTo('.two img', {
      y: 5 + '%',
    }, {
      y: -5 + '%',
      scrollTrigger: {
        scroller: '#root',
        id: 'about-image',
        trigger: '.about-image-frame',
        start: 'top center',
        end: 'bottom center',
        scrub: true
      }
    });

    gsap.fromTo('.shadow-inset', {
      boxShadow: 'inset 0 0rem 0rem rgba(0, 0, 0, 0)'
    }, {
      boxShadow: 'inset 0 -1.5rem 0.7rem rgba(0, 0, 0, 0.1)',
      scrollTrigger: {
        scroller: '#root',
        id: 'shadow-inset',
        trigger: '.about-detail-button button',
        start: 'top+=50% center',
        end: 'bottom+=350% center',
        scrub: true
      }
    });

    gsap.fromTo('.shadow-inset-deep', {
      boxShadow: 'inset 0 0rem 0rem rgba(0, 0, 0, 0)'
    }, {
      boxShadow: 'inset 0 -1rem 0.5rem rgba(0, 0, 0, 0.3)',
      scrollTrigger: {
        scroller: '#root',
        id: 'shadow-inset-deep',
        trigger: '.about-detail-button button',
        start: 'top+=50% center',
        end: 'bottom+=350% center',
        scrub: true
      }
    });

    gsap.fromTo('.shadow-inset-deep2', {
      boxShadow: 'inset 0 0rem 0rem rgba(0, 0, 0, 0)'
    }, {
      boxShadow: 'inset 0 -0.3rem 0.3rem rgba(0, 0, 0, 0.5)',
      scrollTrigger: {
        scroller: '#root',
        id: 'shadow-inset-deep2',
        trigger: '.about-detail-button button',
        start: 'top+=50% center',
        end: 'bottom+=350% center',
        scrub: true
      }
    });

    gsap.fromTo('.shadow-inset', {
      boxShadow: 'inset 0 1.5rem 0.7rem rgba(0, 0, 0, 0.1)'
    }, {
      boxShadow: 'inset 0 0rem 0rem rgba(0, 0, 0, 0)',
      scrollTrigger: {
        scroller: '#root',
        id: 'shadow-inset',
        trigger: '.about-detail-button button',
        start: 'top-=250% center',
        end: 'bottom-=50% center',
        scrub: true
      }
    });

    gsap.fromTo('.shadow-inset-deep', {
      boxShadow: 'inset 0 1rem 0.5rem rgba(0, 0, 0, 0.3)'
    }, {
      boxShadow: 'inset 0 0rem 0rem rgba(0, 0, 0, 0)',
      scrollTrigger: {
        scroller: '#root',
        id: 'shadow-inset-deep',
        trigger: '.about-detail-button button',
        start: 'top-=250% center',
        end: 'bottom-=50% center',
        scrub: true
      }
    });

    gsap.fromTo('.shadow-inset-deep2', {
      boxShadow: 'inset 0 0.3rem 0.3rem rgba(0, 0, 0, 0.5)'
    }, {
      boxShadow: 'inset 0 0rem 0rem rgba(0, 0, 0, 0)',
      scrollTrigger: {
        scroller: '#root',
        id: 'shadow-inset-deep2',
        trigger: '.about-detail-button button',
        start: 'top-=250% center',
        end: 'bottom-=50% center',
        scrub: true
      }
    });

    gsap.fromTo('.shadow', {
      boxShadow: '0 0rem 0rem rgba(0, 0, 0, 0)',
    }, {
      boxShadow: '0 -1rem 0.5rem rgba(0, 0, 0, 0.1)',
      scrollTrigger: {
        scroller: '#root',
        id: 'shadow',
        trigger: '.about-detail-button button',
        start: 'top+=50% center',
        end: 'bottom+=350% center',
        scrub: true
      }
    });

    gsap.fromTo('.shadow-deep', {
      boxShadow: '0 0rem 0rem rgba(0, 0, 0, 0)',
    }, {
      boxShadow: '0 -0.5rem 0.3rem rgba(0, 0, 0, 0.3)',
      scrollTrigger: {
        scroller: '#root',
        id: 'shadow-deep',
        trigger: '.about-detail-button button',
        start: 'top+=50% center',
        end: 'bottom+=350% center',
        scrub: true
      }
    });

    gsap.fromTo('.shadow-deep2', {
      boxShadow: '0 0rem 0rem rgba(0, 0, 0, 0)',
    }, {
      boxShadow: '0 -0.25rem 0.1rem rgba(0, 0, 0, 0.5)',
      scrollTrigger: {
        scroller: '#root',
        id: 'shadow-deep2',
        trigger: '.about-detail-button button',
        start: 'top+=50% center',
        end: 'bottom+=350% center',
        scrub: true
      }
    });

    gsap.fromTo('.shadow', {
      boxShadow: '0 1rem 0.5rem rgba(0, 0, 0, 0.1)'
    }, {
      boxShadow: '0 0rem 0rem rgba(0, 0, 0, 0)',
      scrollTrigger: {
        scroller: '#root',
        id: 'shadow',
        trigger: '.about-detail-button button',
        start: 'top-=250% center',
        end: 'bottom-=50% center',
        scrub: true
      }
    });

    gsap.fromTo('.shadow-deep', {
      boxShadow: '0 0.5rem 0.3rem rgba(0, 0, 0, 0.3)'
    }, {
      boxShadow: '0 0rem 0rem rgba(0, 0, 0, 0)',
      scrollTrigger: {
        scroller: '#root',
        id: 'shadow-deep',
        trigger: '.about-detail-button button',
        start: 'top-=250% center',
        end: 'bottom-=50% center',
        scrub: true
      }
    });

    gsap.fromTo('.shadow-deep2', {
      boxShadow: '0 0.25rem 0.1rem rgba(0, 0, 0, 0.5)'
    }, {
      boxShadow: '0 0rem 0rem rgba(0, 0, 0, 0)',
      scrollTrigger: {
        scroller: '#root',
        id: 'shadow-deep2',
        trigger: '.about-detail-button button',
        start: 'top-=250% center',
        end: 'bottom-=50% center',
        scrub: true
      }
    });

    ScrollTrigger.matchMedia({
      "(min-width: 769px)": function () {
        gsap.fromTo('.about-title', {
          y: -250 + '%',
          textShadow: '0 5rem 1rem rgba(0,0,0,0.3)'
        }, {
          y: 50 + '%',
          textShadow: '0 3rem 1rem rgba(0,0,0,0.3)',
          scrollTrigger: {
            scroller: '#root',
            id: 'about-title',
            trigger: '.about-section',
            start: 'top+=100 bottom',
            end: 'top+=1000 bottom',
            scrub: true
          }
        });

        gsap.fromTo('.first-span', {
          y: -30
        }, {
          y: 30,
          scrollTrigger: {
            scroller: '#root',
            id: 'first-line',
            trigger: '.text-animation-frame',
            start: 'top-=50% center',
            end: 'bottom+=35% center',
            scrub: true
          }
        });

        gsap.fromTo('.second-span', {
          y: -30
        }, {
          y: 30,
          scrollTrigger: {
            scroller: '#root',
            id: 'second-line',
            trigger: '.text-animation-frame',
            start: 'top-=17% center',
            end: 'bottom+=68% center',
            scrub: true
          }
        });

        gsap.fromTo('.third-span', {
          y: -30
        }, {
          y: 30,
          scrollTrigger: {
            scroller: '#root',
            id: 'third-line',
            trigger: '.text-animation-frame',
            start: 'top+=16% center',
            end: 'bottom+=101% center',
            scrub: true
          }
        });
      },
      "(max-width: 768px)": function () {
        gsap.fromTo('.about-title', {
          y: -250 + '%',
          textShadow: '0 2.5rem 1rem rgba(0,0,0,0.3)'
        }, {
          y: 50 + '%',
          textShadow: '0 1.5rem 1rem rgba(0,0,0,0.3)',
          scrollTrigger: {
            scroller: '#root',
            id: 'about-title',
            trigger: '.about-section',
            start: 'top+=100 bottom',
            end: 'top+=1000 bottom',
            scrub: true
          }
        });

        gsap.fromTo('.first-span', {
          y: -10
        }, {
          y: 10,
          scrollTrigger: {
            scroller: '#root',
            id: 'first-line',
            trigger: '.text-animation-frame',
            start: 'top-=50% center',
            end: 'bottom+=35% center',
            scrub: true
          }
        });

        gsap.fromTo('.second-span', {
          y: -10
        }, {
          y: 10,
          scrollTrigger: {
            scroller: '#root',
            id: 'second-line',
            trigger: '.text-animation-frame',
            start: 'top-=17% center',
            end: 'bottom+=68% center',
            scrub: true
          }
        });

        gsap.fromTo('.third-span', {
          y: -10
        }, {
          y: 10,
          scrollTrigger: {
            scroller: '#root',
            id: 'third-line',
            trigger: '.text-animation-frame',
            start: 'top+=16% center',
            end: 'bottom+=101% center',
            scrub: true
          }
        });
      }
    })
  }

  useEffect(() => {
    aboutGsap();
    return () => aboutGsap();
  }, [])

  useEffect(() => {
    savedChangeTarget.current = autoChangeText;
  });

  useEffect(() => {
    const interval = () => {
      savedChangeTarget.current();
    }

    let id = setInterval(interval, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id='about' className='container about-section fluid'>
      <div className='container about-frame'>
        <div className='title-frame'>
          <h1 className='title-text about-title'>About</h1>
        </div>

        <div className='row about-image-frame'>
          <div className='col-4 pl-pr-none picture-frame'>
            <div className='one about-image about-side-image'>
              <img src={aboutOne} alt='creator picture' />
            </div>
          </div>

          <div className='col-4 pl-pr-none picture-frame'>
            <div className='two about-image'>
              <img src={aboutTwo} alt='creator picture' />
            </div>
          </div>

          <div className='col-4 pl-pr-none picture-frame'>
            <div className='three about-image about-side-image'>
              <img src={aboutThree} alt='creator picture' />
            </div>
          </div>
        </div>

        <div className='text-animation-frame'>
          <div className={`first-line ${nextText ? 'second' : 'first'}`}>{nextText ? <div>Idea<span className='first-span'>Idea</span> </div> : <div>AGILE<span className='first-span'>AGILE</span></div>}</div>

          <div className={`second-line ${nextText ? 'second' : 'first'}`}>{nextText ? <div>Premeditated<span className='second-span'>Premeditated</span></div> : <div>Until it works<span className='second-span'>Until it works</span></div>}</div>

          <div className={`third-line ${nextText ? 'second' : 'first'}`}>{nextText ? <div>Efficient<span className='third-span'>Efficient</span></div> : <div>Honest<span className='third-span'>Honest</span></div>}</div>
        </div>

        <div className='about-detail-button'>
          <Link to='/about' onMouseEnter={aboutDetailHover} onMouseLeave={onLeave} onClick={onscreenCover}>
            <button>
              <span className='shadow-inset'></span>
              <span className='shadow-inset-deep'></span>
              <span className='shadow-inset-deep2'></span>
              More Detail
              <span className='shadow'></span>
              <span className='shadow-deep'></span>
              <span className='shadow-deep2'></span>
            </button>
          </Link>
        </div>
      </div>
    </section >
  )
}

export default AboutComponent;
