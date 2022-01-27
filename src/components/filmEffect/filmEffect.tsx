import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { RootState } from '../../Modules';
import './filmEffect.scss';

const FilmEffect = () => {
  // redux useSelector 정의.
  const [currentFilmState] = useSelector((state: RootState) => [state.CommonValue.currentFilmState], shallowEqual);

  return (
    <>
      {currentFilmState && <div className='film-frame'></div>}
      <div className='noise-frame'></div>
    </>
  )
}

export default FilmEffect;