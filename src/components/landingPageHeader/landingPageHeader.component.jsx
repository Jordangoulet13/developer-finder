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
} from "./landingPageHeader.styles";

import CustomButton from "../custom-button/custom-button.component";

//Welcome {currentUser ? currentUser.displayName : `Guest`}

const LandingPageHeader = ({ currentUser }) => {
  return (
    <LandingHeadingContainer>
      <CategoryBanner></CategoryBanner>
      <InfoContainer>
        <InfoHeading>Developer Finder</InfoHeading>
        <InfoSub>
          Find quality freelancers and agencies for web development
        </InfoSub>
        <CustomButton inverted isGetStarted>
          Start Here
        </CustomButton>
      </InfoContainer>
    </LandingHeadingContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(LandingPageHeader);
