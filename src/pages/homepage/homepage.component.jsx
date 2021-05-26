import React from "react";

import LandingPageHeader from "../../components/landingPageHeader/landingPageHeader.component";
import UsersOverviewPreview from "../../components/users-collection-preview/users-collection-preview.component";
import { HomePageContainer } from "../homepage/homepage.styles";

const HomePage = () => {
  return (
    <HomePageContainer>
      <LandingPageHeader></LandingPageHeader>
      <UsersOverviewPreview></UsersOverviewPreview>
    </HomePageContainer>
  );
};

export default HomePage;
