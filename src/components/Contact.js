import React from 'react';
import emailjs from 'emailjs-com';
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
    <section
      id='contact'
      className='dark:bg-gray-800 h-screen light-mode-bg-top'
    >
      <div className='container px-5 pt-24 pb-20 mx-auto flex justify-center sm:flex-nowrap flex-wrap'>
        <form
          onSubmit={sendEmail}
          name='contact'
          className='lg:w-1/3 md:w-1/2 flex flex-col w-full md:py-8 mt-8 md:mt-0'
        >
          <h2 className='text-white sm:text-4xl text-3xl mb-1 font-medium title-font'>
            work with me
          </h2>
          <p className='leading-relaxed mb-5 font-sans text-xl'>
            // Leave a message if you have any work opportunities. Feedback is
            also much appreciated.
          </p>
          <div className='relative mb-4'>
            <label htmlFor='name' className='leading-7 text-lg text-gray-400'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-sans'
            />
          </div>
          <div className='relative mb-4'>
            <label htmlFor='email' className='leading-7 text-lg text-gray-400'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out font-sans'
            />
          </div>
          <div className='relative mb-4'>
            <label
              htmlFor='message'
              className='leading-7 text-lg text-gray-400'
            >
              Message
            </label>
            <textarea
              id='message'
              name='message'
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out font-sans'
            />
          </div>
          <button
            type='submit'
            className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-2xl'
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
