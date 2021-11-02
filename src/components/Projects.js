import React, { useState } from 'react';
import { CodeIcon } from '@heroicons/react/solid';
import { HiStar } from 'react-icons/hi';
import { MdOutlineFavorite } from 'react-icons/md';
import { projects } from '../data';
import { Button, Box } from '@mui/material';

const Projects = ({ onButtonClick }) => {
  return (
    <Box
      sx={{ background: '#171a1d' }}
      id='projects'
      className='text-gray-400  body-font'
    >
      <div className='container px-5 py-10 mx-auto text-center lg:px-40'>
        <div className='flex flex-col w-full mb-20'>
          <CodeIcon className='mx-auto inline-block w-10 mb-4' />
          <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>
            Projects I've Built
          </h1>
          <p className='lg:w-2/3 mx-auto leading-relaxed text-xl font-sans'>
            // These are my favorite projects I've worked on so far. Have a look
            around and make sure to hit me up!
          </p>
        </div>
        <div className='flex flex-wrap -m-6'>
          {projects.map((project) => (
            <Box
              onClick={() => onButtonClick(true, project.id)}
              key={project.image}
              className='sm:w-1/2 h-72 lg:h-96 w-96 m-auto p-4 cursor-pointer'
            >
              <div className='flex gap-1 absolute'>
                {project.id == 0 ? (
                  <div className='new-badge'>
                    <HiStar className='w-15 mr-1' />
                    <span>NEW</span>
                  </div>
                ) : null}
                {project.id == 0 ? (
                  <div className='best-badge bg-yellow-300 pl-1'>
                    <MdOutlineFavorite className='w-15 mr-1 text-red-600' />
                    <span>favorite</span>
                  </div>
                ) : null}
              </div>
              <div className='flex relative h-full w-full overflow-hidden'>
                <img
                  alt='gallery'
                  className='absolute inset-0 w-full h-full object-cover border-2 border-gray-900 shadow-lg  object-center rounded-lg hover:opacity-60 transform scale-100 hover:scale-110 duration-200'
                  src={project.image}
                />
              </div>
            </Box>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default Projects;
