import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { selectUser } from "../../redux/usersCollection/userCollection.selectors";
import UsersOverview from "../../components/users-overview/users-overview.component";

const UserPage = ({ user }) => {
  console.log(user);
  const { firstName, lastName } = user;
  return <div>Hello {firstName}</div>;
};

const mapStateToProps = (state, ownProps) => ({
  user: selectUser(ownProps.match.params.collectionId)(state),
  match: ownProps.match,
});

export default withRouter(connect(mapStateToProps)(UserPage));
