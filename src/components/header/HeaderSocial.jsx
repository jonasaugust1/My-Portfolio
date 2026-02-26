import React from 'react';
import {BsLinkedin, BsGithub } from 'react-icons/bs';

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/jonasaug/" aria-label='Linkedin' target="_blank" rel='noreferrer'><BsLinkedin /></a>
      <a href="https://github.com/jonasaugust1" aria-label='Github' target="_blank" rel='noreferrer'><BsGithub /></a>
    </div>
  );
};

export default HeaderSocial;