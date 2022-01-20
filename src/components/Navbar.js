import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import './socialwidgets.css';
import { FaGithub } from 'react-icons/fa';
import DarkLightBtn from './DarkLightBtn';

const Navbar = () => {
  return (
    <header
      id='navbar'
      className='bg-green-400 dark:bg-gray-800 top-0 z-40
      bg-gradient-to-t from-white to-green-100 
      dark:to-green-900 dark:from-lightBlack
       overflow-hidden w-full'
    >
      <div className=' mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <a className='ml-16 title-font font-medium text-white mb-4 md:mb-0'>
          <a href='#about' className=''>
            <img src='./favicon.ico' alt='' className='w-11' />
          </a>
        </a>
        <nav className='md:ml-auto  md:py-1 	flex flex-wrap items-center text-xl dark:text-white justify-center'>
          <a href='#projects' className='mr-5 hover:text-white '>
            Projects
          </a>
          <a href='#skills' className='mr-5 hover:text-white'>
            Skills
          </a>
          <a
            href='#contact'
            className='inline-flex transition-all delay-100 items-center text-white dark:bg-purple-700 bg-lightBlack border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-xl mt-4 md:mt-0'
          >
            work with me
            <ArrowRightIcon className='w-4 h-4 ml-1' />
          </a>
          <DarkLightBtn />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
