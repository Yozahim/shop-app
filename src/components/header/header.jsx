import React from "react";
import { Link } from 'react-router-dom'
import "./header.style.scss";
import { ReactComponent as Logo } from '../../assets/logo.svg'

const Header = () => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <Logo className='logo'></Logo>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/shop'>CONTACT</Link>
      <Link className='option' to='/signIn'>SIGN IN</Link>
    </div>
  </div>
)

export default Header