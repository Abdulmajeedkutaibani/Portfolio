import React from 'react';
import './socialwidgets.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FaPortrait } from 'react-icons/fa';

const SocialWidgets = () => {
  return (
    <nav className='social-widgets hidden'>
      <ul>
        <li>
          <a
            href='https://www.linkedin.com/in/abdulmajeed-kutaibani-a60477153'
            target='_blank'
          >
            <FaLinkedin className='text-2xl' />
            <span>Linkedin</span>
          </a>
        </li>
        <li>
          <a href='https://github.com/Abdulmajeedkutaibani' target='_blank'>
            <FaGithub className='text-2xl' />
            <span>Github</span>
          </a>
        </li>
        <li>
          <a href='mailto:abodymeo@gmail.com'>
            <HiOutlineMail className='text-2xl' />
            <span>Email</span>
          </a>
        </li>
        <li>
          <a
            href='https://drive.google.com/file/d/1OuEgPdFbvkDiCMsrLYnCcJ0vcIAihuDT/view?usp=sharing'
            target='_blank'
          >
            <FaPortrait className='text-2xl' />
            <span>Resume</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialWidgets;
