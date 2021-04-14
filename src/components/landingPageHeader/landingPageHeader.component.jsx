import React from "react";
import { LandingHeadingContainer } from "./landingPageHeader.styles";

import InfoText from "../../components/infoText/infoText.component";
import InfoSubText from "../../components/infoSubText/infoSubText.component";

const SubHeading = () => {
  return (
    <LandingHeadingContainer>
      <InfoText>Developer Finder</InfoText>
      <InfoSubText>Jordan</InfoSubText>
    </LandingHeadingContainer>
  );
};

export default SubHeading;
