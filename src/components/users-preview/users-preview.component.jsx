import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import UserCard from "../user-card/user-card.component";

import { selectCollectionsForPreview } from "../../redux/usersCollection/userCollection.selectors";
import {
  CollectionsOverviewContainer,
  UsersCollections,
} from "./users-preview.styles.jsx";
{
  /* .filter((colletion, idx) => idx < 4). */
}

const sortTimeAndFilter = (collections) => {
  collections.map((collection) => collection.createdAt);
};

const UsersPreview = ({ collections }) => {
  const sortedCollections = collections
    .filter((collection) => collection)
    .sort(function (a, b) {
      var keyA = new Date(a.createdAt.seconds),
        keyB = new Date(b.createdAt.seconds);
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    })
    .filter((collection, idx) => collection.firstName)
    .reverse();

  return (
    <CollectionsOverviewContainer>
      <UsersCollections>
        {console.log(
          sortedCollections.filter((collection, idx) => collection.firstName)
        )}
        {sortedCollections
          .filter((collection, idx) => idx < 4 && collection.firstName)
          .map(
            ({ email, image, firstName, createdAt, ...otherCollectionProps }) =>
              firstName ? (
                <UserCard
                  key={email}
                  image={image}
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

export default connect(mapStateToProps)(UsersPreview);
