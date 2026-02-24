import React from 'react';
import './footer.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <a href="#" className='footer__logo'>Jonas Augusto</a>

      <ul className='permalinks'>
        <li><a href="#">{t('footer-home')}</a></li>
        <li><a href="#about">{t('footer-about')}</a></li>
        <li><a href="#experience">{t('footer-experience')}</a></li>
        <li><a href="#portfolio">{t('footer-portfolio')}</a></li>
        <li><a href="#contact">{t('footer-contact')}</a></li>
      </ul>

      <div className='footer__socials'>
        <a 
          href="https://www.linkedin.com/in/jonasaug/" 
          target="_blank" 
          rel='noreferrer'
          aria-label="LinkedIn"
        >
          <BsLinkedin />
        </a>

        <a 
          href="https://github.com/jonasaugust1" 
          target="_blank" 
          rel='noreferrer'
          aria-label="GitHub"
        >
          <BsGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; {new Date().getFullYear()} Jonas Augusto. {t('footer-rights')}
        </small>
      </div>
    </footer>
  );
};

export default Footer;