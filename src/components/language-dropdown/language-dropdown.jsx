import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'

import { ReactComponent as PlFlag } from '../../assets/poland.svg'
import { ReactComponent as EnFlag } from '../../assets/uk.svg'
// import { supportedLocales } from "../../config/i18n";
import { setLocaleWithFallback } from '../../redux/i18n/i18n.actions'

// import { setLanguagePl, setLanguageEn } from '../../redux/language/language.actions'

import './language-dropdown.style.scss'
import { createStructuredSelector } from 'reselect'
import { selectCurrentLocale } from '../../redux/i18n/i18n.selector'

class LanguageDropdown extends Component { 

  handleLanguageLinkClick = (e,lang) => {
    e.preventDefault();
    this.props.setLocaleWithFallback(lang);
  };

  render () {
    return (
      <div className='language-dropdown'>
        <PlFlag onClick={(e) => {
            this.handleLanguageLinkClick(e,"pl")}}/>
        <EnFlag onClick={(e) => {
            this.handleLanguageLinkClick(e,"en")
          }}/>
      </div>
    )
  } 
}

LanguageDropdown.propTypes = {
  locale: PropTypes.string.isRequired,
  setLocaleWithFallback: PropTypes.func.isRequired
} 

const mapStateToProps = createStructuredSelector({
  locale: selectCurrentLocale
})

const mapDispatchToProps = {
  setLocaleWithFallback
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageDropdown)