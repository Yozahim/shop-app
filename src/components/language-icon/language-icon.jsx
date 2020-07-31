import React from 'react'
import { connect } from 'react-redux'
import { toggleLanguageCart } from '../../redux/language/language.actions'
import { selectLang } from '../../redux/language/language.selector'
import { createStructuredSelector } from 'reselect'
import { ReactComponent as PlFlag } from "../../assets/poland.svg";
import { ReactComponent as EnFlag } from "../../assets/uk.svg";

import './language-icon.style.scss'

const LanguageIcon = ({ toggleLanguageCart, flagLanguage }) => {
  console.log(flagLanguage)
  console.log(toggleLanguageCart)
  return (
  <div className='language-icon' onClick={toggleLanguageCart}>
    {
      flagLanguage ? <EnFlag></EnFlag> : <PlFlag></PlFlag>
    }
  </div>
)}

const mapDispatchToProps = dispatch => ({
  toggleLanguageCart: () => dispatch(toggleLanguageCart())
})

const mapStateToProps = createStructuredSelector({
  flagLanguage: selectLang
})

export default connect(mapStateToProps, mapDispatchToProps)(LanguageIcon)