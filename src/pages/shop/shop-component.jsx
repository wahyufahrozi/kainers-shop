import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import Loading from "../../components/loading/loading.components";
import CollectionsOverview from "../../components/collections-overview/collections-overview.components";
import CollectionPage from "../../pages/collection/collection-component";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase-db";

const CollectionsOverviewLoading = Loading(CollectionsOverview);
const CollectionPageLoading = Loading(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };
  unsubscribeFromSnapshot = null;
  //to be the snapshot representation of collections array to get from firestore

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    // "collections" name from table on firestore that we create

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      console.log("data collections", collectionsMap);
      this.setState({
        loading: false
      });
    });
  }
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewLoading isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageLoading isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});
export default connect(null, mapDispatchToProps)(ShopPage);
