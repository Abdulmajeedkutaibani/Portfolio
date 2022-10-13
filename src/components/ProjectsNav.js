import React from 'react';

export const ProjectsNav = ({ filter, button }) => {
  return (
    <div className='flex gap-8 justify-evenly  w-3/5 text-2xl font-PressStart2P text-green-400 mt-4 mb-8'>
      {button.map((cat, i) => (
        <button
          key={i}
          type='button'
          onClick={() => filter(cat)}
          className='hover:text-white cursor-pointer  hover:border-yellow-600 hover:bg-green-600  flex justify-center items-center w-full h-20 rounded-full transition-colors'
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
