import { useState, useCallback } from 'react';

export function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [danceMode, setDanceMode] = useState('bounce');

  const toggleAnimation = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const changeDanceMode = useCallback((mode) => {
    setDanceMode(mode);
  }, []);

  return { isPlaying, danceMode, toggleAnimation, changeDanceMode };
}
