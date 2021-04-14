import React, { useEffect, useState, useRef } from 'react';
import './VideoToCanvasComponent.scss';

const VideoToCanvasComponent = ({ src, resolX, resolY, canvasReady }) => {
  const virtualVideo = useRef();
  const canvasRef1 = useRef();
  const canvasRef2 = useRef();
  const canvasRef3 = useRef();
  const canvasRef4 = useRef();
  const canvasRef5 = useRef();
  const canvasRef6 = useRef();
  const canvasDrawTrigger = useRef();
  // const test2Ref = useRef(false);
  const [canvasPlay, setCanvasPlay] = useState(false)

  const videoSet = [
    {
      maskX: -(resolX / 2), maskY: 0, sizeX: resolX * 3, sizeY: resolY * 3
    },
    {
      maskX: 0, maskY: -(resolY / 3), sizeX: resolX * 3, sizeY: resolY * 3
    },
    {
      maskX: -(resolX * 1.7), maskY: -(resolY * 0.4), sizeX: resolX * 3.2, sizeY: resolY * 3.2
    },
    {
      maskX: -(resolX * 1.2), maskY: -(resolY / 0.8), sizeX: resolX * 3, sizeY: resolY * 3
    },
    {
      maskX: -(resolX / 4), maskY: -(resolY / 1.5), sizeX: resolX * 2, sizeY: resolY * 2
    },
    {
      maskX: -(resolX * 0.5), maskY: -(resolY), sizeX: resolX * 2, sizeY: resolY * 2
    }
  ]

  const makeVirtualVideoElement = (src) => {
    const video = document.createElement('video')
    const source = document.createElement('source')
    source.setAttribute('src', src)
    video.appendChild(source)
    return video
  }

  const draw = (video, context, numbers) => {
    context.drawImage(video, 0, 0, resolX, resolY, videoSet[numbers].maskX, videoSet[numbers].maskY, videoSet[numbers].sizeX, videoSet[numbers].sizeY)
    if (canvasDrawTrigger.current === true) {
      const drawTimer = setTimeout(() => {
        draw(video, context, numbers)
      }, 1000 / 25, video, context);
      return () => clearTimeout(drawTimer);
    }
  }

  useEffect(() => {
    if (canvasReady) {
      setCanvasPlay(true)
    }

    return () => setCanvasPlay(false)
  }, [canvasReady])

  useEffect(() => {
    const testCanvas = (video, canvasRefs, numbers) => {
      const context = canvasRefs.getContext('2d')
      video.muted = true
      video.loop = true

      video.onplaying = () => {
        // test2Ref.current = true;
      };

      // video.onpause = () => {
      //   test2Ref.current = false;
      // };

      const playVid = () => {
        // if (video.paused && !test2Ref.current) {
        video.addEventListener('play', () => draw(video, context, numbers), false)
        video.play();
        // test2Ref.current = true;
        // }
      }

      // const pauseVid = () => {
      // test2Ref.current = false;
      // console.log('pauseVid 2.video.paused = ' + video.paused)
      // console.log('pauseVid 2.test2Ref.current = ' + test2Ref.current)
      // if (!video.paused && test2Ref.current) {
      //   console.log("pause!!")
      //   video.removeEventListener('play', () => draw(video, context, numbers), false)
      //   video.pause();
      //   test2Ref.current = false;
      // }
      // }

      if (canvasPlay) {
        playVid()
      } else {
        // pauseVid()
      }
    }

    virtualVideo.current = makeVirtualVideoElement(src)
    testCanvas(virtualVideo.current, canvasRef1.current, 0)
    testCanvas(virtualVideo.current, canvasRef2.current, 1)
    testCanvas(virtualVideo.current, canvasRef3.current, 2)
    testCanvas(virtualVideo.current, canvasRef4.current, 3)
    testCanvas(virtualVideo.current, canvasRef5.current, 4)
    testCanvas(virtualVideo.current, canvasRef6.current, 5)
    canvasDrawTrigger.current = canvasPlay
  }, [canvasPlay])

  return (
    <div className='video-area'>
      <div className={`canvas-frame targets target1 right${canvasReady ? ' will-change' : ''}`}>
        <canvas width={resolX} height={resolY} className='canvas-target' ref={canvasRef1} ></canvas>
      </div>
      <div className={`canvas-frame targets target2 right${canvasReady ? ' will-change' : ''}`}>
        <canvas width={resolX} height={resolY} className='canvas-target' ref={canvasRef2} ></canvas>
      </div>
      <div className={`canvas-frame targets target3 left${canvasReady ? ' will-change' : ''}`}>
        <canvas width={resolX} height={resolY} className='canvas-target' ref={canvasRef3} ></canvas>
      </div>
      <div className={`canvas-frame targets target4 left${canvasReady ? ' will-change' : ''}`}>
        <canvas width={resolX} height={resolY} className='canvas-target' ref={canvasRef4} ></canvas>
      </div>
      <div className={`canvas-frame targets target5 right${canvasReady ? ' will-change' : ''}`}>
        <canvas width={resolX} height={resolY} className='canvas-target' ref={canvasRef5} ></canvas>
      </div>
      <div className={`canvas-frame targets target6 left${canvasReady ? ' will-change' : ''}`}>
        <canvas width={resolX} height={resolY} className='canvas-target' ref={canvasRef6} ></canvas>
      </div>
    </div>
  )
}

export default VideoToCanvasComponent;