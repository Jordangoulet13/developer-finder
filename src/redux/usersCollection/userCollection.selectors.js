import { createSelector } from "reselect";

const selectUsers = (state) => state.usersCollection;

export const selectCollections = createSelector(
  [selectUsers],
  (user) => user.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
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
