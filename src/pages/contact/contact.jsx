import React from 'react'

import './contact.style.scss'

// import contactImage from '../../assets/contact.jpg'
const imageUrl = 'https://www.choicescreening.com/hubfs/assets/images/billboards/Billboard-conatct-us.jpg'

const ContactPage = () => (
  <div className='contact-page'>
    <div className='top-image-container'>
      <div 
        className='background-image'
        style={{backgroundImage: `url(${imageUrl})`}}>  
      </div>
      <div className='image-content'>
        <h1 className='image-content-text-header'>contact us</h1>
        <h1 className='image-content-text'>Want to get in touch? We'd love to hear from you. Here's how you can reach us</h1>
      </div>
    </div>
    <div className='site-content'>
      <div className='left-site-content'>
        <h2>Dear customer</h2>
        <span>We feel honored that we can answer your questions and help with any unpleasantness, 
        so if you have a problem or question, simply write to us an e-mail on address provided or just call us!</span>
      </div>
      <div className='right-site-content'>
        <h2>Corporate Office</h2>
        <h2>Direct Contact</h2>
        <h2>Contact to the supplier</h2>
      </div>
    </div>
  </div>
)

export default ContactPage