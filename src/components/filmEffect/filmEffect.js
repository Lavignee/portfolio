import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import './filmEffect.scss';

const FilmEffect = () => {
  const [currentFilmState] = useSelector(state => [state.CommonValue.currentFilmState], shallowEqual);

  return (
    <>
      {currentFilmState && <div className='film-frame'></div>}
      <div className='noise-frame'></div>
    </>
  )
}

export default FilmEffect;