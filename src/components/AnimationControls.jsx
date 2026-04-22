import '../styles/controls.css';

const DANCE_MODES = [
  { id: 'bounce', label: '🐾 바운스' },
  { id: 'spin',   label: '💫 스핀' },
  { id: 'wiggle', label: '🎵 위글' },
  { id: 'jump',   label: '⬆️ 점프' },
];

export default function AnimationControls({ isPlaying, danceMode, onToggle, onChangeMode }) {
  return (
    <div className="controls">
      <button
        className={`btn-toggle ${isPlaying ? 'playing' : 'paused'}`}
        onClick={onToggle}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        {isPlaying ? '⏸ 정지' : '▶ 시작'}
      </button>

      <div className="dance-modes" role="group" aria-label="댄스 모드 선택">
        {DANCE_MODES.map(({ id, label }) => (
          <button
            key={id}
            className={`btn-mode ${danceMode === id ? 'active' : ''}`}
            onClick={() => onChangeMode(id)}
            aria-pressed={danceMode === id}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
