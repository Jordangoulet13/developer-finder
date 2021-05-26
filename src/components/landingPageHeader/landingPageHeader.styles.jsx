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
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 850px) {
    height: 65vh;
    clip-path: polygon(0 0, 100% 0, 100% 45vh, 0 100%);
  }
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
  margin-bottom: 100px;
  @media (max-width: 850px) {
    display: flex;
    align-items: center;
    font-size: 30px;
    margin-bottom: 20px;
  }
`;
export const InfoSub = styled.h2`
  display: block;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  position: relative;
  color: white;
  position: relative;
  @media (max-width: 850px) {
    display: flex;
    align-items: center;
    font-size: 15px;
  }
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

export const CollectionsOverviewHeadingContainer = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 5px solid rgb(132, 137, 186);
  position: relative;
  flex-direction: row-reverse;
  position: absolute;
  bottom: 0;

  /* top: -93px; */
`;

export const CollectionsOverviewHeading = styled.h1`
  display: inline-block;
  margin-right: 20px;
  @media (max-width: 850px) {
    font-size: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  cursor: default;
`;
