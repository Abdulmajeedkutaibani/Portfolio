import React from 'react';
import './socialwidgets.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FaPortrait } from 'react-icons/fa';

const SocialWidgets = () => {
  return (
    <nav className='social-widgets'>
      <ul>
        <li>
          <a href='#'>
            <FaLinkedin className='text-2xl' />
            <span>Linkedin</span>
          </a>
        </li>
        <li>
          <a href='#'>
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
          <a href='https://drive.google.com/file/d/19YGpyPiSW6US0WUlCG_1Pygo-vDdg01Z/view?usp=sharing'>
            <FaPortrait className='text-2xl' />
            <span>Resume</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialWidgets;
