import React from 'react';
import { BadgeCheckIcon, ChipIcon } from '@heroicons/react/solid';
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
} from 'react-icons/fa';
import {
  SiMaterialui,
  SiTailwindcss,
  SiJavascript,
  SiFirebase,
  SiScaleway,
  SiStyledcomponents,
  SiRedux,
} from 'react-icons/si';

const Skills = () => {
  return (
    <section id='skills'>
      <div className='container px-5 py-10 mx-auto'>
        <div className='text-center mb-20'>
          <ChipIcon className='w-10 inline-block mb-4' />
          <h1 className='sm:text-4xl text-3xl font-medium title-font text-white mb-4'>
            Skills &amp; Technologies
          </h1>
          <p className='text-xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto font-sans'>
            // I love my coding journey with all of it's ups and downs, and I
            will definetly keep learning and making this list longer.
          </p>
        </div>
        <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'>
          <div className='p-2 sm:w-1/2 w-full'>
            <div className='bg-gray-800 rounded flex p-4 h-full items-center'>
              <FaHtml5 className='w-10 h-10 flex-shrink-0  text-red-500' />
              <FaCss3Alt className='w-10 h-10 flex-shrink-0 mr-4 text-blue-600' />
              <span className='title-font font-medium text-2xl text-white'>
                HTML/CSS
              </span>
            </div>
          </div>
          <div className='p-2 sm:w-1/2 w-full'>
            <div className='bg-gray-800 rounded flex p-4 h-full items-center'>
              <SiMaterialui className='w-10 h-10 flex-shrink-0 mr-4 text-blue-500' />
              <span className='title-font font-medium text-2xl text-white'>
                Material UI
              </span>
            </div>
          </div>
          <div className='p-2 sm:w-1/2 w-full'>
            <div className='bg-gray-800 rounded flex p-4 h-full items-center'>
              <FaSass className='w-10 h-10 mr-3 text-pink-400 flex-shrink-0 mr-4' />
              <span className='title-font font-medium text-2xl text-white'>
                Sass
              </span>
            </div>
          </div>
          <div className='p-2 sm:w-1/2 w-full'>
            <div className='bg-gray-800 rounded flex p-4 h-full items-center'>
              <SiTailwindcss className='text-green-400 w-10 h-10 flex-shrink-0 mr-4' />
              <span className='title-font font-medium text-2xl text-white'>
                Tailwind CSS
              </span>
            </div>
          </div>
          <div className='p-2 sm:w-1/2 w-full'>
            <div className='bg-gray-800 rounded flex p-4 h-full items-center'>
              <FaBootstrap className='text-purple-500 w-10 h-10 flex-shrink-0 mr-4' />
              <span className='title-font font-medium text-2xl text-white'>
                Bootstrap 5
              </span>
            </div>
          </div>
          <div className='p-2 sm:w-1/2 w-full'>
            <div className='bg-gray-800 rounded flex p-4 h-full items-center'>
              <SiStyledcomponents className='text-pink-400 w-10 h-10 flex-shrink-0 mr-4' />
              <span className='title-font font-medium text-2xl text-white'>
                Styled Components
              </span>
            </div>
          </div>
          <div className='p-2 sm:w-1/2 w-full'>
            <div className='bg-gray-800 rounded flex p-4 h-full items-center'>
              <SiJavascript className='text-yellow-300  w-10 h-10 flex-shrink-0 mr-4' />
              <span className='title-font font-medium text-2xl text-white'>
                JavaScript
              </span>
            </div>
          </div>
          <div className='p-2 sm:w-1/2 w-full'>
            <div className='bg-gray-800 rounded flex p-4 h-full items-center'>
              <FaReact className='text-blue-400 w-10 h-10 flex-shrink-0 mr-4' />
              <span className='title-font font-medium text-2xl text-white'>
                React.js
              </span>
            </div>
          </div>
          <div className='p-2 sm:w-1/2 w-full'>
            <div className='bg-gray-800 rounded flex p-4 h-full items-center'>
              <SiRedux className='text-purple-400 w-10 h-10 flex-shrink-0 mr-4' />
              <span className='title-font font-medium text-2xl text-white'>
                Redux
              </span>
            </div>
          </div>
          <div className='p-2 sm:w-1/2 w-full'>
            <div className='bg-gray-800 rounded flex p-4 h-full items-center'>
              <SiFirebase className='text-yellow-400 w-10 h-10 flex-shrink-0 mr-4' />
              <span className='title-font font-medium text-2xl text-white'>
                Firebase
              </span>
            </div>
          </div>
          <div className='p-2 sm:w-1/2 w-full'>
            <div className='bg-gray-800 rounded flex p-4 h-full items-center'>
              <FaNpm className='text-red-400 w-10 h-10 flex-shrink-0 mr-4' />
              <span className='title-font font-medium text-2xl text-white'>
                Npm
              </span>
            </div>
          </div>
          <div className='p-2 sm:w-1/2 w-full'>
            <div className='bg-gray-800 rounded flex p-4 h-full items-center'>
              <FaGitAlt className='w-10 h-10 flex-shrink-0 mr-1  text-red-400' />
              <FaGithub className='w-10 h-10 flex-shrink-0 mr-4 text-white' />
              <span className='title-font font-medium text-2xl text-white'>
                Git / GitHub
              </span>
            </div>
          </div>
          <div className='p-2 sm:w-1/2 w-full'>
            <div className='bg-gray-800 rounded flex p-4 h-full items-center'>
              <SiScaleway className='text-green-400 w-10 h-10 flex-shrink-0 mr-4' />
              <span className='title-font font-medium text-2xl text-white'>
                Responsive Design
              </span>
            </div>
          </div>
          <div className='p-2 sm:w-1/2 w-full'>
            <div className='bg-gray-800 rounded flex p-4 h-full items-center'>
              <BadgeCheckIcon className='text-green-400 w-10 h-10 flex-shrink-0 mr-4' />
              <span className='title-font font-medium text-2xl text-white'>
                Fast Learner
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
