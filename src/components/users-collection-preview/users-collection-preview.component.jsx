import React from "react";
import { withRouter } from "react-router-dom";

import UsersOverview from "../users-overview/users-overview.component";
import {
  UsersPreviewContainer,
  ViewAllButton,
} from "./users-collection-preview.styles";

const UsersCollectionPreview = ({ history }) => {
  return (
    <UsersPreviewContainer>
      <UsersOverview preview />
      <ViewAllButton
        onClick={() => {
          history.push("/users");
        }}
      >
        View All
      </ViewAllButton>
    </UsersPreviewContainer>
  );
};

export default withRouter(UsersCollectionPreview);
