import React from 'react';
import { ChipIcon } from '@heroicons/react/solid';
import { FaReact, FaGitSquare } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiRedux,
  SiFramer,
} from 'react-icons/si';
import { motion } from 'framer-motion/dist/framer-motion';
import Brackets from './images/brackets.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id='skills'
      className='dark:bg-gray-800 bg-gradient-to-b from-white  via-green-100 to-white bg-opacity-10  lg:px-12 w-full lg:pb-24 min-h-screen relative overflow-hidden lg:mb-0 pb-36'
    >
      <div className=' lg:px-5 px-3  lg:py-10 py-5 mx-auto '>
        <motion.div
          animate={{ y: [-10, 10] }}
          transition={{ yoyo: Infinity, duration: 3 }}
          className=' w-14 h-14 bg-gradient-to-tl from-indigo-300 to-pink-600 mt-20 bottom-20  absolute p-1.5 rounded-full'
        >
          <div className='w-full h-full  rounded-full'></div>
        </motion.div>
        <div className='text-center skills-header lg:-mt-10 mb-4'>
          <ChipIcon className='w-10 inline-block mb-4' />
          <h1 className='sm:text-4xl text-2xl font-medium title-font text-lightBlack mb-4 dark:text-white font-Tourney'>
            Skills &amp; Services
          </h1>
          <p className='lg:text-xl text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto font-sans dark:text-green-400 text-purple-700'>
            // I love my coding journey with all of it's ups and downs, and I
            will definetly keep learning and increase my knowledge and
            experiance.
          </p>
        </div>
      </div>
      {/* //////////////////////////////////////// */}

      <div className='flex flex-wrap   lg:justify-evenly justify-around items-center w-11/12 mx-auto lg:w-full'>
        <div
          data-aos='fade-up-left'
          data-aos-delay='150'
          data-aos-duration='1000'
          data-aos-once='true'
          className=' flex flex-col justify-center items-center w-96  md:w-5/12 max-w-sm  lg:w-1/3 mb-6 rounded-xl bg-black bg-opacity-80  dark:bg-gray-800 dark:bg-opacity-50  m-2 skill-post text-center z-20'
        >
          <div className=' flex justify-center items-center rounded-lg bg-opacity-50 mt-4'>
            <img
              src={Brackets}
              className=' w-20 h-20  bg-gradient-to-r from-red-500 to-purple-500 rounded-lg'
            />
          </div>
          <h4 className='dark:text-purple-500 text-green-300  mt-6 text-xl font-Tourney font-bold'>
            Web Development
          </h4>
          <p className='text-2xl w-11/12 p-3 dark:text-gray-200 text-white font-Dongle font-normal leading-6'>
            Having a solid foundation of web development basics and the ability
            to build an elegant responsive website from scratch and write easy
            to understant code.
          </p>
          <div className='w-full min-h-5 h-5 bg-gradient-to-r from-red-500 to-purple-500 mt-auto rounded-b-lg'></div>
        </div>
        <div
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-once='true'
          data-aos-delay='400'
          className=' flex flex-col  justify-center items-center w-96  md:w-5/12 max-w-sm  lg:w-1/3 mb-6 rounded-xl bg-black bg-opacity-80  dark:bg-gray-800 dark:bg-opacity-50  m-2 skill-post text-center z-20'
        >
          <SiJavascript className=' w-20 h-20 text-yellow-400 mt-6 rounded-lg' />
          <h4 className='text-yellow-400  mt-6 text-xl font-Tourney font-bold'>
            Javascript
          </h4>
          <p className='text-2xl leading-6 p-3 dark:text-gray-200 text-white font-Dongle font-normal '>
            A good grip of ES6 by building projects and reinforcing the
            fundamentals of javascript and using RESTful APIs and other
            technologies.
          </p>
          <div className='w-full min-h-5 h-5 bg-gradient-to-r from-yellow-300 to-yellow-500 mt-auto rounded-b-lg'></div>
        </div>

        <div
          data-aos='fade-up-right'
          data-aos-delay='150'
          data-aos-once='true'
          data-aos-duration='1000'
          className=' flex flex-col  justify-center items-center w-96 md:w-5/12 max-w-sm  lg:w-1/3 mb-6 rounded-xl bg-black bg-opacity-80  dark:bg-gray-800 dark:bg-opacity-50 skill-post  m-2  text-center '
        >
          <FaReact className=' w-20 h-20  text-blue-500 mt-4   ' />

          <h4 className='text-blue-400  mt-2 text-xl font-Tourney font-bold'>
            React
          </h4>
          <p className='text-2xl p-3 dark:text-gray-200 text-white font-Dongle font-normal leading-6 '>
            All my favorite projects are built with React and I love it, I have
            a strong understanding of react concepts like hooks, JSX, seperation
            of concerns, and component oriented thinking through practical
            experience.
          </p>

          <div className='w-full min-h-5 h-5 bg-gradient-to-r to-blue-300 from-blue-500 mt-auto rounded-b-lg'></div>
        </div>
        <div
          data-aos='fade-in'
          data-aos-delay='150'
          data-aos-once='true'
          data-aos-duration='1000'
          className=' flex flex-col  justify-center items-center w-96 md:w-5/12 max-w-sm  lg:w-1/3 mb-6 rounded-xl bg-black bg-opacity-80  dark:bg-gray-800 dark:bg-opacity-50 skill-post  m-2  text-center '
        >
          <div className='flex relative'>
            <SiRedux className='text-purple-500 w-16 h-16   mt-4   ' />
            <SiTailwindcss className=' text-green-400 -ml-2 w-16 h-16   mt-4   ' />
            <SiFramer className='  w-14 h-14  text-pink-500 -ml-3 mt-5 ' />
            <SiFirebase className='  w-16 h-16  text-yellow-500 -ml-4 mt-4   ' />
            <FaGitSquare className='  w-16 h-16  text-red-500  mt-4  -ml-2 ' />
          </div>

          <h4 className='text-green-400  mt-6 text-xl font-Tourney font-bold'>
            Technologies
          </h4>
          <p className='text-2xl leading-6 p-3 dark:text-gray-200 text-white font-Dongle font-normal'>
            I like to learn new skills and improve myself as a developer and
            keep up with the newest and most efficient technologies that would
            serve to better my workflow and data management.
          </p>

          <div className='w-full h-5 min-h-5 bg-gradient-to-r from-green-300 to-green-500 mt-auto rounded-b-lg'></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
