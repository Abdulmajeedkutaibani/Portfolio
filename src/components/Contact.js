import React from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
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
          window.alert(
            'Thank you for contacting me , I will be in touch with you as soon as I can ;)'
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id='contact' className='relative'>
      <div className='container px-5 pt-24 pb-20 mx-auto flex justify-center sm:flex-nowrap flex-wrap'>
        <form
          onSubmit={sendEmail}
          name='contact'
          className='lg:w-1/3 md:w-1/2 flex flex-col w-full md:py-8 mt-8 md:mt-0'
        >
          <h2 className='text-white sm:text-4xl text-3xl mb-1 font-medium title-font'>
            Hire Me
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
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
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
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
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
              className='w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
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
