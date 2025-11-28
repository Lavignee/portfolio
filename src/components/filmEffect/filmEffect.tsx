import React from 'react';
// import './filmEffect.scss'; // 나중에 globals.scss로 이동

import { useCommonValueStore } from '@/stores/commonValue';

const FilmEffect: React.FC = () => {
  const currentFilmState = useCommonValueStore((s) => s.currentFilmState);

  return (
    <>
      {currentFilmState && <div className='film-frame' />}
      <div className='noise-frame' />
    </>
  );
};

export default FilmEffect;
