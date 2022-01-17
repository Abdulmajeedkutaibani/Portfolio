import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion/dist/framer-motion';
import React, { Suspense, useEffect } from 'react';
import { Spring } from 'react-spring';
import { Model3D } from './Model3D.js';
import Parallax from 'react-rellax';

const About = () => {
  return (
    <section
      id='about'
      className='h-screen w-screen relative dark:bg-lightBlack bg-white overflow-hidden'
    >
      <motion.div
        animate={{ y: [-10, 10], rotate: 1080, x: [-20, 20] }}
        transition={{ yoyo: Infinity, duration: 8 }}
        className='circle-orange w-20 h-20 bg-gradient-to-tl from-green-300 to-purple-600 rounded-full absolute right-16 top-6 p-2'
      >
        <div className='w-full h-full bg-white dark:bg-lightBlack transform transition-all delay-50 rounded-full'></div>
      </motion.div>
      <motion.div
        animate={{ y: [-5, 5] }}
        transition={{ yoyo: Infinity, duration: 1.5 }}
        className='circle-orange w-12 h-12 bg-gradient-to-tl from-blue-500 to-pink-600  absolute left-16 top-56 p-1'
      >
        <div className='w-full h-full bg-white dark:bg-lightBlack '></div>
      </motion.div>

      <motion.div
        animate={{ rotate: 1080 }}
        transition={{ yoyo: Infinity, duration: 30, delay: 5 }}
        className=' w-14 h-14 bg-gradient-to-tl from-yellow-200 to-red-700 absolute  right-56 bottom-2 p-1.5 rounded-2xl'
      >
        <div className='w-full h-full bg-transparent rounded-full'></div>
      </motion.div>

      <motion.div
        animate={{ y: [-5, 5] }}
        transition={{ yoyo: Infinity, duration: 1.5 }}
        className='w-56 absolute left-20 bottom-4 overflow-hidden'
      >
        <div class=' h-24 w-24 bg-gradient-to-t from-green-500 to-blue-500 -rotate-45 transform origin-bottom-left'></div>
      </motion.div>

      <div className='container mx-auto h-screen flex  px-10  lg:flex-row flex-col-reverse items-center justify-end lg:justify-start'>
        <div className='dark:bg-gray-800 bg-green-600 dark:bg-opacity-50 bg-opacity-30 rounded-2xl p-6 bg-bl w-full lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start lg:text-left  md:mb-0 items-center text-center z-20'>
          <h1 className='title-font sm:text-6xl text-5xl mb-5 font-medium dark:text-white text-lightBlack'>
            Welcome, I'm Abdulmajeed.K
          </h1>
          <div className='primary-sub mb-8'>
            <div className='primary-sub__word'>
              <div className='primary-sub__top dark:text-green-400 text-purple-700 '>
                I'm
              </div>
              <div className='primary-sub__bottom'>I'm</div>
            </div>
            <div className='primary-sub__word'>
              <div className='primary-sub__top dark:text-green-400 text-purple-700'>
                a
              </div>
              <div className='primary-sub__bottom'>a</div>
            </div>
            <div className='primary-sub__word'>
              <div className='primary-sub__top dark:text-green-400 text-purple-700'>
                front-end
              </div>
              <div className='primary-sub__bottom'>front-end</div>
            </div>
            <div className='primary-sub__word'>
              <div className='primary-sub__top dark:text-green-400 text-purple-700'>
                web
              </div>
              <div className='primary-sub__bottom'>web</div>
            </div>
            <div className='primary-sub__word'>
              <div className='primary-sub__top dark:text-green-400 text-purple-700'>
                developer
              </div>
              <div className='primary-sub__bottom'>developer</div>
            </div>
            <div className='primary-sub__word'>
              <div className='primary-sub__top dark:text-green-400 text-purple-700'>
                currently
              </div>
              <div className='primary-sub__bottom'>currently</div>
            </div>
            <div className='primary-sub__word'>
              <div className='primary-sub__top dark:text-green-400 text-purple-700'>
                based
              </div>
              <div className='primary-sub__bottom'>based</div>
            </div>
            <div className='primary-sub__word'>
              <div className='primary-sub__top dark:text-green-400 text-purple-700'>
                in
              </div>
              <div className='primary-sub__bottom'>in</div>
            </div>
            <div className='primary-sub__word'>
              <div className='primary-sub__top dark:text-green-400 text-purple-700'>
                Istanbul,
              </div>
              <div className='primary-sub__bottom'>Istanbul,</div>
            </div>
            <div className='primary-sub__word'>
              <div className='primary-sub__top dark:text-green-400 text-purple-700'>
                Turkey
              </div>
              <div className='primary-sub__bottom'>Turkey</div>
            </div>
          </div>
          <div className='flex justify-center mt-4'>
            <a
              href='#contact'
              className='inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-xl'
            >
              Work With Me
            </a>

            <a
              href='#projects'
              className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-xl'
            >
              See My Past Work
            </a>
          </div>
        </div>
        <Model3D />
      </div>
    </section>
  );
};

export default About;
