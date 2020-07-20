import React from "react";
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import PreviewCollection from "../../components/preview-collection/preview-collection";

import { selectCollections } from '../../redux/shop/shop.selector'

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps}></PreviewCollection>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);
