import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Loader, OrbitControls } from '@react-three/drei';
import Drone from './Drone';
import { gsap } from 'gsap';
import { Html, useProgress } from '@react-three/drei';

export const DroneComponent = () => {
  const { progress } = useProgress();
  function Loader() {
    return (
      <Html center className=' text-red-600'>
        {progress} % loaded
      </Html>
    );
  }

  //   useEffect(() => {
  //     gsap.to('.canvas-wrapper', {
  //       y: -40,
  //       duration: 1,
  //       repeat: -1,
  //       // ease: 'power3',
  //       yoyo: true,
  //     });
  //   }, []);
  return (
    <div className='canvas-wrapper absolute top-0  z-10'>
      <Canvas className='drone ml-auto' camera={{ position: [-10, 3, 10] }}>
        <OrbitControls enableZoom={false} />
        <spotLight position={[10, 15, 10]} angle={0.3} intensity={1} />
        <ambientLight intensity={1} color={'purple'} />
        <Suspense fallback={<Loader />}>
          <Drone />
          <Environment preset='warehouse' />
        </Suspense>
      </Canvas>
    </div>
  );
};
