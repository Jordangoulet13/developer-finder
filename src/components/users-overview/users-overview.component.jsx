import React from "react";
import { connect } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/usersCollection/userCollection.actions";

import UsersPreviewContainer from "../users-preview/users-preview.container";
import UsersCollectionContainer from "../users-collections-overview/users-collections-overview.container";

class UsersOverview extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync();
  }

  render() {
    return (
      <>
        {this.props.preview ? (
          <UsersPreviewContainer />
        ) : (
          <UsersCollectionContainer />
        )}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(UsersOverview);
