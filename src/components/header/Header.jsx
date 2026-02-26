import React from 'react';
import CTA from './CTA';
import FS from '../../assets/fullstack.webp';
import HeaderSocial from './HeaderSocial';
import './header.css';
import TypeWriter from 'typewriter-effect';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../language-switcher/LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <LanguageSwitcher />
      <section id='header' className="container header__container">
        <div className='typewriter'>
          <TypeWriter onInit={(typewriter) => {
            typewriter
              .typeString(t("greeting-intro"))
              .pauseFor(900)
              .deleteAll()
              .typeString(t("greeting-info"))
              .pauseFor(1000)
              .deleteAll()
              .typeString(t("greeting-info2"))
              .pauseFor(1000)
              .deleteAll()
              .typeString(t("greeting-conclusion"))
              .start();
          }} />
        </div>
        <CTA />
        <HeaderSocial />

        <div className='me'>
          <img src={FS} alt="Fullstack" />
        </div>

        <a href="#contact" aria-label={t("nav.contact")} className='scroll__down'>{t("scroll-down")}</a>
      </section>
    </header>
  );
};

export default Header;