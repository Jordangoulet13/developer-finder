import React from "react";

import { HomePageContainer, ImageContainer } from "./homepage.styles";
import backgroundImage from "../../assets/pexels-jessica-lewis-583846.jpg";

const HomePage = () => {
  return (
    <div>
      <ImageContainer>
        <img src={backgroundImage} alt="" />
      </ImageContainer>
      <HomePageContainer></HomePageContainer>
    </div>
  );
};

export default HomePage;
