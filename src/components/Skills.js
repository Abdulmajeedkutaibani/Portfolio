import React from 'react';
import { BadgeCheckIcon, ChipIcon } from '@heroicons/react/solid';
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
} from 'react-icons/fa';
import { FcMindMap } from 'react-icons/fc';
import {
  SiMaterialui,
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiScaleway,
  SiStyledcomponents,
  SiRedux,
  SiTypescript,
  SiNextdotjs,
} from 'react-icons/si';
import { motion } from 'framer-motion/dist/framer-motion';
import Brackets from './images/brackets.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Skills = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id='skills'
      className='dark:bg-gray-800 bg-green-100 bg-opacity-10  lg:px-12 w-full lg:pb-24 min-h-screen'
    >
      <div className=' px-5 py-10 mx-auto relative'>
        <motion.div
          animate={{ y: [-10, 10] }}
          transition={{ yoyo: Infinity, duration: 3 }}
          className=' w-14 h-14 bg-gradient-to-tl from-indigo-300 to-pink-600 mt-20 right-0 absolute p-1.5 rounded-full'
        >
          <div className='w-full h-full bg-transparent rounded-full'></div>
        </motion.div>
        <div className='text-center skills-header -mt-10'>
          <ChipIcon className='w-10 inline-block mb-4' />
          <h1 className='sm:text-4xl text-3xl font-medium title-font text-lightBlack mb-4 dark:text-white font-Tourney'>
            Skills &amp; Technologies
          </h1>
          <p className='text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto font-sans dark:text-green-400 text-purple-700'>
            // I love my coding journey with all of it's ups and downs, and I
            will definetly keep learning and making this list longer.
          </p>
        </div>
      </div>
      {/* //////////////////////////////////////// */}

      <div className='flex flex-wrap   lg:justify-evenly justify-around items-center w-3/4 mx-auto lg:w-full'>
        <div
          data-aos='fade-up-right'
          data-aos-delay='150'
          data-aos-once='true'
          className=' flex flex-col justify-center items-center md:w-5/12 max-w-sm  lg:w-1/3 mb-6 rounded-xl bg-green-400 dark:bg-gray-800 dark:bg-opacity-50 overflow-hidden m-2 h-72 text-center'
        >
          <div className='dark:bg-purple-100 w-20 h-20 flex justify-center items-center rounded-full bg-opacity-50 mt-4 '>
            <FaReact className=' w-16 h-16 text-blue-500 ' />
          </div>
          <h4 className='text-green-400  mt-6 text-xl'>web development</h4>
          <p className='text-sm p-5 text-gray-200'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            hic error quam magni asperiores atque tempore adipisci odio veniam
            libero.
          </p>

          <div className='w-full h-5 bg-gradient-to-r to-blue-300 from-blue-500 mt-auto'></div>
        </div>
        <div
          data-aos='fade-up'
          data-aos-once='true'
          data-aos-delay='400'
          className=' flex flex-col justify-center items-center  md:w-5/12 max-w-sm  lg:w-1/3 mb-6 rounded-xl bg-green-400 dark:bg-gray-800 dark:bg-opacity-50 overflow-hidden m-2 h-72 text-center'
        >
          <SiJavascript className=' w-20 h-20 text-yellow-400 mt-6 rounded-lg' />
          <h4 className='text-green-400  mt-6 text-xl'>web development</h4>
          <p className='text-sm p-5 text-gray-200'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            hic error quam magni asperiores atque tempore adipisci odio veniam
            libero.
          </p>
          <div className='w-full h-5 bg-gradient-to-r from-yellow-300 to-yellow-500 mt-auto'></div>
        </div>

        <div
          data-aos='fade-up-left'
          data-aos-delay='150'
          data-aos-once='true'
          className=' flex flex-col justify-center items-center  md:w-5/12 max-w-sm  lg:w-1/3 mb-6 rounded-xl bg-green-400 dark:bg-gray-800 dark:bg-opacity-50 overflow-hidden m-2 h-72 text-center'
        >
          <div className=' w-20 h-24 flex justify-center items-center rounded-lg bg-opacity-50 mt-4'>
            <img
              src={Brackets}
              className=' w-full h-full  bg-gradient-to-r from-red-500 to-purple-500 rounded-lg'
            />
          </div>
          <h4 className='text-green-400  mt-6 text-xl'>web development</h4>
          <p className='text-sm p-5 text-gray-200'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            hic error quam magni asperiores atque tempore adipisci odio veniam
            libero.
          </p>
          <div className='w-full h-5 bg-gradient-to-r from-red-500 to-purple-500 mt-auto'></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
