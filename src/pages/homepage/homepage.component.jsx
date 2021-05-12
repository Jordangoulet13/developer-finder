import React from "react";

import LandingPageHeader from "../../components/landingPageHeader/landingPageHeader.component";
import UsersOverview from "../../components/users-overview/users-overview.component";

const HomePage = () => {
  return (
    <>
      <LandingPageHeader></LandingPageHeader>
      <UsersOverview></UsersOverview>
    </>
  );
};

export default HomePage;
