import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => (
  <header>
    <div className='container header__container'>
      <h5>Hello I'm</h5>
      <h1>Haija Bintu</h1>
      <h5 className="text-light"> FullStack Developper</h5>
      <CTA />
      <HeaderSocials />
      <div className="me">
        <img src={ME} alt="me" />
      </div>

      <a href="#contact" className='scroll_Down'>Scroll Down</a>
    </div>

  </header>
)

export default Header