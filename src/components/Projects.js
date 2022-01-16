import React, { useState } from 'react';
import { CodeIcon } from '@heroicons/react/solid';
import { HiStar } from 'react-icons/hi';
import { MdOutlineFavorite } from 'react-icons/md';
import { FaTools } from 'react-icons/fa';
import { projects } from '../data';
import { Box } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';
import CubeModel from './CubeModel';

const Projects = ({ onButtonClick }) => {
  return (
    <Box
      id='projects'
      className=' text-gray-400  body-font bg-white overflow-hidden'
    >
      <motion.div
        animate={{ x: [400, 100, 700, 300], y: [0, 1500, 1800, 3000] }}
        transition={{ duration: 20, yoyo: Infinity }}
        className='w-12 h-12 bg-yellow-300 opacity-50 absolute z-0 hidden lg:block'
      ></motion.div>
      {/* <motion.div className='w-12 h-12 bg-purple-300 opacity-50 absolute'></motion.div>
      <motion.div className='w-12 h-12 bg-blue-300 opacity-50 absolute'></motion.div> */}
      <div className='  container px-5 py-10 mx-auto text-center lg:px-11'>
        <div className=' projects-header flex flex-col w-full mb-20'>
          <CodeIcon className='mx-auto inline-block w-10 mb-4' />
          <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 dark:text-white text-lightBlack'>
            Projects I've Built
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-xl font-sans dark:text-green-400 text-purple-700'>
            // These are my favorite projects I've worked on so far. Have a look
            around and make sure to hit me up!
          </p>
        </div>
        <div className='flex flex-wrap'>
          {projects.map((project) => (
            <motion.Box
              onClick={() => onButtonClick(true, project.id)}
              key={project.id}
              className='project-post w-11/12 md:w-1/2 h-72 lg:h-96 lg:w-1/2 max-w-xl m-auto p-4 cursor-pointer'
            >
              <div className='flex gap-1 absolute'>
                {project.id == 0 ? (
                  <div className='new-badge'>
                    <HiStar className=' mr-1' />
                    <span>NEWEST</span>
                  </div>
                ) : null}

                {project.id == 2 ? (
                  <div className='best-badge bg-yellow-300 pl-1'>
                    <MdOutlineFavorite className='w-15 mr-1 text-red-600' />
                    <span>favorite</span>
                  </div>
                ) : null}
                {project.id == 1 ? (
                  <div className='advanced-badge bg-yellow-300 pl-1'>
                    <FaTools className='mr-2 text-blue-600' />
                    <span>Advanced</span>
                  </div>
                ) : null}
              </div>
              <div className='flex relative h-full w-full overflow-hidden rounded-lg'>
                <div className='project-info-card flex flex-col justify-center w-full h-full dark:bg-gray-800 bg-white z-10 opacity-0 p-10'>
                  <h4 className=' text-xl mb-4'>{project.title}</h4>
                  <p className=' text-lg overflow-hidden'>
                    {project.subtitle.join(' ')}
                  </p>
                </div>
                <div className='project-slide-1 w-full h-full  z-20 absolute'></div>
                <div className='project-slide-2 w-full h-full z-20 absolute '></div>

                <img
                  alt='gallery'
                  className='absolute inset-0 w-full h-full object-cover border-2 border-gray-900 shadow-lg  object-center rounded-lg hover:opacity-60 transform scale-100  duration-200 '
                  src={project.image}
                />
              </div>
            </motion.Box>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default Projects;
