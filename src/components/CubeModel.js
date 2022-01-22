import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion/dist/framer-motion';
import React, { Suspense } from 'react';
import Cube from './Cube';

const CubeModel = ({ lightColor }) => {
  return (
    <div
      // animate={{
      //   x: [100, 200],
      //   // y: ['0vh', '100vh', '400vh', '500vh'],
      // }}
      // transition={{ duration: 1 }}
      className='z-20 cursor-pointer w-28 h-28'
    >
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0.5, 2.5], fov: 20 }}>
        <OrbitControls enableZoom={false} />
        <spotLight position={[0, 0, 0]} angle={1} intensity={1} />

        {/* <spotLight position={[50, 50, 50]} angle={180} intensity={0.5} /> */}
        <ambientLight intensity={30} color={lightColor} />
        <directionalLight intensity={10} color='yellow' />
        <Suspense fallback={null}>
          <Cube position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CubeModel;
