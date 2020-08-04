import React from "react";
import './menu-item.style.scss'
import { withRouter } from 'react-router-dom'

import { Translate } from 'react-redux-i18n'

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
  <div 
    onClick={() => history.push(`${match.url}${linkUrl}`)}
    className={`${size} menu-item`}>
    <div 
      className='background-image'
      style={{backgroundImage: `url(${imageUrl})`}}>  
    </div>
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle"><Translate value='homepage.shopNow' className='toUpper'/></span>
    </div>
  </div>
);

export default withRouter(MenuItem)