import {Canvas} from '@react-three/fiber';
import {Suspense} from 'react';
import {GlasContainer} from './GlassContainer';
import {OrbitControls, Preload} from '@react-three/drei';
import {useControls} from 'leva';
import {CanvasLoader} from '../Canvas/CanvasLoader';

export const GlassContainerCanvas = (): JSX.Element => {
  const {target, maxPolarAngle, minPolarAngle} = useControls('Orbit Control', {
    target: [0, 1, 0],
    maxPolarAngle: Math.PI / 2,
    minPolarAngle: Math.PI / 2,
  });

  return (
    <Canvas
      frameloop="demand"
      camera={{
        fov: 64,
        position: [1, 5, 1],
      }}
      //shadows={true}
      //gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          target={target}
          enableZoom={false}
          maxPolarAngle={maxPolarAngle}
          minPolarAngle={minPolarAngle}
        />
        {/* <ScrollControls
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          pages={3}
          damping={0.25}
        > */}
        <GlasContainer />
        {/* <Overlay /> */}
        {/* </ScrollControls> */}
        <Preload all />
      </Suspense>
    </Canvas>
  );
};
