import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/adlou-kondo-2a6966237/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Reqima-dev" target="_blank"> <BsGithub/></a>
        <a href="https://www.youtube.com/c/REQIMA/" target="_blank"> <BsYoutube/></a>
    </div>
  )
}

export default HeaderSocials