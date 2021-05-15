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

const UserCollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    <CollectionsOverviewHeading>Find Your Next Dev.</CollectionsOverviewHeading>
    <UsersCollections>
      {console.log(collections)}
      {collections.map(({ email, image, ...otherCollectionProps }) =>
        image ? (
          <UserCard
            key={email}
            image={image}
            email={email}
            {...otherCollectionProps}
          />
        ) : null
      )}
    </UsersCollections>
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(UserCollectionsOverview);
