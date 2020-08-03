import React from 'react'
import { connect } from 'react-redux'

import { ReactComponent as PlFlag } from '../../assets/poland.svg'
import { ReactComponent as EnFlag } from '../../assets/uk.svg'

import { setLanguagePl, setLanguageEn } from '../../redux/language/language.actions'

import './language-dropdown.style.scss'

const LanguageDropdown = ({ setLanguagePl, setLanguageEn }) => {  
  return (
  <div className='language-dropdown'>
    <PlFlag onClick={setLanguagePl}/>
    <EnFlag onClick={setLanguageEn}/>
  </div>
)}

const mapDispatchToProps = dispatch => ({
  setLanguagePl: () => dispatch(setLanguagePl()),
  setLanguageEn: () => dispatch(setLanguageEn())
})

export default connect(null, mapDispatchToProps)(LanguageDropdown)