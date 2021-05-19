import React from "react";
import { Route, withRouter } from "react-router-dom";

import UsersCollectionPage from "../users-collection-page/users-collection-page.component";
import UserPage from "../userpage/userpage.component";

const UsersPage = (props) => {
  const { match } = props;

  return (
    <div className="shop-page">
      <Route exact path={"/users"} component={UsersCollectionPage} />
      <Route path={`${match.path}/:collectionId`} component={UserPage} />
    </div>
  );
};

export default withRouter(UsersPage);
