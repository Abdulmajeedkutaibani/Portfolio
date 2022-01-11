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
import Robotplay from './Robotplay';
import { gsap } from 'gsap';
import { Html, useProgress } from '@react-three/drei';
import { motion } from 'framer-motion/dist/framer-motion';

export const DroneComponent = () => {
  const tl = gsap.timeline();
  const { progress } = useProgress();

  function Loader() {
    return (
      <Html center className=' text-red-600'>
        {progress} % loaded
      </Html>
    );
  }
  useEffect(() => {
    // tl.to('.drone', { scale: 1, duration: 2 }).to('.drone', {});
    // tl.from('.canvas-wrapper', { x: 500, y: 200, duration: 1 })
    //   .to('.canvas-wrapper', { x: 400, y: 150, duration: 0.5 })
    //   .to('.canvas-wrapper', { x: 300, y: 50, duration: 0.5 })
    //   .to('.drone', {
    //     y: 40,
    //     duration: 1.2,
    //     repeat: -1,
    //     ease: 'power1.inOut',
    //     yoyo: true,
    //   });
  }, []);
  return (
    <motion.div
      initial={{ x: 600, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 1.5,
        delay: 1,
      }}
      className='canvas-wrapper z-10 cursor-pointer w-screen h-3/5 lg:w-full lg:h-full lg:absolute left-1/4'
    >
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0.5, 2.5], fov: 70 }}>
        <OrbitControls enableZoom={false} />
        <spotLight position={[0, 0, 0]} angle={1} intensity={1} />
        {/* <AnimationAction /> */}
        {/* <spotLight position={[50, 50, 50]} angle={180} intensity={0.5} /> */}
        {/* <ambientLight intensity={1}  /> */}
        <directionalLight intensity={1} />

        <Suspense fallback={<Loader />}>
          {/* <CuteRobot /> */}
          <Robotplay position={[0, -0.5, 0]} />
          <Environment preset='warehouse' />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};
