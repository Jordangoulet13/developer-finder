import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { LandingHeadingContainer } from "./landingPageHeader.styles";

import InfoText from "../../components/infoText/infoText.component";

const LandingPageHeader = ({ currentUser }) => {
  return (
    <LandingHeadingContainer>
      <InfoText>Developer Finder</InfoText>
      <InfoText>Welcome</InfoText>
      <InfoText>
        {currentUser ? currentUser.displayName : `Welcome Guest`}
      </InfoText>
    </LandingHeadingContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(LandingPageHeader);
