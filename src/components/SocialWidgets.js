import React from 'react';
import './socialwidgets.css';
const SocialWidgets = () => {
  return (
    <nav className='social-widgets'>
      <ul>
        <li>
          <a href='#'>
            <i class='fab fa-linkedin-in'></i>
            <span>Linkedin</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <i class='fab fa-github'></i>
            <span>Github</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <i class='fab fa-youtube'></i>
            <span>Youtube</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialWidgets;
