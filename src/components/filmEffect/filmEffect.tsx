import useStore from '../../store/useStore';
import './filmEffect.scss';

const FilmEffect = () => {
  // 전역 스토어 구독.
  const currentFilmState = useStore((s) => s.currentFilmState);

  return (
    <>
      {currentFilmState && <div className='film-frame'></div>}
      <div className='noise-frame'></div>
    </>
  );
};

export default FilmEffect;
