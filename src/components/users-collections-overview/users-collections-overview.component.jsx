import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import UserCard from "../user-card/user-card.component";

import { selectCollectionsForPreview } from "../../redux/usersCollection/userCollection.selectors";
import { CollectionsOverviewContainer } from "./users-collections-overview.styles";

const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
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
  </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
