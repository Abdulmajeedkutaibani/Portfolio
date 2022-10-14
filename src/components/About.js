import { motion } from 'framer-motion/dist/framer-motion';
import React from 'react';
import { Model3D } from './Model3D.js';

const About = () => {
  return (
    <section
      id='about'
      className='md:h-screen  w-full relative dark:bg-lightBlack bg-white overflow-hidden lg:mb-0 mb-20 '
    >
      <motion.div
        animate={{ y: [-10, 10], rotate: 1080, x: [-20, 20] }}
        transition={{ yoyo: Infinity, duration: 8 }}
        className='circle-orange w-20 h-20 bg-gradient-to-tl from-green-300 to-purple-600 rounded-full absolute right-16 top-6 p-2'
      >
        <div className='w-full h-full bg-white dark:bg-lightBlack transform transition-all delay-50 rounded-full'></div>
      </motion.div>
      <motion.div
        animate={{ y: [-5, 5] }}
        transition={{ yoyo: Infinity, duration: 1.5 }}
        className='circle-orange w-12 h-12 bg-gradient-to-tl from-blue-500 to-pink-600  absolute left-16 top-56 p-1'
      >
        <div className='w-full h-full bg-white dark:bg-lightBlack '></div>
      </motion.div>

      <motion.div
        animate={{ y: [-5, 5] }}
        transition={{ yoyo: Infinity, duration: 1.5 }}
        className='w-56 absolute left-20 bottom-4 overflow-hidden'
      >
        <div className=' h-24 w-24 bg-gradient-to-t from-green-500 to-blue-500 -rotate-45 transform origin-bottom-left'></div>
      </motion.div>

      <div className='container mx-auto h-screen flex  lg:px-10  lg:flex-row flex-col-reverse items-center justify-start lg:justify-start -mt-20'>
        <div className='dark:bg-gray-800 bg-green-600 dark:bg-opacity-50 bg-opacity-30 rounded-2xl md:p-6 p-2 w-10/12 lg:w-1/3 flex flex-col md:items-center  md:mb-0 items-center text-center z-20 border-b-4 border-purple-500 -mt-12 mb-6'>
          <p className='title-font sm:text-3xl text-2xl mb-5 font-medium dark:text-black dark:bg-green-100 text-white bg-lightBlack md:p-4 p-2 rounded-lg text-center w-4/5'>
            Hi there 👋🏼
            <br />
            <span className='md:text-2xl text-xl'>I'm</span>
            {` `}
            Abdulmajeed Kutaibani
          </p>
          <div className='primary-sub md:text-2xl text-base md:mb-8 mb-2 '>
            <div className='primary-sub__word font-Tourney'>
              <div className='primary-sub__top dark:text-green-400 text-purple-700 '>
                I'm
              </div>
              <div className='primary-sub__bottom'>I'm</div>
            </div>
            <div className='primary-sub__word font-Tourney'>
              <div className='primary-sub__top dark:text-green-400 text-purple-700'>
                a
              </div>
              <div className='primary-sub__bottom'>a</div>
            </div>
            <div className='primary-sub__word font-Tourney'>
              <div className='primary-sub__top dark:text-green-400 text-purple-700'>
                front-end
              </div>
              <div className='primary-sub__bottom'>front-end</div>
            </div>
            <div className='primary-sub__word font-Tourney'>
              <div className='primary-sub__top dark:text-green-400 text-purple-700'>
                web
              </div>
              <div className='primary-sub__bottom'>web</div>
            </div>
            <div className='primary-sub__word font-Tourney'>
              <div className='primary-sub__top dark:text-green-400 text-purple-700'>
                developer
              </div>
              <div className='primary-sub__bottom'>developer</div>
            </div>
            <div className='primary-sub__word font-Tourney'>
              <div className='primary-sub__top dark:text-green-400 text-purple-700'>
                building
              </div>
              <div className='primary-sub__bottom'>building</div>
            </div>
            <div className='primary-sub__word font-Tourney'>
              <div className='primary-sub__top dark:text-green-400 text-purple-700'>
                beautiful
              </div>
              <div className='primary-sub__bottom'>beautiful</div>
            </div>
            <div className='primary-sub__word font-Tourney'>
              <div className='primary-sub__top dark:text-green-400 text-purple-700'>
                web
              </div>
              <div className='primary-sub__bottom'>web</div>
            </div>
            <div className='primary-sub__word font-Tourney'>
              <div className='primary-sub__top dark:text-green-400 text-purple-700'>
                experiences.
              </div>
              <div className='primary-sub__bottom'>experiences.</div>
            </div>
          </div>
          <div className='flex justify-center md:h-12 h-10 w-4/5 md:w-full text-center'>
            <motion.a
              whileTap={{ scale: 0.75 }}
              href='#projects'
              className='w-full h-full  md:text-xl text-base hover:text-purple-500 text-lightBlack  font-Tourney bg-lightGreen md:p-2  rounded-md font-bold ease-linear transition-all flex justify-center items-center'
            >
              See My Past Work
            </motion.a>
          </div>
        </div>
        <Model3D />
      </div>
    </section>
  );
};

export default About;
