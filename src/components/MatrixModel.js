import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion/dist/framer-motion';
import React, { Suspense } from 'react';
import Matrix from './Matrix';

const MatrixModel = ({ lightColor }) => {
  return (
    <div
      // animate={{
      //   x: [100, 200],
      //   // y: ['0vh', '100vh', '400vh', '500vh'],
      // }}
      // transition={{ duration: 1 }}
      className=' z-0 cursor-pointer w-full h-full'
    >
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0.5, 1.5], fov: 50 }}>
        <OrbitControls enableZoom={true} />
        <spotLight position={[0, 0, 0]} angle={1} intensity={1} />

        <spotLight position={[0, 0, 0]} angle={90} intensity={20} />
        <ambientLight intensity={100} color={lightColor} />
        <directionalLight intensity={10} />
        <Suspense fallback={null}>
          <Matrix position={[0, -0.9, -1.5]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default MatrixModel;
