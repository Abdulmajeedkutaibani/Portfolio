import { motion } from 'framer-motion/dist/framer-motion';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkLightBtn = () => {
  const handleDarkMode = () => {
    // if (!document.querySelector('#App').classList.contains('dark')) {
    //   document.querySelector('#App').classList.add('dark');
    // } else document.querySelector('#App').classList.remove('dark');
    const checkbox = document.getElementById('checkbox');
    checkbox.addEventListener('change', function () {
      if (this.checked) {
        document.querySelector('#root').classList.remove('dark');
      } else {
        document.querySelector('#root').classList.add('dark');
      }
    });
  };
  return (
    <div className='transform lg:-rotate-90'>
      <input
        type='checkbox'
        className='checkbox absolute opacity-0 '
        id='checkbox'
      />
      <motion.label
        onClick={() => handleDarkMode()}
        htmlFor='checkbox'
        className='label w-12 h-6 dark:bg-green-500 bg-lightBlack lg:bg-gradient-to-r from-lightGreen via-purple-500 to-blue-900 flex rounded-3xl items-center justify-between cursor-pointer p-1 ml-2'
      >
        <FaSun className='text-yellow-300 ml-0.5 w-3.5' />
        <FaMoon className='text-white mr-0.5 transform lg:rotate-90 w-3.5' />
        <div className='ball  absolute bg-white w-5 h-5 rounded-full transition delay-150 ease-linear'></div>
      </motion.label>
    </div>
  );
};

export default DarkLightBtn;
