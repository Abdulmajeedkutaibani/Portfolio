import React, { Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Environment,
  Loader,
  OrbitControls,
  PerspectiveCamera,
  Shadow,
  softShadows,
} from '@react-three/drei';
import PolyHead3D from './Poly_head';
import { gsap } from 'gsap';
import { Html, useProgress } from '@react-three/drei';
import { motion } from 'framer-motion/dist/framer-motion';

export const PolyHead = () => {
  const tl = gsap.timeline();
  const { progress } = useProgress();

  function Loader() {
    return (
      <Html center className=' text-red-600'>
        {progress} % loaded
      </Html>
    );
  }

  return (
    <motion.div
      // initial={{ x: 600, opacity: 0 }}
      // animate={{ x: 0, opacity: 1 }}
      // transition={{
      //   duration: 1.5,
      //   delay: 1,
      // }}
      className='canvas-wrapper z-10 cursor-pointer w-screen h-3/5 lg:w-full lg:h-full  '
    >
      <Canvas camera={{ fov: 40 }}>
        {/* <OrbitControls enableZoom={false} /> */}
        {/* <spotLight position={[0, 0, 0]} angle={1} intensity={1} /> */}
        {/* <AnimationAction /> */}
        <spotLight position={[50, 50, 80]} angle={45} intensity={1.3} />
        <ambientLight intensity={0.7} />
        {/* <directionalLight intensity={1} /> */}

        <Suspense fallback={<Loader />}>
          <PolyHead3D position={[0, 0.3, 2]} />
          {/* <Environment preset='sunset' /> */}
        </Suspense>
      </Canvas>
    </motion.div>
  );
};
