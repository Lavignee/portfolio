// per2/src/pages/404.tsx
import React from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const NotFoundPage: NextPage = () => {
  const router = useRouter();

  // 1) 처음에는 빈 문자열로 렌더
  const [path, setPath] = React.useState<string>('');

  // 2) 클라이언트에서만 실제 asPath로 업데이트
  React.useEffect(() => {
    if (!router.isReady) return;
    setPath(router.asPath);
  }, [router.isReady, router.asPath]);

  return (
    <div className='not-found-section'>
      <div className='guide-ment'>
        <h1>이 페이지는 존재하지 않습니다.</h1>
        <br />
        <br />
        <h2>들어오신 경로: {path}</h2>
        <br />
        <br />
        <h3>
          <br />
          <br />
          여기엔 이런 설명이 있었어요.
          <br />
          <br />
          &apos;분명히 링크를 따라 들어왔고, 링크도 맞는 것 같은데,
          <br />
          왜 이 페이지를 보고 있는지는 잘 모르겠네요.&apos;
          <br />
          <br />
          여길 꾸밀 시간이 아직은 없네요..
          <br />
          일단 뒤로갈까요?
        </h3>
        <br />
        <br />
        <button onClick={() => router.back()}>go back</button>
      </div>
    </div>
  );
};

export default NotFoundPage;
