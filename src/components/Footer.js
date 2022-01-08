import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__item'>
        © 2022 Abdulmajeed Kutaibani. All Rights Reserved.
      </div>
      <div className='footer__item'>
        <div className='footer__contact'>
          Email:{' '}
          <a href='mailto:abodymeo@gmail.com' className='footer__link'>
            abodymeo@gmail.com
          </a>
        </div>
        <div className='footer__contact'>
          Tel:{' '}
          <a href='tel: +905527264403' className='footer__link'>
            +905527264403
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
