import React, { useState } from 'react'

import './contact.style.scss'
import CustomButton from '../../components/custom-button/custom-button'

// import contactImage from '../../assets/contact.jpg'
const imageUrl = 'https://www.choicescreening.com/hubfs/assets/images/billboards/Billboard-conatct-us.jpg'

const ContactPage = () => {
  const [userDataAndMessage, setUserDataAndMessage] = useState({name: '', email: '', message: ''})

  const { name, email, message } = userDataAndMessage

  const handleSubmit = () => {
    alert('Message: ' + message + ' is sent with help of this email adress: ' + email + ', ' + name)
  }

  const handleChange = event => {
    const { value, name } = event.target

    setUserDataAndMessage({...userDataAndMessage, [name]: value})
  }
  
  return (
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
      <div className='middle-content'>
        <div className='left-site-content'>
          <h2 className='header-text'>Dear customer</h2>
          <span>We feel honored that we can answer your questions and help with any unpleasantness, 
          so if you have a problem or question, simply write to us an e-mail on address provided or just call us!</span>
          <h2 className='header-text'>At Choice you always talk to a human!</h2>
          <span>Have questions about background screening? Our entire team receives specialized training regularly to ensure you're receiving the best information possible. From basic questions to complex compliance inquiries, we're here to help!</span>
          <p>Interested in learning more about our services? Our Account Executives take the time to discuss your existing background screening program and help you make smart decisions that best meet your needs.</p>
        </div>
        <div className='vertical-line'></div>
        <div className='right-site-content'>
          <h2 className='header-text'>Corporate Office</h2>
          <span>Adress: Jagodowa 6, 60-179 Poznań</span>
          <span>Phone: 555 978 546</span>
          <div>
            <span>E-mail: </span>
            <a href="mailto:yoza-shop@gmail.com">yoza-shop@gmail.com</a>
          </div>
          <h2 className='header-text'>Direct Contact</h2>
          <span>Phone: 731 986 995</span>
          <div>
            <span>E-mail: </span>
            <a href="mailto:konrad.sobaniec@gmail.com">konrad.sobaniec@gmail.com</a>
          </div>
          <h2 className='header-text'>Contact to the supplier</h2>
          <span>Adress: Żelazna 7, 97-300 Piotrków Trybunalski</span>
          <span>Phone: 801 400 373</span>
          <div>
            <span>E-mail: </span>
            <a href="mailto:dpd-contact@gmail.com">dpd-contact@gmail.com</a>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='message-content'>
          <h2 className='message-content-title'>Contact us today!</h2>
          <input 
            placeholder='Name'
            name='name'
            value={name} 
            type='text'
            onChange={handleChange}
            required
            className='message-input'></input>
          <input 
            placeholder='Email'
            name='email' 
            value={email} 
            type='email'
            onChange={handleChange}
            required
            className='message-input'></input>
          <textarea 
            placeholder='Message...'
            name='message' 
            value={message} 
            type='text'
            onChange={handleChange}
            required
            className='message-textarea'></textarea>
          <CustomButton style={{ marginBottom: 20 }} type='submit'>Send</CustomButton>
        </div>
      </form>
    </div>
  </div>
)}

export default ContactPage