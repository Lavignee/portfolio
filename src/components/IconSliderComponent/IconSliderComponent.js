import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import html5 from '../../static/images/001_HTML5.svg';
import css from '../../static/images/002_css.svg';
import javasc from '../../static/images/003_javasc.svg';
import react from '../../static/images/004_react.svg';
import webpack from '../../static/images/005_webpack.svg';
import parcel from '../../static/images/006_parcel.svg';
import sass from '../../static/images/007_sass.svg';
import greens from '../../static/images/008_greens.svg';
import github from '../../static/images/014_github.svg';
import './IconSliderComponent.scss';

const IconsliderComponent = ({ reverse }) => {
  const colors = ["#000000", "#111111", "#222222", "#333333", "#444444", "#555555", "#666666", "#777777", "#888888", "#999999", "#aaaaaa"];
  const icons = [html5, css, javasc, react, webpack, parcel, sass, greens, github]

  useEffect(() => {
    gsap.set(".content-frame", {
      // backgroundColor: (i) => colors[i % colors.length],
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
        <div key={icons} className='content-frame'><div className='content'><img src={icons} alt="skill-icon" /></div></div>
      ))
      }
    </div>
  )
}

export default IconsliderComponent;