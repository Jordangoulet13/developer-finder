import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/usersCollection/userCollection.actions";

import UsersCollectionsOverviewContainer from "../users-collections-overview/users-collections-overview.container";
import UsersCollectionContainer from "../users-collections-overview/users-collections-overview.container";
import UsersCollectionsOverviewComponent from "../users-collections-overview/users-collections-overview.component";

class UsersOverview extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync();
  }

  render() {
    return (
      <div className="users-overview">
        <UsersCollectionContainer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(UsersOverview);
