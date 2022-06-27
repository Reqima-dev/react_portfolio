import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        REQIMA
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Testimonials</a>
        </li>
        <li>
          <a href="#">COntact</a>
        </li>
      </ul>

      <div className="footer__socials">
          <a href="https://www.facebook.com/profile.php?id=100077629830766" target='_blank'> <BsFacebook/></a>
          <a href="https://www.instagram.com/reqima_ad/" target='_blank'> <BsInstagram/></a>
          <a href="https://www.linkedin.com/in/adlou-kondo-2a6966237" target='_blank'> <BsLinkedin/></a>
      </div>

      <div className="footer__copyriright">
        <small>&copy; REQIMA Tutorials. Tous droit réservées</small>
      </div>
    </footer>
  )
}

export default Footer
