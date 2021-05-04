import styled, { keyframes } from "styled-components";
import placeholderImg from "../../assets/user.svg";

const moveInTop = keyframes`     0% {
    opacity: 0;
    transform: translate(0, -10rem);
    }
    
    
    100% {
    opacity: 1;
    transform: translate(0, 0);
    }`;

export const ProfileImage = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 1px solid black;
  background-size: cover;
  background-color: white;
  position: relative;
  top: 50px;
  margin-bottom: 80px;
  animation: ${moveInTop} 1s ease-out;
`;
