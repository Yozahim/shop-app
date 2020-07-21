import React from 'react'
import { connect } from 'react-redux'

import './collection.style.scss'

import { selectCollection } from '../../redux/shop/shop.selector'

import CollectionItem from '../../components/collection-item/collection-item'

const CollectionPage = ({ collection }) => {
  return(
  <div className='category'>
    <h2>COLL PAGE</h2>
  </div>
)}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)