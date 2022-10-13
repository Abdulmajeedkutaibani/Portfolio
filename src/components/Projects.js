import React, { useState } from 'react';
import { CodeIcon } from '@heroicons/react/solid';

import { projects, projectsNav } from '../data';
import { motion } from 'framer-motion/dist/framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Project from './Project';
import { ProjectsNav } from './ProjectsNav';
// ..
AOS.init();
const allCategories = [
  'All',
  ...new Set(projectsNav.map((category) => category.name)),
];

const Projects = ({ onButtonClick }) => {
  const [projectsList, setProjectsList] = useState(projects);
  const [buttons] = useState(allCategories);

  const filter = (button) => {
    if (button === 'All') {
      setProjectsList(projects);
      return;
    }
    const filteredData = projects.filter(
      (project) => project.category === button
    );
    setProjectsList(filteredData);
  };

  return (
    <section
      id='projects'
      className=' text-gray-400  body-font bg-gradient-to-b from-white  via-green-100 to-white bg-opacity-10 overflow-hidden pb-24 relative '
    >
      <div className='   py-10 mx-auto text-center lg:px-11 relative'>
        {/* <motion.div
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
        </motion.div> */}

        {/* /////////////////////////////////////// */}
        <div className=' projects-header flex flex-col w-full lg:mb-20 mb-6  p-2 items-center'>
          <CodeIcon className='mx-auto inline-block w-10 mb-4' />
          <h1 className='sm:text-4xl text-2xl font-medium title-font mb-4 dark:text-white text-lightBlack font-Tourney z-40'>
            Projects I've Built
          </h1>

          {/* projects navigation */}

          <ProjectsNav button={buttons} filter={filter} />
          <p className='lg:w-2/3 mx-auto leading-relaxed md:text-xl text-base font-sans dark:text-green-400 text-purple-700 z-30 px-2'>
            // These are my favorite projects I've worked on so far. Have a look
            around and make sure to hit me up!
          </p>
        </div>
        <div className='flex flex-wrap lg:px-10 '>
          {projectsList.map((project, i) => (
            <Project key={i} project={project} onButtonClick={onButtonClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
