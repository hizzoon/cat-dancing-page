import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

export default function DancingCat({ isPlaying, danceMode }) {
  const animationClass = isPlaying ? `dance-${danceMode}` : 'dance-idle';

  return (
    <div className="dancing-cat-wrapper">
      <div className={`cat-container ${animationClass}`}>
        <img
          src={catSvg}
          alt="춤추는 고양이"
          className="cat-image"
          draggable={false}
        />
      </div>
      <div className={`shadow ${isPlaying ? 'shadow-active' : ''}`} />
      {isPlaying && (
        <div className="music-notes">
          <span className="note note-1">♪</span>
          <span className="note note-2">♫</span>
          <span className="note note-3">♩</span>
          <span className="note note-4">♬</span>
        </div>
      )}
    </div>
  );
}
