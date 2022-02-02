import { motion } from 'framer-motion/dist/framer-motion';
import React from 'react';
import ProfilePhoto from './images/portfolio photo.jpg';
import CubeModel from './CubeModel';
import MatrixModel from './MatrixModel';
import { ArrowRightIcon, ChipIcon } from '@heroicons/react/solid';
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
      className='me-section bg-opacity-25 min-h-screen w-full flex-col justify-center items-center lg:px-12 mx-auto relative overflow-hidden py-10'
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
          <span className='w-16 text-yellow-400 md:text-6xl text-4xl inline-block mb-2'>
            👨🏻‍💻
          </span>
          <h1 className='sm:text-4xl text-2xl font-medium title-font text-lightBlack mb-4 dark:text-white font-Tourney'>
            About
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
          <div className='portfolio-photo max-w-md lg:w-7/12 w-1/2 h-4/5  mx-auto before:left-2'>
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
          className='lg:w-1/2 w-11/12  h-full dark:bg-gray-800 bg-green-400 bg-opacity-30 dark:bg-opacity-80 flex flex-col p-5 rounded-lg mt-14 lg:mt-0 z-20 '
        >
          <span className='dark:text-lightGreen text-purple-600 lg:text-3xl text-xl lg:mb-8 mb-4 font-Tourney font-bold '>
            Get To Know Me
            <motion.div
              initial={{ width: 0 }}
              whileInView={{
                width: `${window.innerWidth > 1010 ? '255px' : '180px'}`,
              }}
              transition={{ duration: 1.5, delay: 1.5 }}
              viewport={{ once: true }}
              className=' w-1/2 h-1 dark:bg-purple-600 bg-blue-600'
            ></motion.div>
          </span>
          <div className='flex flex-col lg:gap-4 gap-3 dark:text-gray-200 text-lightBlack text-lightBlac lg:text-base font-bold text-sm font-Comfortaa tracking-tighter'>
            <p>I'm Abdulmajeed, I'm a self taught Front-end/React Developer.</p>
            <p>
              I was studying medicine and on my way to becoming a doctor then
              BOOOOOM! <br /> a Pandemic <br /> Which honesly was scary at first
              but then turned out to be a blessing in disguise for me, I got
              married to my amazing wife and I got to teach myself something
              that I've always wanted to study...Coding.
            </p>
            <p>
              I've come so far since I started learnig how to code back in
              1/1/2021, from coding my first ugly looking website which gave me
              the 'Oh My God I Created This!!' feeling, to building functional
              websites with purpose and amazing features.
            </p>
            <p>
              Now I feel very confident in my ability to start building the web
              with other creators and contribute to this fascinating invention
              we call the internet.
            </p>
            <p>So download my Resume and let's work together!</p>
          </div>
          <motion.div
            animate={{ y: [5, -5] }}
            transition={{ duration: 1, yoyo: Infinity }}
            className='mt-2 flex justify-center lg:block'
          >
            <ArrowRightIcon className='w-8 h-8 dark:text-lightGreen text-purple-600 lg:ml-10  transform rotate-90 ' />
          </motion.div>
          <motion.a
            href='https://drive.google.com/file/d/1OuEgPdFbvkDiCMsrLYnCcJ0vcIAihuDT/view?usp=sharing'
            whileTap={{ scale: 0.75 }}
            className='lg:w-1/3 w-full lg:h-12 h-10 dark:bg-lightGreen bg-purple-600 dark:text-black text-white md:text-lg text-xl lg:rounded-2xl rounded font-light md:mt-6 mt-4 tracking-wide flex justify-center items-center gap-1 '
          >
            <FaFileDownload /> <span className='pt-0.5'>Resume</span>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default Me;
