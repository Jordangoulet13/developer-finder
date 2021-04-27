import React from "react";
import { InfoContainer, InfoHeading } from "./infoText.styles";

const InfoText = ({ children, ...props }) => {
  return (
    <InfoContainer>
      <InfoHeading {...props}>{children}</InfoHeading>
    </InfoContainer>
  );
};

export default InfoText;
