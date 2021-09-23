import styled, { keyframes } from "styled-components";

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
  background-size: cover;
  background-color: white;
  position: relative;
  top: 50px;
  margin-bottom: 80px;
  animation: ${moveInTop} 1s ease-out;
`;

export const UploadImageInput = styled.input`
  color: transparent;
  display: none;
`;

export const UploadbButton = styled.label`
  min-width: 165px;
  width: fit-content;
  height: 50px;
  letter-spacing: 1px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  margin: 5px;
  font-size: 15px;
  text-transform: uppercase;
  cursor: pointer;
  display: inline-block;
  justify-content: center;
  cursor: pointer;
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const GroupContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
