import './contact.css';
import {MdEmail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'
import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3w0y6eg', 'template_z6zzg04', form.current, 'v0PBVciYEmTwfVbn1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
      alert("Menssagem enviada!")
  };

  return (
    <section id="contact">
      <h5>Contatar</h5>
      <h2>Envie uma Mensagem</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jonasaugusto99@gmail.com</h5>
            <a href="mailto:jonasaugusto99@gmail.com"  target='_blank' rel='noreferrer'>Envie um email</a>
          </article>

          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+55 (79) 99933-9044</h5>
            <a href="https://api.whatsapp.com/send?phone=5579999339044" target='_blank' rel='noreferrer'>Entre em Contato</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nome Completo' required/>
          <input type="email" name='email' placeholder='Seu Email' required />
          <textarea name="message" rows="7" placeholder='Sua Mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Menssagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact