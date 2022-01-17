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
        document.querySelector('#App').classList.remove('dark');
      } else {
        document.querySelector('#App').classList.add('dark');
      }
    });
  };
  return (
    <div>
      <input
        type='checkbox'
        className='checkbox absolute opacity-0 '
        id='checkbox'
      />
      <motion.label
        onClick={() => handleDarkMode()}
        htmlFor='checkbox'
        className='label w-20 h-10 bg-gradient-to-r from-green-300 to-blue-900 flex rounded-3xl items-center justify-between cursor-pointer p-1'
      >
        <FaSun className='text-yellow-300 ml-1 w-6' />
        <FaMoon className='text-white mr-1' />
        <div className='ball ml-10 absolute bg-white w-8 h-8 rounded-full transition delay-150 ease-linear'></div>
      </motion.label>
    </div>
  );
};

export default DarkLightBtn;
