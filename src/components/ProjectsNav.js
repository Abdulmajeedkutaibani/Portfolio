import React, { useState } from 'react';

export const ProjectsNav = ({ filter, button }) => {
  const [selectedCategory, setSelectedCategory] = useState();

  const handleClick = (cat, i) => {
    filter(cat);
    setSelectedCategory(i);
    return console.log(selectedCategory);
  };
  // let toggleClassCheck = selectedCategory ? 'active' : null;
  return (
    <div className='flex flex-wrap md:flex-nowrap gap-8 justify-evenly  w-full max-w-[1000px]  font-PressStart2P text-green-400 mt-4 mb-8'>
      {button.map((cat, i) => (
        <button
          key={i}
          type='button'
          onClick={() => handleClick(cat, i)}
          className={` hover:text-white cursor-pointer lg:text-2xl md:text-xl text-lg  hover:border-yellow-600 hover:bg-green-600  flex justify-center items-center lg:w-40 md:w-32 w-24 h-20 rounded-xl transition-colors tracking-wider`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
