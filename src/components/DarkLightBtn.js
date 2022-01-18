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
        className='label w-16 h-8 bg-lightBlack dark:bg-purple-700 flex rounded-3xl items-center justify-between cursor-pointer p-1'
      >
        <FaSun className='text-yellow-300 ml-1 w-4' />
        <FaMoon className='text-white mr-1 transform rotate-90 w-4' />
        <div className='ball ml-8 absolute bg-white w-6 h-6 rounded-full transition delay-150 ease-linear'></div>
      </motion.label>
    </div>
  );
};

export default DarkLightBtn;
