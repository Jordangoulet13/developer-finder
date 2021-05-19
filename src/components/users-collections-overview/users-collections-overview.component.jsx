import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import UserCard from "../user-card/user-card.component";

import { selectCollectionsForPreview } from "../../redux/usersCollection/userCollection.selectors";
import {
  CollectionsOverviewContainer,
  CollectionsOverviewHeading,
  UsersCollections,
} from "./users-collections-overview.styles";

const UserCollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {/* <CollectionsOverviewHeading>
        Find Your Next Dev.
      </CollectionsOverviewHeading> */}
      <UsersCollections>
        {console.log(collections)}
        {collections.map(({ email, firstName, ...otherCollectionProps }) =>
          firstName ? (
            <UserCard
              key={email}
              email={email}
              firstName={firstName}
              {...otherCollectionProps}
            />
          ) : null
        )}
      </UsersCollections>
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(UserCollectionsOverview);
