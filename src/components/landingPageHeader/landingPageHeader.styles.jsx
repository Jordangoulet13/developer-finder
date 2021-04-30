import styled, { keyframes } from "styled-components";
import backgroundImg from "../../assets/landing-header.jpg";
import personImg from "../../assets/MrCutout.com - man-with-a-computer-walking-0003-medium.png";

const moveInLeft = keyframes`    0% {
  opacity: 0;
  transform: translate(-10rem);
}

80% {
  transform: translate(1rem);
}

100% {
  opacity: 1;
  transform: translate(0);
}`;

const moveInRight = keyframes`     0% {
opacity: 0;
transform: translate(10rem);
}

80% {
transform: translate(-1rem);
}

100% {
opacity: 1;
transform: translate(0);
}`;

const moveInTop = keyframes`     0% {
  opacity: 0;
  transform: translate(0, -10rem);
  }
  
  
  100% {
  opacity: 1;
  transform: translate(0, 0);
  }`;

export const LandingHeadingContainer = styled.div`
  height: 95vh;
  background-image: linear-gradient(
      to right bottom,
      rgb(36, 40, 172, 0.8),
      rgba(233, 233, 233, 0.8)
    ),
    url(${backgroundImg});
  background-size: cover;
  background-position: top;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  animation: ${moveInLeft} 1s ease-out;
  padding-top: 10%;
  align-items: center;
`;

export const InfoHeading = styled.h1`
  display: block;
  font-size: 4rem;
  font-weight: 400;
  position: relative;
  color: white;
`;
export const InfoSub = styled.p`
  display: block;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  position: relative;
  color: white;
  font-family: "Noto Sans JP";
`;

export const CategoryBanner = styled.p`
  display: block;
  font-size: 1.5rem;
  font-weight: 400;
  animation: ${moveInTop} 1s ease-out;
  text-align: center;
  position: relative;
  top: 0px;
  background-color: white;
  font-family: "Noto Sans JP";
`;
