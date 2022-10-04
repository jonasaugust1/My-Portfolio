import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {RiInstagramFill} from 'react-icons/ri';

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/jonasaug/" target="_blank" rel='noreferrer'><BsLinkedin /></a>
      <a href="https://github.com/jonasaugust1" target="_blank" rel='noreferrer'><BsGithub /></a>
      <a href="https://www.instagram.com/jonasaugusto_/" target="_blank" rel='noreferrer'><RiInstagramFill /></a>
    </div>
  );
};

export default HeaderSocial;