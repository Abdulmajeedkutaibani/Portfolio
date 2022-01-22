import { motion } from 'framer-motion/dist/framer-motion';
import React from 'react';
import ProfilePhoto from './images/portfolio photo.jpg';
import CubeModel from './CubeModel';
import MatrixModel from './MatrixModel';
import { ChipIcon } from '@heroicons/react/solid';
import { CgSmile } from 'react-icons/cg';
import { BsTriangleFill, BsSquareFill } from 'react-icons/bs';

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
          <h1 className='sm:text-4xl text-3xl font-medium title-font text-lightBlack mb-4 dark:text-white font-Tourney'>
            Me
          </h1>
        </div>
      </div>
      <div className='w-4/5 mx-auto h-3/4  flex flex-col lg:flex-row justify-center items-center mb-20'>
        <div className='w-1/2 h-full flex items-center relative  '>
          {/* <div className=' w-4/6 h-2 bg-green-500 absolute top-14 left-12'></div>
          <div className=' w-2 h-3/4 bg-green-500 absolute top-14 left-12'></div> */}
          <div className='portfolio-photo w-7/12 h-4/5  '>
            <img className='w-3/4 ' src={ProfilePhoto} alt='my photo' />
          </div>
        </div>
        <div className='w-1/2 h-full bg-gray-700 flex flex-col p-5 rounded-lg mt-14 lg:mt-0 z-20'>
          <span className='text-lightGreen text-3xl mb-8 font-Tourney font-bold '>
            Get To Know Me
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '50%' }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              className=' w-1/2 h-1 bg-purple-600'
            ></motion.div>
          </span>
          <div className='flex flex-col gap-8 text-white text-md font-Tourney font-bold'>
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
            className='w-1/3 h-12 bg-lightGreen text-black text-lg rounded-full font-light mt-12 tracking-wide'
          >
            download cv
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default Me;
