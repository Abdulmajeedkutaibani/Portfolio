import React ,{useRef} from 'react';
import emailjs from 'emailjs-com';
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
  const form= useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vtw7umq', 'template_x8pxegb', form.current, '2UJHZIqtmrmVHDrmF').then(
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
      className='dark:bg-lightBlack h-screen w-screen bg-gradient-to-b from-white to-green-200   lg:pb-32 pb-24'
    >
      <div className='text-center  '>
        <RiMessage2Fill className='w-10 inline-block mb-4 text-4xl' />
        <h1 className='sm:text-4xl text-2xl font-medium title-font text-lightBlack mb-4 dark:text-white font-Tourney'>
          Work With Me
        </h1>
        <p className='lg:text-xl text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto font-sans dark:text-green-400 text-purple-700 p-2'>
          // I am available to work on your projects and bring your ideas to
          life. I am just a click away.
        </p>
      </div>
      <div className=' px-5 pb-20  mx-auto flex justify-center sm:flex-nowrap flex-col items-center'>
        <form
          onSubmit={sendEmail} ref={form}
          name='contact'
          className='lg:w-1/3 md:w-1/2 flex flex-col w-full md:py-8 mt-4   md:mt-0'
        >
          <div className=' mb-4'>
            <label
              htmlFor='name'
              className='leading-7 text-lg dark:text-lightGreen text-purple-700'
            >
              Name
            </label>
            <input
              type='text'
              id='name'
              name='from_name'
              className='w-full bg-gray-800 rounded border border-green-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-yellow-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-sans hover:border-yellow-300'
            />
          </div>
          <div className='relative mb-4'>
            <label
              htmlFor='email'
              className='leading-7 text-lg dark:text-lightGreen text-purple-700'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              name='user_email'
              className='w-full bg-gray-800 rounded border border-green-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-yellow-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-sans hover:border-yellow-300'
            />
          </div>
          <div className='relative mb-4'>
            <label
              htmlFor='message'
              className='leading-7 text-lg dark:text-lightGreen text-purple-700'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              className='w-full bg-gray-800 rounded border border-green-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-yellow-300 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out font-sans hover:border-yellow-300'
            />
          </div>
          <button value='send'
            type='submit'
            className='text-white bg-gradient-to-br from-pink-600 via-purple-600 to-lightGreen border-0 py-2 px-6 focus:outline-none hover:text-yellow-300 transition-all ease-linear rounded text-2xl mt-4'
          >
            Submit
          </button>
        </form>
        <div className='flex items-center justify-center gap-6 transition-all ease-linear mt-8 lg:mt-0'>
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
            href='mailto:realabdulmajeedk@gmail.com'
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
      </div>
    </motion.section>
  );
};

export default Contact;
