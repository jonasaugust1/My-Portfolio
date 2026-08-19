import './contact.css';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import validator from 'validator';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  const [isValid, setValid] = useState(true);

  const form = useRef();

  const validateEmail = (e) => {
    const email = e.target.value;
    validator.isEmail(email) ? setValid(true) : setValid(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (isValid) {
      emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        'template_z6zzg04',
        form.current,
        import.meta.env.VITE_EMAIL_KEY
      )
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });

      e.target.reset();
      alert(t('message-success'));
    } else {
      alert(t('invalid-email'));
    }
  };

  return (
    <section id="contact">
      <h5>{t('contact-section-title-small')}</h5>
      <h2>{t('contact-section-title')}</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail className='contact__option-icon' />
            <h4>{t('email')}</h4>
            <h5>jonasaugusto99@gmail.com</h5>
            <a href="mailto:jonasaugusto99@gmail.com" aria-label={t('send-email')} target='_blank' rel='noreferrer'>
              {t('send-email')}
            </a>
          </article>

          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon' />
            <h4>{t('whatsapp')}</h4>
            <h5>+55 (11) 97062-3991</h5>
            <a
              href="https://api.whatsapp.com/send?phone=5511970623991"
              aria-label={t('get-in-touch')}
              target='_blank'
              rel='noreferrer'
            >
              {t('get-in-touch')}
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name='name'
            placeholder={t('full-name')}
            required
          />

          <input
            type="email"
            name='email'
            placeholder={t('your-email')}
            onChange={validateEmail}
            required
          />

          {!isValid && <p>{t('invalid-email')}</p>}

          <textarea
            name="message"
            rows="7"
            placeholder={t('your-message')}
            required
          ></textarea>

          <button type='submit' className='btn btn-primary'>
            {t('send-message-btn')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;