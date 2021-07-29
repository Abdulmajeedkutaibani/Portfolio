import React from 'react';

const Footer = () => {
  return (
    <footer class='footer'>
      <div class='footer__item'>
        © 2021 Abdulmajeed Kutaibani. All Rights Reserved.
      </div>
      <div class='footer__item'>
        <div class='footer__contact'>
          Email:{' '}
          <a href='mailto:realmartinzane@gmail.com' class='footer__link'>
            abodymeo@gmail.com
          </a>
        </div>
        <div class='footer__contact'>
          Tel:{' '}
          <a href='tel: +46729726764' class='footer__link'>
            +905527264403
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
