import React from 'react';

import './videoToCanvas.scss';

// Props로 받는 값에 대한 interface 정의.
interface VideoToCanvasProps {
  src: string | URL;
  resolX: number;
  resolY: number;
  canvasReady: boolean;
}

const VideoToCanvas = ({ src, resolX, resolY, canvasReady }: VideoToCanvasProps) => {
  // video 및 source tag를 생성하여 전달받은 영상을 연계.
  const makeVirtualVideoElement = (src: string | URL) => {
    const video = document.createElement('video');
    const source = document.createElement('source');
    source.setAttribute('src', String(src));
    video.appendChild(source);
    return video;
  };

  // setTimeout에서 최신화 값을 참조하기 위한 ref.
  const canvasPlay = React.useRef<boolean>(canvasReady);

  // video 및 source tag를 생성하여 저장할 ref.
  const virtualVideo = React.useRef<HTMLVideoElement>(makeVirtualVideoElement(src));

  // 생성된 video 태그의 영상을 canvas에 프레임별로 최신화 할 ref.
  const canvasRef1 = React.useRef<HTMLCanvasElement | null>(null);
  const canvasRef2 = React.useRef<HTMLCanvasElement | null>(null);
  const canvasRef3 = React.useRef<HTMLCanvasElement | null>(null);
  const canvasRef4 = React.useRef<HTMLCanvasElement | null>(null);
  const canvasRef5 = React.useRef<HTMLCanvasElement | null>(null);
  const canvasRef6 = React.useRef<HTMLCanvasElement | null>(null);

  const timeOutRef1 = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const timeOutRef2 = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const timeOutRef3 = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const timeOutRef4 = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const timeOutRef5 = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const timeOutRef6 = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // play/pause 리스너를 등록/해제 시 동일 참조로 제거하기 위해 핸들러 저장.
  const handlerRefs = React.useRef<Array<(() => void) | null>>([]);

  // 타입 정의.
  type TimeOutRef = React.MutableRefObject<ReturnType<typeof setTimeout> | null>;

  // 영상의 해상도에 따라 각각 크기와 위치를 다시 적용.
  const videoSet = React.useMemo(
    () => [
      {
        maskX: -(resolX / 2),
        maskY: 0,
        sizeX: resolX * 3,
        sizeY: resolY * 3,
      },
      {
        maskX: 0,
        maskY: -(resolY / 3),
        sizeX: resolX * 3,
        sizeY: resolY * 3,
      },
      {
        maskX: -(resolX * 1.7),
        maskY: -(resolY * 0.4),
        sizeX: resolX * 3.2,
        sizeY: resolY * 3.2,
      },
      {
        maskX: -(resolX * 1.2),
        maskY: -(resolY / 0.8),
        sizeX: resolX * 3,
        sizeY: resolY * 3,
      },
      {
        maskX: -(resolX / 4),
        maskY: -(resolY / 1.5),
        sizeX: resolX * 2,
        sizeY: resolY * 2,
      },
      {
        maskX: -(resolX * 0.5),
        maskY: -resolY,
        sizeX: resolX * 2,
        sizeY: resolY * 2,
      },
    ],
    [resolX, resolY]
  );

  // drawCanvas 에서 전달 받은 조건에 따라 프레임에 맞도록 이미지 갱신 또는 종료.
  // timeOutRef는 ref 객체를 받아 .current에 타이머 id를 저장해야 clearTimeout이 정상 동작한다.
  const draw = React.useCallback(
    (
      video: HTMLVideoElement,
      context: CanvasRenderingContext2D,
      timeOutRef: TimeOutRef,
      numbers: number
    ) => {
      if (canvasPlay.current) {
        timeOutRef.current = setTimeout(() => {
          context.drawImage(
            video,
            0,
            0,
            resolX,
            resolY,
            videoSet[numbers].maskX,
            videoSet[numbers].maskY,
            videoSet[numbers].sizeX,
            videoSet[numbers].sizeY
          );
          draw(video, context, timeOutRef, numbers);
        }, 1000 / 30);
      } else if (timeOutRef.current) {
        clearTimeout(timeOutRef.current);
        timeOutRef.current = null;
      }
    },
    [resolX, resolY, videoSet]
  );

  // video의 동작 여부에 따라 canvas에 draw 조건 변경해서 호출.
  const drawCanvas = React.useCallback(
    (
      canvasRefs: HTMLCanvasElement | null,
      timeOutRef: TimeOutRef,
      numbers: number,
      set: boolean
    ) => {
      const context = canvasRefs?.getContext('2d');
      if (!context) return;

      if (set) {
        virtualVideo.current.muted = true;
        virtualVideo.current.loop = true;

        // 등록/해제에 동일한 핸들러 참조를 사용한다.
        const handler = () => draw(virtualVideo.current, context, timeOutRef, numbers);
        handlerRefs.current[numbers] = handler;
        virtualVideo.current.addEventListener('play', handler);
        virtualVideo.current.addEventListener('pause', handler);
      } else {
        const handler = handlerRefs.current[numbers];
        if (handler) {
          virtualVideo.current.removeEventListener('play', handler);
          virtualVideo.current.removeEventListener('pause', handler);
          handlerRefs.current[numbers] = null;
        }
        if (timeOutRef.current) {
          clearTimeout(timeOutRef.current);
          timeOutRef.current = null;
        }
      }
    },
    [draw]
  );

  // 화면 진입 시 이벤트 리스너 등록.
  React.useEffect(() => {
    if (canvasReady) {
      drawCanvas(canvasRef1.current, timeOutRef1, 0, true);
      drawCanvas(canvasRef2.current, timeOutRef2, 1, true);
      drawCanvas(canvasRef3.current, timeOutRef3, 2, true);
      drawCanvas(canvasRef4.current, timeOutRef4, 3, true);
      drawCanvas(canvasRef5.current, timeOutRef5, 4, true);
      drawCanvas(canvasRef6.current, timeOutRef6, 5, true);
    }

    // 화면 벗어날 시 이벤트 리스너 삭제.
    return () => {
      drawCanvas(canvasRef1.current, timeOutRef1, 0, false);
      drawCanvas(canvasRef2.current, timeOutRef2, 1, false);
      drawCanvas(canvasRef3.current, timeOutRef3, 2, false);
      drawCanvas(canvasRef4.current, timeOutRef4, 3, false);
      drawCanvas(canvasRef5.current, timeOutRef5, 4, false);
      drawCanvas(canvasRef6.current, timeOutRef6, 5, false);
    };
    // 마운트 시 1회 등록, 언마운트 시 해제 (원래 의도 유지).
    // biome-ignore lint/correctness/useExhaustiveDependencies: 마운트 시 1회만 실행해야 한다.
  }, []);

  // canvasReady의 상태에 따라 video 일시정지 및 clearTimeout.
  React.useEffect(() => {
    if (canvasReady) {
      canvasPlay.current = true;
      virtualVideo.current?.play();
    } else {
      canvasPlay.current = false;
      virtualVideo.current?.pause();
      drawCanvas(canvasRef1.current, timeOutRef1, 0, false);
    }
    // biome-ignore lint/correctness/useExhaustiveDependencies: canvasReady 변화에만 반응해야 한다.
  }, [canvasReady]);

  const canvasInfo = [
    {
      id: 'canvas-1',
      position: 'right',
      targetRef: canvasRef1,
    },
    {
      id: 'canvas-2',
      position: 'right',
      targetRef: canvasRef2,
    },
    {
      id: 'canvas-3',
      position: 'left',
      targetRef: canvasRef3,
    },
    {
      id: 'canvas-4',
      position: 'left',
      targetRef: canvasRef4,
    },
    {
      id: 'canvas-5',
      position: 'right',
      targetRef: canvasRef5,
    },
    {
      id: 'canvas-6',
      position: 'left',
      targetRef: canvasRef6,
    },
  ];

  // canvas 템플릿.
  const canvasContent = (
    content: {
      id: string;
      position: string;
      targetRef: React.RefObject<HTMLCanvasElement | null>;
    }[]
  ) => {
    const canvas = content.map((item, idx) => {
      return (
        <div
          key={item.id}
          className={`canvas-frame targets target${idx + 1} ${item.position}${canvasReady ? ' will-change' : ''}`}
        >
          <canvas
            width={resolX}
            height={resolY}
            className='canvas-target'
            ref={item.targetRef}
          ></canvas>
        </div>
      );
    });
    return canvas;
  };

  return <div className='video-area'>{canvasContent(canvasInfo)}</div>;
};

export default VideoToCanvas;
