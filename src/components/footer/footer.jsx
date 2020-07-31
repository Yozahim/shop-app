import React from "react";

import { IoLogoFacebook, IoLogoTwitch, IoLogoTwitter } from 'react-icons/io'

import './footer.style.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='icons-container'>
        <a href='https://www.twitter.com/' rel="noopener noreferrer" target="_blank"><IoLogoTwitter className='icon' style={{color: '#1DA1F2'}}></IoLogoTwitter></a> 
        <a href='https://www.facebook.com/' rel="noopener noreferrer" target="_blank"><IoLogoFacebook className='icon' style={{color: '#3b5998'}}></IoLogoFacebook></a>
        <a href='https://www.twitch.tv/' rel="noopener noreferrer" target="_blank"><IoLogoTwitch className='icon' style={{color: '#6441A4'}}></IoLogoTwitch></a>
      </div>  
    </div>)
};

export default Footer;
