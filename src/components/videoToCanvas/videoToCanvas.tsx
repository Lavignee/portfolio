import React from 'react';

import './videoToCanvas.scss';

// Props로 받는 값에 대한 interface 정의.
interface VideoToCanvasProps {
  src: string | URL;
  resolX: number;
  resolY: number;
  canvasReady: boolean;
}

// requestVideoFrameCallback 미지원 브라우저(구 Firefox 등) 폴백 판정을 위한 타입.
type VideoWithRVFC = HTMLVideoElement & {
  requestVideoFrameCallback?: (cb: () => void) => number;
  cancelVideoFrameCallback?: (id: number) => void;
};

const VideoToCanvas = ({ src, resolX, resolY, canvasReady }: VideoToCanvasProps) => {
  // video 및 source tag를 생성하여 전달받은 영상을 연계.
  const makeVirtualVideoElement = (src: string | URL) => {
    const video = document.createElement('video');
    const source = document.createElement('source');
    source.setAttribute('src', String(src));
    video.appendChild(source);
    return video;
  };

  // video 태그 ref. SSR/prerender 시 document가 없으므로 클라이언트에서만 생성.
  const virtualVideo = React.useRef<HTMLVideoElement | null>(
    typeof document === 'undefined' ? null : makeVirtualVideoElement(src)
  );

  const canvasRef1 = React.useRef<HTMLCanvasElement | null>(null);
  const canvasRef2 = React.useRef<HTMLCanvasElement | null>(null);
  const canvasRef3 = React.useRef<HTMLCanvasElement | null>(null);
  const canvasRef4 = React.useRef<HTMLCanvasElement | null>(null);
  const canvasRef5 = React.useRef<HTMLCanvasElement | null>(null);
  const canvasRef6 = React.useRef<HTMLCanvasElement | null>(null);

  // 단일 프레임 루프 id(rVFC 우선, 폴백 rAF).
  const frameId = React.useRef<number | null>(null);
  const usingRVFC = React.useRef(false);
  const runningRef = React.useRef(false);

  // 보임/탭 가시성으로 그리기 게이팅.
  // 숨김 탭으로 로드된 경우 첫 포커스 전까지 디코더가 도는 것을 막기 위해 현재 가시성으로 초기화.
  const [pageVisible, setPageVisible] = React.useState(
    () => typeof document === 'undefined' || !document.hidden
  );

  // 영상의 해상도에 따라 각각 크기와 위치를 다시 적용.
  const videoSet = React.useMemo(
    () => [
      { maskX: -(resolX / 2), maskY: 0, sizeX: resolX * 3, sizeY: resolY * 3 },
      { maskX: 0, maskY: -(resolY / 3), sizeX: resolX * 3, sizeY: resolY * 3 },
      { maskX: -(resolX * 1.7), maskY: -(resolY * 0.4), sizeX: resolX * 3.2, sizeY: resolY * 3.2 },
      { maskX: -(resolX * 1.2), maskY: -(resolY / 0.8), sizeX: resolX * 3, sizeY: resolY * 3 },
      { maskX: -(resolX / 4), maskY: -(resolY / 1.5), sizeX: resolX * 2, sizeY: resolY * 2 },
      { maskX: -(resolX * 0.5), maskY: -resolY, sizeX: resolX * 2, sizeY: resolY * 2 },
    ],
    [resolX, resolY]
  );

  // 한 프레임에 6개 캔버스를 한 번에 그린다.(과거엔 캔버스마다 setTimeout 6개 루프가 독립 구동)
  const drawAll = React.useCallback(() => {
    const video = virtualVideo.current;
    if (!video) return;
    const canvases = [
      canvasRef1.current,
      canvasRef2.current,
      canvasRef3.current,
      canvasRef4.current,
      canvasRef5.current,
      canvasRef6.current,
    ];
    for (let i = 0; i < canvases.length; i++) {
      const ctx = canvases[i]?.getContext('2d');
      if (!ctx) continue;
      const s = videoSet[i];
      ctx.drawImage(video, 0, 0, resolX, resolY, s.maskX, s.maskY, s.sizeX, s.sizeY);
    }
  }, [resolX, resolY, videoSet]);

  // 비디오 새 프레임마다(미지원 시 rAF) 단일 루프로 갱신. rVFC/rAF는 탭 숨김 시 자동 정지된다.
  const startLoop = React.useCallback(() => {
    if (runningRef.current) return;
    runningRef.current = true;
    const video = virtualVideo.current as VideoWithRVFC | null;
    usingRVFC.current = !!video?.requestVideoFrameCallback;
    const tick = () => {
      if (!runningRef.current) return;
      drawAll();
      if (usingRVFC.current && video?.requestVideoFrameCallback) {
        frameId.current = video.requestVideoFrameCallback(tick);
      } else {
        frameId.current = requestAnimationFrame(tick);
      }
    };
    tick();
  }, [drawAll]);

  const stopLoop = React.useCallback(() => {
    runningRef.current = false;
    if (frameId.current == null) return;
    const video = virtualVideo.current as VideoWithRVFC | null;
    if (usingRVFC.current && video?.cancelVideoFrameCallback) {
      video.cancelVideoFrameCallback(frameId.current);
    } else {
      cancelAnimationFrame(frameId.current);
    }
    frameId.current = null;
  }, []);

  // 탭 숨김 시 그리기/디코더까지 정지.
  React.useEffect(() => {
    const onVis = () => setPageVisible(!document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  // canvasReady(스크롤로 main 섹션 활성, off-screen 시 false) && 탭 보임일 때만 비디오 재생 + 그리기.
  React.useEffect(() => {
    const video = virtualVideo.current;
    if (!video) return;
    video.muted = true;
    video.loop = true;

    const active = canvasReady && pageVisible;
    if (active) {
      void video.play().catch(() => {});
      startLoop();
    } else {
      stopLoop();
      video.pause();
    }

    return () => stopLoop();
  }, [canvasReady, pageVisible, startLoop, stopLoop]);

  const canvasInfo = [
    { id: 'canvas-1', position: 'right', targetRef: canvasRef1 },
    { id: 'canvas-2', position: 'right', targetRef: canvasRef2 },
    { id: 'canvas-3', position: 'left', targetRef: canvasRef3 },
    { id: 'canvas-4', position: 'left', targetRef: canvasRef4 },
    { id: 'canvas-5', position: 'right', targetRef: canvasRef5 },
    { id: 'canvas-6', position: 'left', targetRef: canvasRef6 },
  ];

  // canvas 템플릿.
  const canvasContent = (
    content: {
      id: string;
      position: string;
      targetRef: React.RefObject<HTMLCanvasElement | null>;
    }[]
  ) => {
    return content.map((item, idx) => (
      <div
        key={item.id}
        className={`canvas-frame targets target${idx + 1} ${item.position}${canvasReady ? ' will-change' : ''}`}
      >
        <canvas width={resolX} height={resolY} className='canvas-target' ref={item.targetRef}></canvas>
      </div>
    ));
  };

  return <div className='video-area'>{canvasContent(canvasInfo)}</div>;
};

export default VideoToCanvas;
