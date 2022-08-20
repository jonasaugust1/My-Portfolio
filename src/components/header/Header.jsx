import React from 'react'
import CTA from './CTA'
import FS from '../../assets/fullstack.png'
import HeaderSocial from './HeaderSocial'
import './header.css'
import TypeWriter from 'typewriter-effect'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className='typewriter'>
          <TypeWriter onInit={(typewriter) => {
            typewriter.typeString("Olá, me chamo Jonas Augusto")
            .pauseFor(2000)
            .deleteAll()
            .typeString("Fullstack Developer")
            .pauseFor(2000)
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