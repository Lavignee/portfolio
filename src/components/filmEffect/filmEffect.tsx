import { shallowEqual, useSelector } from 'react-redux';
import type { RootState } from '../../Modules';
import './filmEffect.scss';

const FilmEffect = () => {
  // redux useSelector 정의.
  const [currentFilmState] = useSelector(
    (state: RootState) => [state.CommonValue.currentFilmState],
    shallowEqual
  );

  return (
    <>
      {currentFilmState && <div className='film-frame'></div>}
      <div className='noise-frame'></div>
    </>
  );
};

export default FilmEffect;
