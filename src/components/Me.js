import { motion } from 'framer-motion/dist/framer-motion';
import React from 'react';
import ProfilePhoto from './images/portfolio photo.jpg';
import CubeModel from './CubeModel';
import MatrixModel from './MatrixModel';
import { ChipIcon } from '@heroicons/react/solid';
import { CgSmile } from 'react-icons/cg';
import { BsTriangleFill, BsSquareFill } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { FaFileDownload } from 'react-icons/fa';
// ..
AOS.init();

const Me = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id='me'
      className='me-section bg-opacity-25 min-h-screen w-full flex-col justify-center items-center lg:px-12 mx-auto relative overflow-hidden'
    >
      <motion.div
        className=' w-8 h-8 bg-gradient-to-tl from-green-500 via-purple-800  to-pink-600  right-48 top-6 absolute p-1.5 rounded-full transform rotate-45'
        initial={{ rotate: 45 }}
        animate={{ y: [0, 100, 200], x: [0, -900, 260], rotate: 2160 }}
        transition={{ yoyo: Infinity, duration: 30, delay: 0.4 }}
      >
        <div className='w-full h-full  rounded-full'></div>
      </motion.div>
      <motion.div
        className='absolute'
        viewport={{ once: true }}
        whileInView={{
          x: [0, 1200, 0],
          y: [0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 10, 0, 50],
        }}
        transition={{ duration: 40, yoyo: Infinity, ease: 'bounce' }}
      >
        <BsTriangleFill className=' text-lightGreen text-3xl' />
      </motion.div>
      <motion.div
        className='absolute'
        viewport={{ once: true }}
        whileInView={{
          x: [0, 100, 300],
          y: [0, 900, 0],
        }}
        transition={{ duration: 30, yoyo: Infinity, ease: 'bounce' }}
      >
        <BsSquareFill className=' text-purple-500 text-3xl' />
      </motion.div>
      <div className='w-1/4 h-1/2 flex justify-between items-center absolute z-20'></div>
      <div className=' px-5 py-10 mx-auto relative z-10'>
        <div className='text-center  -mt-10'>
          <span className='w-16 text-yellow-400 text-6xl inline-block mb-2'>
            👨🏻‍💻
          </span>
          <h1 className='sm:text-4xl text-2xl font-medium title-font text-lightBlack mb-4 dark:text-white font-Tourney'>
            Me
          </h1>
        </div>
      </div>
      <div className='lg:w-4/5 w-11/12 mx-auto h-3/4  flex flex-col lg:flex-row justify-center items-center mb-20'>
        <div
          data-aos='fade-right'
          data-aos-duration='1000'
          data-aos-delay='300'
          data-aos-once='true'
          className='lg:w-1/2 h-full flex items-center relative  '
        >
          <div className='portfolio-photo lg:w-7/12 w-1/2 h-4/5  mx-auto before:left-2'>
            <img
              className='w-3/4 mx-auto lg:mx-0'
              src={ProfilePhoto}
              alt='my photo'
            />
          </div>
        </div>
        <div
          data-aos='zoom-in-left'
          data-aos-duration='1000'
          data-aos-delay='100'
          data-aos-once='true'
          className='lg:w-1/2  h-full bg-gray-700 bg-opacity-80 flex flex-col p-5 rounded-lg mt-14 lg:mt-0 z-20 '
        >
          <span className='text-lightGreen lg:text-3xl text-xl lg:mb-8 mb-4 font-Tourney font-bold '>
            Get To Know Me
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '50%' }}
              transition={{ duration: 1.5, delay: 1.5 }}
              viewport={{ once: true }}
              className=' w-1/2 h-1 bg-purple-600'
            ></motion.div>
          </span>
          <div className='flex flex-col lg:gap-8 gap-2 text-white lg:text-md text-xs font-Tourney font-bold'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel amet
              natus consequuntur sed ea nihil recusandae quod maiores
              asperiores, est repellat perspiciatis quidem cupiditate ipsum id
              ipsa, ab non dolorum tempora magni eos dolorem, expedita adipisci
              molestiae? Quibusdam, doloremque quasi?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              dolores ratione pariatur corporis placeat amet velit nisi corrupti
              obcaecati delectus.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              omnis at mollitia itaque nostrum atque aspernatur neque,
              blanditiis repellat pariatur.
            </p>
          </div>
          <motion.button
            whileTap={{ scale: 0.75 }}
            className='lg:w-1/3 w-full lg:h-12 h-10 bg-lightGreen text-black md:text-lg text-xl lg:rounded-2xl rounded font-light md:mt-12 mt-4 tracking-wide flex justify-center items-center gap-1 '
          >
            <FaFileDownload /> <span className='pt-0.5'>Resume</span>
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default Me;
