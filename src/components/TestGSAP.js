import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const sections = [
  {
    title: 'Title 1',
    subtitle: 'Subtitle 1'
  },
  {
    title: 'Title 2',
    subtitle: 'Subtitle 2'
  },
  {
    title: 'Title 3',
    subtitle: 'Subtitle 3'
  }
];

const TestGSAP = () => {
  const headerRef = useRef(null);
  const [background, setBackground] = useState('red');
  const revealRefs = useRef([]);
  revealRefs.current = [];

  const toggleBackground = () => {
    const color = background !== 'red' ? 'red' : 'blue';
    setBackground(color);
  };

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  // 투명도 샘플
  useEffect(() => {
    gsap.from(headerRef.current, {
      autoAlpha: 0,
      ease: 'none',
      delay: 1
    });
  }, []);

  // 백그라운드 컬러 토글 샘플
  useEffect(() => {
    gsap.to(headerRef.current, {
      backgroundColor: background,
      duration: 1,
      ease: 'none'
    });
  }, [background]);

  // 스크롤 트리거 샘플
  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(el, {
        autoAlpha: 0
      }, {
        duration: 1,
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          id: `section-${index + 1}`,
          trigger: el,
          start: 'top center+=480',
          toggleActions: 'play none none reverse'
        }
      });
    });
  }, []);

  return (
    <div className="App">
      <header ref={headerRef} className="App-header">
        test Header
      </header>
      <button onClick={() => toggleBackground()}>Change background</button>
      {
        sections.map(({ title, subtitle }) => (
          <div className="App-section" key={title} ref={addToRefs}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        ))
      }
    </div>
  )
}

export default TestGSAP;
