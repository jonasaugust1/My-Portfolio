import React from 'react'
import CTA from './CTA'
import FS from '../../assets/fullstack.webp'
import HeaderSocial from './HeaderSocial'
import './header.css'
import TypeWriter from 'typewriter-effect'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className='typewriter'>
          <TypeWriter onInit={(typewriter) => {
            typewriter.typeString("Hello, my name is Jonas Augusto")
            .pauseFor(1000)
            .deleteAll()
            .typeString("I am a Fullstack Developer")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Nice to meet you!")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Jonas Augusto (Fullstack Developer)")
            .start()
          }} />
        </div>
        <CTA />
        <HeaderSocial />
        
        <div className='me'>
          <img src={FS} alt="Fullstack" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header