import React, {useEffect} from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineBook} from 'react-icons/ai';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {MdWorkOutline} from 'react-icons/md';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const [currentNav, setCurrentNav] = useState('#');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
      if (section) {
        const { top, bottom } = section.getBoundingClientRect();

        if (top <= window.innerHeight * 0.5 && bottom >= window.innerHeight * 0.5) {
          setCurrentNav(`#${section.id}`);
        } 
      }
    });

    setActiveNav(currentNav);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentNav]);

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#header' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineBook /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdWorkOutline /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  );
};

export default Nav;