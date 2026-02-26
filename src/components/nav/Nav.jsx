import React, { useEffect, useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { MdWorkOutline } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

const Nav = () => {
  const { t } = useTranslation();
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveNav(`#${entry.target.id}`);
          }
        });
      },
      { 
        threshold: 0.5,
        rootMargin: "-10% 0px -40% 0px"
      }
    );

    const sections = document.querySelectorAll('section, header');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav>
      <a href="#" aria-label={t('nav.home')} onClick={() => setActiveNav('#')} className={activeNav === '#' || activeNav === 'header' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" aria-label={t('nav.about')} onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" aria-label={t('nav.experience')} onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineBook /></a>
      <a href="#portfolio" aria-label={t('nav.portfolio')} onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdWorkOutline /></a>
      <a href="#contact" aria-label={t('nav.contact')} onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  );
};

export default Nav;