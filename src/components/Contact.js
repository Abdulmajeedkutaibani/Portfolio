import React from 'react';
import emailjs from 'emailjs-com';
import CubeModel from './CubeModel';
import { motion } from 'framer-motion/dist/framer-motion';
import { RiMessage2Fill } from 'react-icons/ri';
import { FaGithub, FaLinkedin, FaPortrait } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
// import { userSchema } from './Validation/UserValidation';

const Contact = () => {
  // const createUser = async (e) => {
  //   e.preventDefault();

  //   let formData = {
  //     name: e.target[0].value,
  //     email: e.target[1].value,
  //     message: e.target[2].value,
  //   };
  //   const isValid = await userSchema.isValid(formData);
  //   console.log(isValid);
  //   if (isValid === true) {
  //     return sendEmail();
  //   }
  // };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'gmail',
        'template_483jufz',
        e.target,
        'user_NNzRSU120RVW9ClfzQCnr'
      )
      .then(
        (result) => {
          console.log(result.text);
          window.alert(`Message Sent.
Thank You For Your Time.`);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id='contact'
      className='dark:bg-lightBlack h-screen bg-green-100 bg-opacity-10  mb-32'
    >
      <div className='text-center  '>
        <RiMessage2Fill className='w-10 inline-block mb-4 text-4xl' />
        <h1 className='sm:text-4xl text-2xl font-medium title-font text-lightBlack mb-4 dark:text-white font-Tourney'>
          Work With Me
        </h1>
        <p className='lg:text-xl text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto font-sans dark:text-green-400 text-purple-700 p-2'>
          // Leave me a message with your contact information if you have any
          work opportunities and I will be in touch with you as soon as I can.
        </p>
      </div>
      <div className=' px-5 pb-20  mx-auto flex justify-center sm:flex-nowrap flex-col items-center'>
        <form
          onSubmit={sendEmail}
          name='contact'
          className='lg:w-1/3 md:w-1/2 flex flex-col w-full md:py-8 mt-4   md:mt-0'
        >
          <div className=' mb-4'>
            <label htmlFor='name' className='leading-7 text-lg text-lightGreen'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full bg-gray-800 rounded border border-green-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-sans'
            />
          </div>
          <div className='relative mb-4'>
            <label
              htmlFor='email'
              className='leading-7 text-lg text-lightGreen'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full bg-gray-800 rounded border border-green-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-sans'
            />
          </div>
          <div className='relative mb-4'>
            <label
              htmlFor='message'
              className='leading-7 text-lg text-lightGreen'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              className='w-full bg-gray-800 rounded border border-green-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out font-sans'
            />
          </div>
          <button
            type='submit'
            className='text-white bg-gradient-to-br from-pink-600 via-purple-600 to-lightGreen border-0 py-2 px-6 focus:outline-none hover:text-lightGreen transition-all ease-linear rounded text-2xl mt-4'
          >
            Submit
          </button>
        </form>
      </div>
      <div className='flex items-center justify-center gap-6 transition-all ease-linear'>
        <motion.a
          whileTap={{ scale: 0.8 }}
          href='https://github.com/Abdulmajeedkutaibani'
          target='_blank'
          className='hover:text-lightGreen w-12 h-12 flex justify-center items-center text-3xl transition-all ease-linear'
        >
          <FaGithub />
        </motion.a>
        <motion.a
          whileTap={{ scale: 0.8 }}
          href='https://www.linkedin.com/in/abdulmajeed-kutaibani-a60477153'
          target='_blank'
          className='hover:text-lightGreen w-12 h-12 flex justify-center items-center text-3xl transition-all ease-linear'
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          whileTap={{ scale: 0.8 }}
          href='mailto:abodymeo@gmail.com'
          className='hover:text-lightGreen w-12 h-12 flex justify-center items-center text-3xl transition-all ease-linear'
        >
          <HiOutlineMail />
        </motion.a>
        <motion.a
          whileTap={{ scale: 0.8 }}
          href='https://drive.google.com/file/d/1OuEgPdFbvkDiCMsrLYnCcJ0vcIAihuDT/view?usp=sharing'
          target='_blank'
          className='hover:text-lightGreen w-12 h-12 flex justify-center items-center text-3xl transition-all ease-linear'
        >
          <FaPortrait />
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Contact;
