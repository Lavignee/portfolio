import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';
import './CustomScrollAreaComponent.scss';

gsap.registerPlugin(ScrollTrigger);

const CustomScrollAreaComponent = ({ children }) => {
  const scrollArea = useRef();

  useEffect(() => {
    // 스무스마우스 스크롤값 GSAP 트리거에 전달
    let smoothScrollbar = Scrollbar.init(scrollArea.current, {
      damping: 0.03,
      delegateTo: document,
    });

    ScrollTrigger.scrollerProxy(scrollArea.current, {
      scrollTop(value) {
        if (arguments.length) {
          smoothScrollbar.scrollTop = value;
        }
        return smoothScrollbar.scrollTop;
      }
    });

    smoothScrollbar.addListener(ScrollTrigger.update);

    ScrollTrigger.defaults({ scroller: '.scroll-area' });

    // 메인 컨텐츠 애니메이션
    const canvasFrames = gsap.utils.toArray('.canvas-frame');
    const targetToLefts = gsap.utils.toArray('.left');
    const targetToRights = gsap.utils.toArray('.right');
    const scrollTriggers = {
      trigger: '.main-text-frame',
      start: 'top',
      end: 'bottom',
      scrub: true,
      // markers: true
    }
    canvasFrames.forEach(target => {
      gsap.to(target, {
        scaleX: 0.8,
        y: -300,
        // TODO: 상하좌우 애니메이션 소수점 제거, 성능테스트 후 적용
        modifiers: {
          y: function (y) {
            y = parseInt(y);
            var newY = y.toFixed(0);
            return newY + 'px';
          }
        },
        scrollTrigger: scrollTriggers
      })
    });
    targetToLefts.forEach(target => {
      gsap.to(target, {
        x: -50,
        // TODO: 상하좌우 애니메이션 소수점 제거, 성능테스트 후 적용
        modifiers: {
          x: function (x) {
            x = parseInt(x);
            var newX = x.toFixed(0);
            return newX + 'px';
          }
        },
        scrollTrigger: scrollTriggers
      });
    });
    targetToRights.forEach(target => {
      gsap.to(target, {
        x: 50,
        // TODO: 상하좌우 애니메이션 소수점 제거, 성능테스트 후 적용
        modifiers: {
          x: function (x) {
            x = parseInt(x);
            var newX = x.toFixed(0);
            return newX + 'px';
          }
        },
        scrollTrigger: scrollTriggers
      });
    });

    // 어바웃 컨텐츠 애니메이션
    gsap.to('.about-background', {
      x: 0 + '%',
      autoAlpha: 1,
      scrollTrigger: {
        id: 'about-background',
        trigger: '.intro-ment',
        start: 'top+=100 center',
        end: 'bottom+=100 center',
        scrub: true,
        markers: true,
      }
    })
    gsap.fromTo('.title-image', {
      maxWidth: 200 + '%',
      autoAlpha: 0,
    }, {
      maxWidth: 100 + '%',
      autoAlpha: 1,
      scrollTrigger: {
        id: 'title-image',
        trigger: '.intro-ment',
        start: 'bottom+=100 center',
        end: 'bottom+=50' + '%',
        scrub: true,
        // markers: true,
      }
    });
    gsap.to('.title-text', {
      right: 0,
      autoAlpha: 1,
      scrollTrigger: {
        id: 'title-text',
        trigger: '.intro-ment',
        start: 'bottom+=100 center',
        end: 'bottom+=50' + '%',
        scrub: true,
        // markers: true,
      }
    })
  }, []);

  return (
    <div className='scroll-area' ref={scrollArea}>
      {children}
    </div>
  )
}

export default CustomScrollAreaComponent;