import {Scroll, useGLTF, useHelper, useScroll} from '@react-three/drei';
import {useEffect, useLayoutEffect, useRef} from 'react';
import {useFrame} from '@react-three/fiber';
import {useControls} from 'leva';

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

export const GlasContainer = (): JSX.Element => {
  const {scene, nodes, materials} = useGLTF(
    'https://modelviewer.dev/shared-assets/models/Astronaut.glb',
  );
  const ref = useRef<any>();
  const tl = useRef<any>();
  const directionalLightRef = useRef<any>();
  const scroll = useScroll();

  useFrame(() => {
    tl.current?.seek(scroll.offset * tl.current.duration());
  });

  /*   useEffect(() => {
    if (ref.current) {
      ref.current.rotation.y = Math.PI; // 90 Grad
    }
  }, []); */

  useLayoutEffect(() => {
    //tl.current = gsap.timeline();
    // Rotation
    /* tl.current.to(
      ref.current.rotation,
      { duration: 1, x: 0, y: Math.PI, z: 0 },
      0,
    ); */
  }, []);

  const {primVec, primScale} = useControls('Behälter', {
    primVec: [0, -0.5, 0],
    primScale: 5,
  });

  const {showLighting, intensity, shadowColor} = useControls(
    'Belichtung Hemi',
    {
      showLighting: false,
      shadowColor: '#fff',
      intensity: 1,
    },
  );

  const {dirShowLighting, dirIntensity, dirVec} = useControls(
    'Belichtung Dire',
    {
      dirShowLighting: false,
      dirShadowColor: '#fff',
      dirIntensity: 1,
      dirVec: [-1, 1, 0],
    },
  );

  /* useHelper(directionalLightRef, DirectionalLightHelper, 0.5, 'light'); */

  return (
    <>
      {showLighting ? (
        <hemisphereLight intensity={intensity} shadow={shadowColor} />
      ) : (
        <></>
      )}

      {dirShowLighting ? (
        <directionalLight
          ref={directionalLightRef}
          position={dirVec}
          intensity={dirIntensity}
        />
      ) : (
        <></>
      )}

      <mesh
        dispose={null}
        ref={ref}
        position={[0, 0, 0]}
        rotation={[0, Math.PI, 0]}
      >
        <primitive
          object={scene}
          position={primVec}
          scale={primScale}
          rotation={[0, 0, 0]}
        />
      </mesh>
    </>
  );
};
