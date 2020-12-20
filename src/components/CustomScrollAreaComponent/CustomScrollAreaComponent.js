import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDispatch } from 'react-redux';
import { ScrollIntro, ScrollAbout, ScrollSkill, ScrollFootprint } from '../../Modules/ScrollValueModule';
// import Scrollbar from 'smooth-scrollbar';
import './CustomScrollAreaComponent.scss';

gsap.registerPlugin(ScrollTrigger);

const CustomScrollAreaComponent = ({ children }) => {
  const scrollArea = useRef();
  const dispatch = useDispatch();
  const onScrollIntro = () => dispatch(ScrollIntro('intro'));
  const onScrollAbout = () => dispatch(ScrollAbout('about'));
  const onScrollSkill = () => dispatch(ScrollSkill('skill'));
  const onScrollFootprint = () => dispatch(ScrollFootprint('footprint'));

  useEffect(() => {
    // 스무스마우스 스크롤값 GSAP 트리거에 전달
    // const smoothScrollbar = Scrollbar.init(scrollArea.current, {
    //   damping: 0.03,
    // });

    // ScrollTrigger.scrollerProxy(scrollArea.current, {
    //   scrollTop(value) {
    //     if (arguments.length) {
    //       smoothScrollbar.scrollTop = value;
    //     }
    //     return smoothScrollbar.scrollTop;
    //   }
    // });

    // smoothScrollbar.addListener(ScrollTrigger.update);
    // ScrollTrigger.defaults({ scroller: '.scroll-area' });

    // // 메인 컨텐츠 애니메이션
    // const canvasFrames = gsap.utils.toArray('.canvas-frame');
    // const targetToLefts = gsap.utils.toArray('.left');
    // const targetToRights = gsap.utils.toArray('.right');
    // const scrollTriggers = {
    //   scroller: '#root',
    //   trigger: '.main-text-frame',
    //   start: 'top',
    //   end: 'bottom',
    //   scrub: 1,
    // }

    // canvasFrames.forEach(target => {
    //   gsap.to(target, {
    //     scaleX: 0.8,
    //     y: -300,
    //     // TODO: 상하좌우 애니메이션 소수점 제거, 성능테스트 후 적용
    //     modifiers: {
    //       y: function (y) {
    //         y = parseInt(y);
    //         var newY = y.toFixed(0);
    //         return newY + 'px';
    //       }
    //     },
    //     scrollTrigger: scrollTriggers
    //   })
    // });

    // targetToLefts.forEach(target => {
    //   gsap.to(target, {
    //     x: -50,
    //     // TODO: 상하좌우 애니메이션 소수점 제거, 성능테스트 후 적용
    //     modifiers: {
    //       x: function (x) {
    //         x = parseInt(x);
    //         var newX = x.toFixed(0);
    //         return newX + 'px';
    //       }
    //     },
    //     scrollTrigger: scrollTriggers
    //   });
    // });

    // targetToRights.forEach(target => {
    //   gsap.to(target, {
    //     x: 50,
    //     // TODO: 상하좌우 애니메이션 소수점 제거, 성능테스트 후 적용
    //     modifiers: {
    //       x: function (x) {
    //         x = parseInt(x);
    //         var newX = x.toFixed(0);
    //         return newX + 'px';
    //       }
    //     },
    //     scrollTrigger: scrollTriggers
    //   });
    // });

    // gsap.to('.intro-ment', {
    //   y: 0 + '%',
    //   scrollTrigger: {
    //     scroller: '#root',
    //     id: 'intro-ment',
    //     trigger: '.intro-ment',
    //     start: 'top center',
    //     onEnter: () => onScrollIntro(),
    //     end: 'bottom center',
    //     scrub: true,
    //   }
    // });

    // // 어바웃 컨텐츠 애니메이션
    // gsap.fromTo('.about-title-image', {
    //   maxWidth: 200 + '%',
    //   autoAlpha: 0,
    // }, {
    //   maxWidth: 100 + '%',
    //   autoAlpha: 1,
    //   scrollTrigger: {
    //     scroller: '#root',
    //     id: 'about-title-image',
    //     trigger: '.intro-ment',
    //     start: 'bottom+=100 center',
    //     end: 'bottom+=50' + '%',
    //     scrub: 0.5,
    //   }
    // });

    // gsap.to('.about-title', {
    //   right: 0,
    //   autoAlpha: 1,
    //   scrollTrigger: {
    //     scroller: '#root',
    //     id: 'about-title',
    //     trigger: '.intro-ment',
    //     start: 'bottom+=100 center',
    //     end: 'bottom+=50' + '%',
    //     scrub: 0.5,
    //   }
    // })

    // gsap.to('.split-frame', {
    //   scrollTrigger: {
    //     scroller: '#root',
    //     id: 'split-frame',
    //     trigger: '.about-title',
    //     start: 'top center',
    //     onEnter: () => onScrollAbout(),
    //     end: 'bottom center',
    //   }
    // });

    // // 스킬 컨텐츠 애니메이션
    // gsap.to('.split-frame', {
    //   scrollTrigger: {
    //     scroller: '#root', 
    //     id: 'split-frame',
    //     trigger: '.skill-title',
    //     start: 'top center',
    //     onEnter: () => onScrollSkill(),
    //     end: 'bottom center',
    //   }
    // });

    // // 풋프린트 컨텐츠 애니메이션
    // gsap.to('.split-frame', {
    //   scrollTrigger: {
    //     scroller: '#root',
    //     id: 'split-frame',
    //     trigger: '.footprint-title',
    //     start: 'top center',
    //     onEnter: () => onScrollFootprint(),
    //     end: 'bottom center',
    //   }
    // });
  }, []);

  return (
    // <div ref={scrollArea}>
    //   <div className='scroll-area'>
    //     {children}
    //   </div>
    // </div>
    <div className='scroll-area' ref={scrollArea}>
      {children}
    </div>
  )
}

export default CustomScrollAreaComponent;