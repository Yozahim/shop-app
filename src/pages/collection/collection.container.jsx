import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector'
import { compose } from 'redux'

import WithSpinner from "../../components/with-spinner/with-spinner";
import CollectionPage from './collection'

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage)

export default CollectionPageContainer
