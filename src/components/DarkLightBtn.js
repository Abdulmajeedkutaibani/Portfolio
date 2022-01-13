import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkLightBtn = () => {
  const handleDarkMode = () => {
    if (!document.querySelector('#App').classList.contains('dark')) {
      document.querySelector('#App').classList.add('dark');
    } else document.querySelector('#App').classList.remove('dark');
  };
  return (
    <div>
      <input type='checkbox' className='' id='checkbox' />
      <label
        htmlFor='checkbox'
        className=' w-14 h-7 bg-gray-900 flex rounded-xl'
      >
        <FaMoon />
        <FaSun />
        <div className='ball'></div>
      </label>
    </div>
  );
};

export default DarkLightBtn;
