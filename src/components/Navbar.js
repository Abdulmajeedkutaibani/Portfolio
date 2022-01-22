import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import './socialwidgets.css';
import { FaGithub, FaShapes } from 'react-icons/fa';

import { BsCircleFill } from 'react-icons/bs';
import { BsSquareFill } from 'react-icons/bs';
// import { BsTriangleFill } from 'react-icons/bs';
import DarkLightBtn from './DarkLightBtn';
import { motion } from 'framer-motion/dist/framer-motion';

const Navbar = () => {
  return (
    <header
      id='navbar'
      className='bg-green-400 dark:bg-gray-800 top-0 z-40
      bg-gradient-to-t from-white to-green-100 
      dark:to-green-900 dark:from-lightBlack
       overflow-hidden w-full '
    >
      <div className=' mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <a
          href='#about'
          className='sm:text-3xl text-3xl title-font text-lightBlack dark:text-white font-Tourney  p-2 rounded-lg font-bold flex gap-2'
        >
          AK Portfolio <FaShapes className='w-8 text-lightGreen' />
        </a>
        <nav className='md:ml-auto  md:py-1 	flex flex-wrap items-center text-xl justify-center  '>
          <a
            href='#projects'
            className='mr-5  text-sm dark:hover:text-lightGreen  dark:text-white text-lightBlack  font-Tourney  p-1.5 rounded font-bold ease-linear transition-all mb-2'
          >
            Projects
          </a>
          <a
            href='#skills'
            className='mr-5 text-sm dark:hover:text-lightGreen  dark:text-white text-lightBlack  font-Tourney   p-1.5 rounded font-bold ease-linear transition-all mb-2'
          >
            Skills
          </a>
          <a
            href='#me'
            className='mr-5 text-sm dark:hover:text-lightGreen  dark:text-white text-lightBlack  font-Tourney   p-1.5 rounded font-bold ease-linear transition-all mb-2'
          >
            About Me
          </a>
          <a
            href='#contact'
            className='mr-1 text-sm dark:hover:text-lightGreen  dark:text-white text-lightBlack  font-Tourney    p-1.5 rounded font-bold ease-linear transition-all mb-2 flex justify-center items-center'
          >
            Work With Me
            <motion.div
              animate={{ y: [5, -5] }}
              transition={{ duration: 1, yoyo: Infinity }}
            >
              <ArrowRightIcon className='w-6 h-6 ml-1 transform rotate-90' />
            </motion.div>
          </a>
          <DarkLightBtn />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
