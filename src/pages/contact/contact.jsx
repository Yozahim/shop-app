import React, { useState } from 'react'

import './contact.style.scss'
import CustomButton from '../../components/custom-button/custom-button'

import { Translate } from 'react-redux-i18n'

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
        <h1 className='image-content-text-header'><Translate value='contact.title'/></h1>
        <h1 className='image-content-text'><Translate value='contact.subtitle'/></h1>
      </div>
    </div>
    <div className='site-content'>
      <div className='middle-content'>
        <div className='left-site-content'>
          <h2 className='header-text'><Translate value='contact.header1'/></h2>
          <span><Translate value='contact.text1'/></span>
          <h2 className='header-text'><Translate value='contact.header2'/></h2>
          <span><Translate value='contact.text2'/></span>
          <p><Translate value='contact.text3'/></p>
        </div>
        <div className='vertical-line'></div>
        <div className='right-site-content'>
          <h2 className='header-text'><Translate value='contact.header3'/></h2>
          <span><Translate value='contact.adress'/>: Jagodowa 6, 60-179 Poznań</span>
          <span><Translate value='contact.phone'/>: 555 978 546</span>
          <div>
            <span>E-mail: </span>
            <a href="mailto:yoza-shop@gmail.com">yoza-shop@gmail.com</a>
          </div>
          <h2 className='header-text'><Translate value='contact.header4'/></h2>
          <span><Translate value='contact.phone'/>: 731 986 995</span>
          <div>
            <span>E-mail: </span>
            <a href="mailto:konrad.sobaniec@gmail.com">konrad.sobaniec@gmail.com</a>
          </div>
          <h2 className='header-text'><Translate value='contact.header5'/></h2>
          <span><Translate value='contact.adress'/>: Żelazna 7, 97-300 Piotrków Trybunalski</span>
          <span><Translate value='contact.phone'/>: 801 400 373</span>
          <div>
            <span>E-mail: </span>
            <a href="mailto:dpd-contact@gmail.com">dpd-contact@gmail.com</a>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='message-content'>
          <h2 className='message-content-title'><Translate value='contact.contactUs'/></h2>
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
          <CustomButton style={{ marginBottom: 20 }} type='submit'><Translate value='contact.send'/></CustomButton>
        </div>
      </form>
    </div>
  </div>
)}

export default ContactPage