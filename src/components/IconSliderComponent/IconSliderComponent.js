import React, { useEffect } from 'react';
import { gsap } from "gsap";
import './IconSliderComponent.scss';

const IconsliderComponent = ({ reverse }) => {
  const colors = ["#000000", "#111111", "#222222", "#333333", "#444444", "#555555", "#666666", "#777777", "#888888", "#999999", "#aaaaaa"];
  const icons = [11, 22, 33, 44, 55, 66, 77, 88, 99, 1010]

  useEffect(() => {
    gsap.set(".content-frame", {
      backgroundColor: (i) => colors[i % colors.length],
      x: (i) => i * 100 + '%'
    });

    // gsap.set(".content", {
    //   backgroundImage: (i) => icons[i % icons.length],
    // });

    gsap.to(".content-frame", {
      duration: 100,
      ease: "none",
      x: '+=1000' + "%",
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % 1000)
      },
      repeat: -1
    });
  }, [])

  return (
    <div className={`icon-slider${reverse ? ` ${reverse}` : ''}`}>
      {icons.map(icons => (
        <div key={icons} className='content-frame'><div className='content'>{icons}</div></div>
      ))
      }
    </div>
  )
}

export default IconsliderComponent;