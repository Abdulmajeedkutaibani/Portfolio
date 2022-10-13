import React from 'react';
import { HiStar } from 'react-icons/hi';
import { MdOutlineFavorite } from 'react-icons/md';
import { FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion/dist/framer-motion';

const Project = ({ project, onButtonClick }) => {
  return (
    <motion.div
      data-aos={
        project.id === 4
          ? 'fade-right'
          : project.id === 1
          ? 'fade-left'
          : project.id === 3
          ? 'fade-left'
          : project.id === 5
          ? 'fade-left'
          : project.id === 7
          ? 'fade-left'
          : 'fade-right'
      }
      data-aos-easing='ease-in-out'
      data-aos-delay='100'
      data-aos-once='true'
      data-aos-duration='900'
      onClick={() => onButtonClick(true, project.id)}
      className={`${project.className} project-post  w-11/12 md:w-1/2 h-72 lg:h-72 lg:w-1/3 max-w-2xl m-auto p-4 cursor-pointer z-40 filter drop-shadow-2xl`}
    >
      <div className='flex gap-1 absolute'>
        {project.id === 0 ? (
          <div className='new-badge'>
            <HiStar className=' mr-1' />
            <span>NEWEST</span>
          </div>
        ) : null}

        {project.id === 1 ? (
          <div className='best-badge bg-yellow-300 pl-1'>
            <MdOutlineFavorite className='w-15 mr-1 text-red-600' />
            <span>favorite</span>
          </div>
        ) : null}
        {project.id === 3 ? (
          <div className='advanced-badge bg-yellow-300 pl-1'>
            <FaTools className='mr-2 text-blue-600' />
            <span>Advanced</span>
          </div>
        ) : null}
      </div>
      <div className='project-card flex relative h-full w-full overflow-hidden rounded-lg'>
        <div className='project-info-card flex flex-col justify-center w-full h-full dark:bg-gray-800 bg-white z-10 opacity-0 p-10'>
          <h4 className=' text-xl mb-4 dark:text-white text-green-500'>
            {project.title}
            <div className='project-title_underline mx-auto bg-gradient-to-r from-green-500 via-green-600 to-green-500 h-1 rounded-full w-0 transition-all duration-300 delay-500'></div>
          </h4>
          <p className=' text-base overflow-hidden text-lightBlack dark:text-green-400 xl:px-10'>
            {project.subtitle.join(' / ')}
          </p>
        </div>
        <div className='project-slide-1 w-full  h-full  z-20 absolute'></div>
        <div className='project-slide-2 w-full h-full z-20 absolute '></div>

        <img
          alt='gallery'
          className='absolute inset-0 w-full h-full object-cover shadow-lg  object-center rounded-lg hover:opacity-60 transform scale-100  duration-200 '
          src={project.image}
        />
      </div>
    </motion.div>
  );
};

export default Project;
