import React from 'react';

const Footer = () => {
  return (
    <footer className='footer text-sm p-4 w-full static flex md:justify-evenly items-center lg:flex-row flex-col '>
      <div className='footer__item'>
        © 2022 Abdulmajeed Kutaibani. All Rights Reserved.
      </div>
      <div className='footer__item'>
        <div className='footer__contact'>
          Email:{' '}
          <a href='mailto:realabdulmajeedk@gmail.com' className='footer__link'>
            realabdulmajeedk@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
