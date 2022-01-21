import { motion } from 'framer-motion/dist/framer-motion';
import React from 'react';
import ProfilePhoto from './images/portfolio photo.jpg';

const Me = () => {
  return (
    <section className='h-screen w-4/5 bg-lightBlack flex justify-center items-center lg:px-12 mx-auto'>
      <div className='w-full h-3/4  flex justify-center items-center'>
        <div className='w-1/2 h-full  flex justify-center items-center relative'>
          {/* <div className=' w-4/6 h-2 bg-green-500 absolute top-14 left-12'></div>
          <div className=' w-2 h-3/4 bg-green-500 absolute top-14 left-12'></div> */}
          <div className='portfolio-photo w-3/4 h-4/5 overflow-hidden '>
            <img className='w-72' src={ProfilePhoto} alt='my photo' />
          </div>
        </div>
        <div className='w-1/2 h-full bg-gray-700 flex flex-col p-5 rounded-lg'>
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
            className='w-1/3 h-12 bg-lightGreen text-black text-lg rounded-full font-light mt-auto tracking-wide'
          >
            download cv
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Me;
