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

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoHeading = styled.div`
  display: block;
  font-size: 4rem;
  font-weight: 400;
  position: relative;

  animation: ${moveInLeft} 1s ease-out;
  text-align: center;
`;

export const InfoSub = styled.div`
  display: block;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1.75rem;
  animation: ${moveInRight} 1s ease-out;
  text-align: center;
  position: relative;
  text-align: center;
`;
