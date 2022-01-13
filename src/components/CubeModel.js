import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion/dist/framer-motion';
import React, { Suspense } from 'react';
import Cube from './Cube';

const CubeModel = () => {
  return (
    <motion.div
      animate={{
        x: [700, -100, 1000, -150, 300],
        y: ['0vh', '100vh', '400vh', '500vh'],
      }}
      transition={{ duration: 30, delay: 2, yoyo: Infinity }}
      className='z-0 cursor-pointer w-32 h-32 absolute  -top-56 border-full'
    >
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0.5, 2.5], fov: 20 }}>
        <OrbitControls enableZoom={false} />
        <spotLight position={[0, 0, 0]} angle={1} intensity={1} />

        {/* <spotLight position={[50, 50, 50]} angle={180} intensity={0.5} /> */}
        <ambientLight intensity={20} color='blue' />
        {/* <directionalLight intensity={100} /> */}
        <Suspense fallback={null}>
          <Cube position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </motion.div>
  );
};

export default CubeModel;
