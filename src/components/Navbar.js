import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import './socialwidgets.css';
import {
  FaGithub,
  FaLinkedin,
  FaPortrait,
  FaShapes,
  FaTimes,
} from 'react-icons/fa';

import { BsCircleFill } from 'react-icons/bs';
import { BsSquareFill } from 'react-icons/bs';
// import { BsTriangleFill } from 'react-icons/bs';
import DarkLightBtn from './DarkLightBtn';
import { motion } from 'framer-motion/dist/framer-motion';
import { Button } from '@mui/material';
import { HiMenuAlt3, HiOutlineMail } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const showMenu = () => {
    const menu = document.getElementById('menu');
    const menuBtn = document.getElementById('menu-btn');
    const menuCloseBtn = document.getElementById('menu-close-btn');
    const menuList = document.getElementById('menu-list');
    const menuBackground = document.getElementById('menu-background');
    const socialIcons = document.getElementById('social-icons');

    menu.style.opacity = '1';
    menu.style.width = '200px';
    menu.style.height = '70vh';
    menuBtn.style.width = '0';
    menuBtn.style.height = '0';
    menuCloseBtn.style.width = '30px';
    menuCloseBtn.style.height = '30px';
    menuList.style.opacity = '1';
    menuList.style.width = '100%';
    menuList.style.height = '100%';
    menuBackground.style.height = '100%';
    menuBackground.style.width = '100%';
    socialIcons.style.opacity = '1';
    socialIcons.style.marginLeft = '0px';
  };
  const hideMenu = () => {
    const menu = document.getElementById('menu');
    const menuBtn = document.getElementById('menu-btn');
    const menuCloseBtn = document.getElementById('menu-close-btn');
    const menuList = document.getElementById('menu-list');
    const menuBackground = document.getElementById('menu-background');
    const socialIcons = document.getElementById('social-icons');

    menu.style.opacity = '0';
    menu.style.width = '0';
    menu.style.height = '0';
    menuBtn.style.width = '24px';
    menuBtn.style.height = '24px';
    menuCloseBtn.style.width = '0';
    menuCloseBtn.style.height = '0';
    menuList.style.opacity = '0';
    menuList.style.width = '0';
    menuList.style.height = '0';
    menuBackground.style.height = '0';
    menuBackground.style.width = '0';
    socialIcons.style.opacity = '0';
    socialIcons.style.marginLeft = '300px';
  };
  return (
    <header
      id='navbar'
      className='bg-green-400 dark:bg-gray-800 top-0 
      bg-gradient-to-t from-white to-green-100 
      dark:to-green-900 dark:from-lightBlack
        w-full px-2 relative'
    >
      <div
        id='menu'
        className=' w-0 h-0 bg-gradient-to-tr from-purple-500  to-green-700  absolute  z-40  rounded-xl  transform -rotate-0  right-0 top-0  transition-all duration-500 ease-in-out flex justify-center items-start md:hidden rounded-bl-full '
      >
        <ul
          id='menu-list'
          className='  flex flex-col gap-6 transform  text-center mb-10  font-Tourney font-bold relative pt-16 transition-all duration-300  opacity-0'
        >
          <li>
            <a onClick={() => hideMenu()} href='#projects'>
              My Work
            </a>
          </li>
          <li className=''>
            <a onClick={() => hideMenu()} href='#skills' className='ml-2'>
              Skills
            </a>
          </li>
          <li>
            <a onClick={() => hideMenu()} href='#me'>
              About
            </a>
          </li>
          <li>
            <a onClick={() => hideMenu()} href='#contact'>
              Contact
            </a>
          </li>

          <motion.li
            id='social-icons'
            className='flex items-center justify-center gap-2 mt-20 transition-all  ease-in-out  duration-700 relative'
          >
            <motion.a
              whileTap={{ scale: 0.8 }}
              href='https://github.com/Abdulmajeedkutaibani'
              target='_blank'
              className='hover:text-lightGreen w-6 h-6 flex justify-center items-center text-3xl transition-all ease-linear -mt-6 ml-4'
            >
              <FaGithub />
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.8 }}
              href='https://www.linkedin.com/in/abdulmajeed-kutaibani-a60477153'
              target='_blank'
              className='hover:text-lightGreen w-6 h-6 flex justify-center items-center text-3xl transition-all ease-linear mt-8'
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.8 }}
              href='mailto:abodymeo@gmail.com'
              className='hover:text-lightGreen w-6 h-6 flex justify-center items-center text-3xl transition-all ease-linear mt-20'
            >
              <HiOutlineMail />
            </motion.a>
            <motion.a
              whileTap={{ scale: 0.8 }}
              href='https://drive.google.com/file/d/1OuEgPdFbvkDiCMsrLYnCcJ0vcIAihuDT/view?usp=sharing'
              target='_blank'
              className='hover:text-lightGreen w-6 h-6 flex justify-center items-center text-3xl transition-all ease-linear mt-24'
            >
              <FaPortrait />
            </motion.a>
          </motion.li>
        </ul>
      </div>
      <div className=' mx-auto flex md:flex-wrap md:p-5 p-2  items-center'>
        <a
          href='#about'
          className='md:text-3xl text-xl title-font text-lightBlack dark:text-white font-Tourney  p-2 rounded-lg font-bold flex lg:gap-2 md:justify-center items-center'
        >
          AK Portfolio <FaShapes className='w-8 text-lightGreen' />
        </a>
        <div>
          <DarkLightBtn />
        </div>
        <motion.div
          whileTap={{ scale: 0.75 }}
          transition={{ duration: 0.1 }}
          className='ml-auto rounded-sm z-50 md:hidden focus:bg-transparent focus:bg-transparent'
        >
          <HiMenuAlt3
            id='menu-btn'
            onClick={() => showMenu()}
            className=' w-6 h-6 text-3xl text-lightGreen cursor-pointer z-40 transition-all ease-in-out duration-150'
          />
          <IoClose
            id='menu-close-btn'
            onClick={() => hideMenu()}
            className=' w-0 h-0 text-3xl  text-lightGreen text-opacity-80 cursor-pointer z-50 transition-all ease-in-out duration-150 '
          />
        </motion.div>

        <nav className='md:ml-auto  md:py-1 	md:flex flex-wrap items-center text-xl justify-center  hidden'>
          <a
            href='#projects'
            className='mr-5  text-sm dark:hover:text-lightGreen  dark:text-white text-lightBlack  font-Tourney  p-1.5  font-bold ease-linear transition-all mb-2 border-b'
          >
            Projects
          </a>
          <a
            href='#skills'
            className='mr-5 text-sm dark:hover:text-lightGreen  dark:text-white text-lightBlack  font-Tourney   p-1.5  font-bold ease-linear transition-all mb-2'
          >
            Skills
          </a>
          <a
            href='#me'
            className='mr-5 text-sm dark:hover:text-lightGreen  dark:text-white text-lightBlack  font-Tourney   p-1.5  font-bold ease-linear transition-all mb-2'
          >
            About
          </a>
          <a
            href='#contact'
            className='mr-1 text-sm dark:hover:text-lightGreen  dark:text-white text-lightBlack  font-Tourney    p-1.5  font-bold ease-linear transition-all mb-2 flex justify-center items-center'
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
