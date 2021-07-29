import React from 'react';

const About = () => {
  return (
    <section id='about'>
      <div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-6xl text-5xl mb-5 font-medium text-white'>
            Welcome, I'm Abdulmajeed.K
          </h1>
          <div class='primary-sub mb-8'>
            <div class='primary-sub__word'>
              <div class='primary-sub__top'>I'm</div>
              <div class='primary-sub__bottom'>I'm</div>
            </div>
            <div class='primary-sub__word'>
              <div class='primary-sub__top'>a</div>
              <div class='primary-sub__bottom'>a</div>
            </div>
            <div class='primary-sub__word'>
              <div class='primary-sub__top'>front-end</div>
              <div class='primary-sub__bottom'>frontend</div>
            </div>
            <div class='primary-sub__word'>
              <div class='primary-sub__top'>web</div>
              <div class='primary-sub__bottom'>web</div>
            </div>
            <div class='primary-sub__word'>
              <div class='primary-sub__top'>developer</div>
              <div class='primary-sub__bottom'>developer</div>
            </div>
            <div class='primary-sub__word'>
              <div class='primary-sub__top'>currently</div>
              <div class='primary-sub__bottom'>currently</div>
            </div>
            <div class='primary-sub__word'>
              <div class='primary-sub__top'>based</div>
              <div class='primary-sub__bottom'>based</div>
            </div>
            <div class='primary-sub__word'>
              <div class='primary-sub__top'>in</div>
              <div class='primary-sub__bottom'>in</div>
            </div>
            <div class='primary-sub__word'>
              <div class='primary-sub__top'>Istanbul,</div>
              <div class='primary-sub__bottom'>Istanbul,</div>
            </div>
            <div class='primary-sub__word'>
              <div class='primary-sub__top'>Turkey</div>
              <div class='primary-sub__bottom'>Turkey</div>
            </div>
          </div>
          <div className='flex justify-center mt-4'>
            <a
              href='#contact'
              className='inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-xl'
            >
              Work With Me
            </a>
            <a
              href='#projects'
              className='ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-xl'
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img
            className='object-cover object-center rounded'
            alt='hero'
            src='./coding.svg'
          />
        </div>
      </div>
    </section>
  );
};

export default About;
