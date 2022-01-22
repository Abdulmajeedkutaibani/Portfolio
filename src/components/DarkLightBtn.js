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
    <div className='transform -rotate-90'>
      <input
        type='checkbox'
        className='checkbox absolute opacity-0 '
        id='checkbox'
      />
      <motion.label
        onClick={() => handleDarkMode()}
        htmlFor='checkbox'
        className='label w-12 h-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-900 flex rounded-3xl items-center justify-between cursor-pointer p-1 ml-2'
      >
        <FaSun className='text-yellow-300 ml-1 w-3' />
        <FaMoon className='text-white mr-1 transform rotate-90 w-3' />
        <div className='ball ml-6 absolute bg-white w-4 h-4 rounded-full transition delay-150 ease-linear'></div>
      </motion.label>
    </div>
  );
};

export default DarkLightBtn;
