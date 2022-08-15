import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Olá me chamo</h5>
        <h1>Jonas Araujo</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />
        
        <div className='me'>
          <img src={ME} alt="Eu" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header