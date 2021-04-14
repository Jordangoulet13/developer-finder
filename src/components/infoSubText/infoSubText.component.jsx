import React from "react";
import { InfoSub } from "./infoSubText.styles";

const InfoText = ({ children, ...props }) => {
  return <InfoSub {...props}>{children}</InfoSub>;
};

export default InfoText;
