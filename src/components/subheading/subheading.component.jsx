import React from "react";
import { SubHeadingContainer, BackgroundImage } from "./subheading.styles";
import backgroundImg from "../../assets/pexels-jessica-lewis-583846.jpg";

const SubHeading = () => {
  return (
    <SubHeadingContainer>
      <BackgroundImage src={backgroundImg} />
    </SubHeadingContainer>
  );
};

export default SubHeading;
