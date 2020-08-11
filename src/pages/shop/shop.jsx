import React, { Component, Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

// import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
// import CollectionPageContainer from "../collection/collection.container";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import Spinner from "../../components/with-spinner/spinner";
import ErrorBoundary from "../../components/error-boundary/error-boundary";

const CollectionsOverviewContainer = lazy(() =>
  import("../../components/collections-overview/collections-overview.container")
);
const CollectionPageContainer = lazy(() =>
  import("../collection/collection.container")
);

class ShopPage extends Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route
              exact
              path={`${match.path}`}
              component={CollectionsOverviewContainer}
            ></Route>
            <Route
              path={`${match.path}/:collectionId`}
              component={CollectionPageContainer}
            ></Route>
          </Suspense>
        </ErrorBoundary>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
