import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import PreviewCollection from '../preview-collection/preview-collection';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'
import './collections-overview.scss'


const CollectionsOverview = ({ collections }) => (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <PreviewCollection key={id} {...otherCollectionProps}></PreviewCollection>
    ))}
  </div>
  )

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)