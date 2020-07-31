import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect'

import "./header.style.scss";
//styled-components dla testu
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink, LanguageContainer } from './header.style'

import CartDropdown from "../cart-dropdown/cart-dropdown";
import CartIcon from "../cart-icon/cart-icon";
import LanguageIcon from "../language-icon/language-icon"
import LanguageDropdown from "../language-dropdown/language-dropdown"
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { selectCartHidden } from '../../redux/cart/cart.selector'
import { selectLanguageHidden } from '../../redux/language/language.selector'
import { selectCurrentUser } from '../../redux/user/user.selector'
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser, hidden, langHidden }) => {
  // console.log(hidden, langHidden)
  return (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo/>
    </LogoContainer>
    <OptionsContainer>
      <LanguageContainer>
        <LanguageIcon/>
      </LanguageContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/contact">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <OptionLink to="/signIn">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
    {langHidden ? null : <LanguageDropdown/>}
  </HeaderContainer>
)}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  langHidden: selectLanguageHidden
});

export default connect(mapStateToProps)(Header);
