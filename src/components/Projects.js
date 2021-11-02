import React, { useState } from 'react';
import { CodeIcon } from '@heroicons/react/solid';
import { HiStar } from 'react-icons/hi';
import { MdOutlineFavorite } from 'react-icons/md';
import { projects } from '../data';
import { Button } from '@mui/material';

const Projects = ({ onButtonClick }) => {
  return (
    <section id='projects' className='text-gray-400 bg-gray-900 body-font'>
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
          <div className='new-badge'>
            <HiStar className='w-15 mr-1' />
            <span>NEW</span>
          </div>
          <div className='best-badge bg-yellow-300 pl-1'>
            <MdOutlineFavorite className='w-15 mr-1 text-red-600' />
            <span>favorite</span>
          </div>
          {projects.map((project) => (
            <Button
              onClick={() => onButtonClick(true)}
              key={project.image}
              className='sm:w-1/2 m-auto w-100 p-4'
            >
              <div className='flex relative project '>
                <img
                  alt='gallery'
                  className='absolute inset-0 w-full h-full object-cover border-2 border-blue-300 object-center rounded-lg'
                  src={project.image}
                />
                <div className='px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 rounded-lg'>
                  <h2 className='tracking-widest text-xl title-font font-medium text-blue-400 mb-1 '>
                    {project.subtitle}
                  </h2>
                  <h1 className='title-font text-2xl font-medium text-white mb-3'>
                    {project.title}
                  </h1>
                  <p className='leading-relaxed text-base overflow-x-auto max-h-20'>
                    {project.description}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
