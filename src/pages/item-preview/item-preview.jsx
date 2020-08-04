import React, { useEffect } from 'react'

import { useHistory } from 'react-router-dom'

import './item-preview.style.scss'
import CustomButton from '../../components/custom-button/custom-button'
import { addItem } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'

import { Translate } from "react-redux-i18n";

const ItemPreview = ({ location, addItem }) => {
  
  const history = useHistory()
  
  const item = location.state

  useEffect(() => {
    console.log(item)
    if (!(!!item)) {
      history.push('/')      
    }
  })

  return(
    <div className='item-preview'>
      <div className='item-container'>
        <h1>{item.name}</h1>
        <img alt={item} src={item.imageUrl} className='image'/>
        <h2>Price: ${item.price}</h2> 
      </div>
      {/* Just for example  */}
      <div className='sizes-container'>
        <table>
          <tbody>
            <tr>
              <th>Rozmiar</th>
              <th>Obwód w klatce</th>
              <th>Dł. rękawa od szyi</th>
              <th>Dł. rękawa od pachy</th>
              <th>Obwód pasa</th>
              <th>Dł całkowita</th>
              <th style={{width: 150}}>Wzrost</th>
            </tr>
            <tr>
              <td>XS</td>
              <td>100</td>
              <td>58</td>
              <td>47</td>
              <td>100</td>
              <td>118</td>
              <td>158-164cm</td>
            </tr>
            <tr>
              <td>S</td>
              <td>102</td>
              <td>58</td>
              <td>48</td>
              <td>102</td>
              <td>120</td>
              <td>164-170cm</td>
            </tr>
            <tr>
              <td>M</td>
              <td>112</td>
              <td>60</td>
              <td>53</td>
              <td>106</td>
              <td>120</td>
              <td>164-170cm</td>
            </tr>
            <tr>
              <td>L</td>
              <td>126</td>
              <td>62</td>
              <td>54</td>
              <td>106</td>
              <td>122</td>
              <td>170-176cm</td>
            </tr>
            <tr>
              <td>XL</td>
              <td>128</td>
              <td>63</td>
              <td>55</td>
              <td>108</td>
              <td>122</td>
              <td>176-186cm</td>
            </tr>
            <tr>
              <td>XXL</td>
              <td>134</td>
              <td>68</td>
              <td>59</td>
              <td>110</td>
              <td>126</td>
              <td>186+cm</td>
            </tr>
          </tbody>
        </table>
        <div className='button'>
          <CustomButton onClick={() => addItem(item)}><Translate value="shop.addToCart" /></CustomButton>
        </div>
      </div>
    </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ItemPreview) 