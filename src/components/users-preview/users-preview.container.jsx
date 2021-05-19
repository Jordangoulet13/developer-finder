import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsCollectionFetching } from "../../redux/usersCollection/userCollection.selectors";
import WithSpinner from "../with-spinner/with-spinner.component";
import UsersPreview from "./users-preview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const UsersCollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(UsersPreview);

export default UsersCollectionsOverviewContainer;
