import styled, { keyframes } from "styled-components";

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

export const InfoHeading = styled.div`
  display: block;
  font-size: 4rem;
  font-weight: 400;
  position: relative;
  top: -20%;
  animation: ${moveInLeft} 1s ease-out;
  text-align: center;
`;
