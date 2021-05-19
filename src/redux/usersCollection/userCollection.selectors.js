import { createSelector } from "reselect";

const selectUsers = (state) => state.usersCollection;

export const selectUserCollections = createSelector(
  [selectUsers],
  (user) => user.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectUserCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectUser = (collectionUrlParam) =>
  createSelector([selectUserCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectUsers],
  (user) => user.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectUsers],
  (user) => !!user.collections
);
