import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import { Loader, OrbitControls } from '@react-three/drei';
import Kick from './GLTF/Kick';
import Lights from './Lights';

export default function Game() {
  return (
    <>
      <Canvas>
        <color attach="background" args={['gray']} />
        <OrbitControls />

        <Suspense fallback={null}>
          <Kick />
        </Suspense>

        <Lights />
      </Canvas>
      <Loader />
    </>
  );
}
