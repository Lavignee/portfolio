import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import useWindowSize from "../../utils/useWindowSize";
import svg from '../../static/images/icon-svg.json';
import './IconSliderComponent.scss';

const IconsliderComponent = ({ reverse }) => {
  const { width, height } = useWindowSize();

  // const colors = ["#000000", "#111111", "#222222", "#333333", "#444444", "#555555", "#666666", "#777777", "#888888", "#999999", "#aaaaaa"];
  const allIcons = [svg.bitbucket, svg.bootstrap, svg.css, svg.figma, svg.gatsby, svg.git, svg.github, svg.graphql, svg.gsap, svg.html5, svg.i18next, svg.javascript, svg.jira, svg.jquery, svg.materialui, svg.mobx, svg.netlify, svg.nextjs, svg.parcel, svg.react, svg.redux, svg.sass, svg.sourcetree, svg.typescript, svg.webgl, svg.webpack, svg.zeplin]
  const wellIcons = [svg.bitbucket, svg.bootstrap, svg.css, svg.figma, svg.git, svg.github, svg.gsap, svg.html5, svg.i18next, svg.javascript]
  const wellIcons2 = [svg.jira, svg.jquery, svg.materialui, svg.parcel, svg.react, svg.redux, svg.sass, svg.sourcetree, svg.webpack, svg.zeplin]
  const bedIcons = [svg.gatsby, svg.graphql, svg.mobx, svg.netlify, svg.nextjs, svg.typescript, svg.webgl]

  useEffect(() => {
    console.log(width)
    console.log(height)
  }, [width, height])

  useEffect(() => {
    // console.log(bedIcons.slice(0, 5))
    gsap.set(".content-frame", {
      // backgroundColor: (i) => colors[i % colors.length],
      x: (i) => i * 100 + '%'
    });

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
      {wellIcons.map(wellIcons => (
        <div key={wellIcons} className='content-frame'>
          <div className='content' dangerouslySetInnerHTML={{ __html: wellIcons }}></div>
        </div>
      ))
      }
      {/* {width > 500 && (
        console.log(500)
      )} */}
    </div>

  )
}

export default IconsliderComponent;