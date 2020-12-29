import React, { useEffect, useRef } from 'react';
import './VideoToCanvasComponent.scss';

const VideoToCanvasComponent = (src) => {
  const canvasRef = useRef();
  let content = '';

  useEffect(() => {
    makeVirtualVideoElement(src);
    return () => makeVirtualVideoElement(src);
  }, [])

  useEffect(() => {
    startPlayingInCanvas(content, canvasRef);
    return () => startPlayingInCanvas(content, canvasRef);
  }, [])

  const makeVirtualVideoElement = (src) => {
    const video = document.createElement('video')
    const source = document.createElement('source')
    source.setAttribute('src', src)
    video.appendChild(source)
    content = video
    console.log('content1=' + content)
  }

  const startPlayingInCanvas = (content, canvasRef) => {
    console.log('content2=' + content)
    console.log('canvasRef=' + canvasRef)
    const context = canvasRef.current.getContext('2d')
    console.log('context=' + context)
    const playListener = () => {
      draw(content, context, canvasRef.width, canvasRef.height);
    }
    content.addEventListener('play', playListener, false)
    content.muted = true
    content.loop = true
    content.play()
  }

  const draw = (content, context, canvasWidth, canvasHeight) => {
    // console.log('content3=' + content)
    // console.log('context=' + context)
    context.drawImage(content, 0, 0, canvasWidth, canvasHeight)
    if (!content.paused && !content.ended)
      setTimeout(draw, 1000 / 30, content, context, canvasWidth, canvasHeight)
  }

  return (
    <div className='canvas-frame'>
      <canvas className='canvas-target' ref={canvasRef} >test</canvas>
    </div>
  );
}

export default VideoToCanvasComponent;