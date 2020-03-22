import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import Loading from "../loading/loading.components";
import CollectionsOverview from "../collections-overview/collections-overview.components";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  Loading
)(CollectionsOverview);

export default CollectionsOverviewContainer;
