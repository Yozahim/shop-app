import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import "./collection-item.style.scss";
import CustomButton from "../custom-button/custom-button";

import { Link } from "react-router-dom";

import { Translate } from "react-redux-i18n";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <Link to={{pathname: "/itempreview", state: item}} style={{cursor: 'auto'}}>
      <div className="collection-item">
        <div
          className="image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <div className="collection-footer">
          <span className="name">{name}</span>
          <span className="price">${price}</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted>
          <Translate value="shop.addToCart" />
        </CustomButton>
      </div>
    </Link>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
