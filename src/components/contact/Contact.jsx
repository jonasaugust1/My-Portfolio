import './contact.css';
import {MdEmail} from 'react-icons/md';
import {IoLogoWhatsapp} from 'react-icons/io';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import validator from 'validator';

const Contact = () => {
  const [isValid, setValid] = useState(true);

  const form = useRef();

  const validateEmail = (e) => {
    const email = e.target.value;  
    validator.isEmail(email) ? setValid(true) : setValid(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if(isValid){
      emailjs.sendForm(
        process.env.EMAIL_SERVICE_ID, 
        'template_z6zzg04', 
        form.current, 
        process.env.EMAIL_KEY
      )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

      e.target.reset();
      alert('Message sent with success.');
    }else{
      alert('Please enter a valid email address.');
    }
  };

  return (
    <section id="contact">
      <h5>Contact</h5>
      <h2>Send a Message</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jonasaugusto99@gmail.com</h5>
            <a href="mailto:jonasaugusto99@gmail.com"  target='_blank' rel='noreferrer'>Send an email</a>
          </article>

          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+55 (11) 97062-3991</h5>
            <a href="https://api.whatsapp.com/send?phone=5511970623991" target='_blank' rel='noreferrer'>Get in touch</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' onChange={validateEmail} required />
          {!isValid && <p >Please enter a valid email address.</p>}
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send a message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;