import React from 'react';
import './footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Jonas Augusto</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contato">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/jonasaug/" target="_blank" rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/jonasaugust1" target="_blank" rel='noreferrer'><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Jonas Augusto. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;