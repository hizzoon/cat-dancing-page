import Layout from './components/Layout';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';
import './styles/global.css';

export default function App() {
  const { isPlaying, danceMode, toggleAnimation, changeDanceMode } = useAnimation();

  return (
    <Layout>
      <DancingCat isPlaying={isPlaying} danceMode={danceMode} />
      <AnimationControls
        isPlaying={isPlaying}
        danceMode={danceMode}
        onToggle={toggleAnimation}
        onChangeMode={changeDanceMode}
      />
    </Layout>
  );
}
