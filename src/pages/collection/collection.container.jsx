import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectIsCollectionLoaded } from "../../redux/shop/shop.selector";
import Loading from "../../components/loading/loading.components";
import CollectionPage from "./collection-component";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  Loading
)(CollectionPage);

export default CollectionPageContainer;
