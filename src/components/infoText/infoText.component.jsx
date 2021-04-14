import React from "react";
import { InfoHeading } from "./infoText.styles";

const InfoText = ({ children, ...props }) => {
  return <InfoHeading {...props}>{children}</InfoHeading>;
};

export default InfoText;
