import styled, { keyframes } from "styled-components";

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
