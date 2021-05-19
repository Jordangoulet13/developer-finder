import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import {
  InfoContainer,
  InfoHeading,
  LandingHeadingContainer,
  CategoryBanner,
  InfoSub,
  CollectionsOverviewHeading,
  CollectionsOverviewHeadingContainer,
  Container,
} from "./landingPageHeader.styles";

import CustomButton from "../custom-button/custom-button.component";

//Welcome {currentUser ? currentUser.displayName : `Guest`}

const LandingPageHeader = ({ currentUser }) => {
  return (
    <Container>
      <LandingHeadingContainer>
        <CategoryBanner></CategoryBanner>
        <InfoContainer>
          <InfoHeading>Developer Finder</InfoHeading>
          <InfoSub>
            Find quality freelancers and agencies for web development
          </InfoSub>
          <CustomButton inverted isRounded>
            Start Here
          </CustomButton>
        </InfoContainer>
      </LandingHeadingContainer>
      <CollectionsOverviewHeadingContainer>
        <CollectionsOverviewHeading>
          Find Your Next Dev.
        </CollectionsOverviewHeading>
      </CollectionsOverviewHeadingContainer>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(LandingPageHeader);
