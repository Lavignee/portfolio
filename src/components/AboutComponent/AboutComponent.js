import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import aboutOne from '../../Static/images/about-one.jpg';
import aboutTwo from '../../Static/images/about-two.jpg';
import aboutThree from '../../Static/images/about-three.jpg';
import './AboutComponent.scss';

gsap.registerPlugin(ScrollTrigger);

const AboutComponent = () => {
  const [nextText, setNextText] = useState(false);
  const savedChangeTarget = useRef();
  useEffect(() => {
    gsap.fromTo('.about-title', {
      y: -100 + '%'
    }, {
      y: 50 + '%',
      scrollTrigger: {
        id: 'about-title',
        trigger: '.about-section',
        start: 'top+=200 bottom',
        end: 'top+=800 bottom',
        scrub: true
      }
    });
  }, [])

  function changeText() {
    setNextText(!nextText)
  }

  useEffect(() => {
    savedChangeTarget.current = changeText;
  });

  useEffect(() => {
    function interval() {
      savedChangeTarget.current();
    }

    let id = setInterval(interval, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className='container about-section fluid'>
      <div className='container about-frame'>
        <div className='title-frame'>
          <h1 className='title-text about-title'>About</h1>
        </div>

        <div className='row'>
          <div className='col-3 pr-none picture-frame'>
            <div className='one'>
              <img src={aboutOne} alt="creator picture" />
            </div>
          </div>
          <div className='col-4 off-xs-1 pl-pr-none picture-frame'>
            <div className='two'>
              <img src={aboutTwo} alt="creator picture" />
            </div>
          </div>
          <div className='col-3 off-xs-1 pl-none picture-frame'>
            <div className='three'>
              <img src={aboutThree} alt="creator picture" />
            </div>
          </div>
        </div>

        <div className='text-animation-frame'>
          <div className={`first-line ${nextText ? 'second' : 'first'}`}>{nextText ? <div>Idea</div> : <div>AGILE</div>}</div>
          <div className={`second-line ${nextText ? 'second' : 'first'}`}>{nextText ? <div>Premeditated</div> : <div>Until it works</div>}</div>
          <div className={`third-line ${nextText ? 'second' : 'first'}`}>{nextText ? <div>Efficient</div> : <div>Honest</div>}</div>
        </div>

        <div className='about-detail-button'>
          <Link to='about'><button>About More</button></Link>
        </div>
      </div>
    </section >
  )
}

export default AboutComponent;
