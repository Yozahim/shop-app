import React from 'react'
import { connect } from 'react-redux'
import { toggleLanguageCart } from '../../redux/language/language.actions'
import { selectCurrentLocale } from '../../redux/i18n/i18n.selector'
import { createStructuredSelector } from 'reselect'
import { ReactComponent as PlFlag } from "../../assets/poland.svg";
import { ReactComponent as EnFlag } from "../../assets/uk.svg";

import './language-icon.style.scss'

const LanguageIcon = ({ toggleLanguageCart, locale }) => {
  return (
  <div className='language-icon' onClick={toggleLanguageCart}>
    {
      locale === 'en' ? <EnFlag></EnFlag> : <PlFlag></PlFlag>
    }
  </div>
)}

const mapDispatchToProps = dispatch => ({
  toggleLanguageCart: () => dispatch(toggleLanguageCart())
})

const mapStateToProps = createStructuredSelector({
  locale: selectCurrentLocale
})

export default connect(mapStateToProps, mapDispatchToProps)(LanguageIcon)