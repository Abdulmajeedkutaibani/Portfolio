import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useEffect } from 'react';
import { Model3D } from './Model3D.js';

const About = () => {
  return (
    <section
      id='about'
      className='h-screen w-screen relative dark:bg-gray-900 bg-white overflow-hidden'
    >
      <div className='container mx-auto h-screen flex  px-10  lg:flex-row flex-col-reverse items-center justify-end lg:justify-start'>
        <div className=' w-full lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start lg:text-left  md:mb-0 items-center text-center z-20'>
          <h1 className='title-font sm:text-6xl text-5xl mb-5 font-medium dark:text-white text-gray-900'>
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
