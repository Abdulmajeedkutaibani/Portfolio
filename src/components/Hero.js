import React, { Suspense, useEffect } from 'react';
import Parallax from 'react-rellax';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';
import { Canvas } from '@react-three/fiber';
import { Environment, Loader, OrbitControls } from '@react-three/drei';
import Cyberpunk from './Cyberpunk';
import Drone from './Drone';
import { Html, useProgress } from '@react-three/drei';
import { gsap } from 'gsap';

const About = () => {
  const { progress } = useProgress();
  function Loader() {
    return (
      <Html center className=' text-red-600'>
        {progress} % loaded
      </Html>
    );
  }

  useEffect(() => {
    gsap.to('.canvas-wrapper', {
      y: 40,
      duration: 1.5,
      repeat: -1,
      // ease: 'power3',
      yoyo: true,
    });
    gsap.to('.canvas-wrapper', {
      y: -40,
      duration: 1.5,
      repeat: -1,
      // ease: 'power3',
      yoyo: true,
    });
  }, []);
  return (
    <section id='about' className='h-screen w-screen bg-gray-800 relative '>
      <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-6xl text-5xl mb-5 font-medium text-white'>
            Welcome, I'm Abdulmajeed.K
          </h1>
          <div className='primary-sub mb-8'>
            <div className='primary-sub__word'>
              <div className='primary-sub__top'>I'm</div>
              <div className='primary-sub__bottom'>I'm</div>
            </div>
            <div className='primary-sub__word'>
              <div className='primary-sub__top'>a</div>
              <div className='primary-sub__bottom'>a</div>
            </div>
            <div className='primary-sub__word'>
              <div className='primary-sub__top'>front-end</div>
              <div className='primary-sub__bottom'>front-end</div>
            </div>
            <div className='primary-sub__word'>
              <div className='primary-sub__top'>web</div>
              <div className='primary-sub__bottom'>web</div>
            </div>
            <div className='primary-sub__word'>
              <div className='primary-sub__top'>developer</div>
              <div className='primary-sub__bottom'>developer</div>
            </div>
            <div className='primary-sub__word'>
              <div className='primary-sub__top'>currently</div>
              <div className='primary-sub__bottom'>currently</div>
            </div>
            <div className='primary-sub__word'>
              <div className='primary-sub__top'>based</div>
              <div className='primary-sub__bottom'>based</div>
            </div>
            <div className='primary-sub__word'>
              <div className='primary-sub__top'>in</div>
              <div className='primary-sub__bottom'>in</div>
            </div>
            <div className='primary-sub__word'>
              <div className='primary-sub__top'>Istanbul,</div>
              <div className='primary-sub__bottom'>Istanbul,</div>
            </div>
            <div className='primary-sub__word'>
              <div className='primary-sub__top'>Turkey</div>
              <div className='primary-sub__bottom'>Turkey</div>
            </div>
          </div>
          <div className='flex justify-center mt-4'>
            <motion.a
              href='#contact'
              className='inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-xl'
            >
              Work With Me
            </motion.a>

            <motion.a
              href='#projects'
              animate={{ rotate: 360 }}
              className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-xl'
            >
              See My Past Work
            </motion.a>
          </div>
        </div>
        <div className='canvas-wrapper absolute top-0 right-0'>
          <Canvas className='drone ' camera={{ position: [-10, 3, 10] }}>
            <OrbitControls enableZoom={false} />
            <spotLight position={[10, 15, 10]} angle={0.3} intensity={1} />
            <ambientLight intensity={1} color={'purple'} />
            <Suspense fallback={<Loader />}>
              <Drone />
              <Environment preset='warehouse' />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default About;