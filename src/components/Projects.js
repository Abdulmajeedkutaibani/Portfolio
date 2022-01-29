import React, { useEffect, useState } from 'react';
import { CodeIcon } from '@heroicons/react/solid';
import { HiStar } from 'react-icons/hi';
import { MdOutlineFavorite } from 'react-icons/md';
import { FaTools } from 'react-icons/fa';
import { projects } from '../data';
import { Box } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';
import CubeModel from './CubeModel';
import gsap from 'gsap/';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Projects = ({ onButtonClick }) => {
  useEffect(() => {}, []);
  return (
    <section
      id='projects'
      className=' text-gray-400  body-font bg-green-100 bg-opacity-10 overflow-hidden pb-24 relative '
    >
      <div className='   py-10 mx-auto text-center lg:px-11 relative'>
        <motion.div
          animate={{ rotate: 1080, x: [0, 200, 0], y: 500 }}
          transition={{ yoyo: Infinity, duration: 25, ease: 'InOut' }}
          className=' md:w-14 md:h-14 w-6 h-6 bg-gradient-to-tl from-green-400 via-pink-500 to-yellow-400 absolute  right-32 top-10 p-1.5 rounded-2xl z-10'
        >
          <div className='w-full h-full bg-white dark:bg-purple-700 rounded-xl'></div>
        </motion.div>
        <motion.div
          animate={{ rotate: 1080, x: [200, -200], y: [80, -500] }}
          transition={{ yoyo: Infinity, duration: 25 }}
          className=' md:w-14 md:h-14 w-6 h-6 bg-gradient-to-tl from-purple-400 to-green-400 via-red-500 absolute  left-32 bottom-0 p-1.5 rounded-2xl z-10'
        >
          <div className='w-full h-full bg-white dark:bg-transparent rounded-xl'></div>
        </motion.div>

        {/* /////////////////////////////////////// */}
        <div className=' projects-header flex flex-col w-full lg:mb-20 mb-6  p-2'>
          <CodeIcon className='mx-auto inline-block w-10 mb-4' />
          <h1 className='sm:text-4xl text-2xl font-medium title-font mb-4 dark:text-white text-lightBlack font-Tourney z-40'>
            Projects I've Built
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed md:text-xl text-base font-sans dark:text-green-400 text-purple-700 z-30 px-2'>
            // These are my favorite projects I've worked on so far. Have a look
            around and make sure to hit me up!
          </p>
        </div>
        <div className='flex flex-wrap lg:px-10 '>
          {projects.map((project) => (
            <motion.Box
              data-aos={
                project.id == 4
                  ? 'fade-right'
                  : project.id == 1
                  ? 'fade-left'
                  : project.id == 3
                  ? 'fade-left'
                  : project.id == 5
                  ? 'fade-left'
                  : 'fade-right'
              }
              data-aos-easing='ease-in-out'
              data-aos-delay='100'
              data-aos-once='true'
              data-aos-duration='900'
              onClick={() => onButtonClick(true, project.id)}
              key={project.id}
              className={`${project.className} project-post  w-11/12 md:w-1/2 h-72 lg:h-72 lg:w-1/4 max-w-xl m-auto p-4 cursor-pointer z-40`}
            >
              <div className='flex gap-1 absolute'>
                {project.id == 0 ? (
                  <div className='new-badge'>
                    <HiStar className=' mr-1' />
                    <span>NEWEST</span>
                  </div>
                ) : null}

                {project.id == 3 ? (
                  <div className='best-badge bg-yellow-300 pl-1'>
                    <MdOutlineFavorite className='w-15 mr-1 text-red-600' />
                    <span>favorite</span>
                  </div>
                ) : null}
                {project.id == 2 ? (
                  <div className='advanced-badge bg-yellow-300 pl-1'>
                    <FaTools className='mr-2 text-blue-600' />
                    <span>Advanced</span>
                  </div>
                ) : null}
              </div>
              <div className='project-card flex relative h-full w-full overflow-hidden rounded-lg'>
                <div className='project-info-card flex flex-col justify-center w-full h-full dark:bg-gray-800 bg-white z-10 opacity-0 p-10'>
                  <h4 className=' text-xl mb-4 text-lightGreen'>
                    {project.title}{' '}
                    <div className='project-title_underline mx-auto bg-gradient-to-r from-red-500 via-pink-600 to-yellow-500 h-1 rounded-full w-0 transition-all delay-500'></div>
                  </h4>
                  <p className=' text-base overflow-hidden text-yellow-300'>
                    {project.subtitle.join(' / ')}
                  </p>
                </div>
                <div className='project-slide-1 w-full h-full  z-20 absolute'></div>
                <div className='project-slide-2 w-full h-full z-20 absolute '></div>

                <img
                  alt='gallery'
                  className='absolute inset-0 w-full h-full object-cover shadow-lg  object-center rounded-lg hover:opacity-60 transform scale-100  duration-200 '
                  src={project.image}
                />
              </div>
            </motion.Box>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
