import React from 'react'

import { ReactComponent as PlFlag } from '../../assets/poland.svg'
import { ReactComponent as EnFlag } from '../../assets/uk.svg'

import './language-dropdown.style.scss'

const LanguageDropdown = () => {
  const handleClick = () => {
    console.log('heheh')
  }
  
  return (
  <div className='language-dropdown'>
    <PlFlag onClick={handleClick}/>
    <EnFlag onClick={handleClick}/>
  </div>
)}

export default LanguageDropdown