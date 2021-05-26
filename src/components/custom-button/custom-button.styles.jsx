import styled, { css } from "styled-components";

const buttonStyles = css`
  background-color: rgb(132, 137, 186);
  color: white;
  border: none;
  &:hover {
    background-color: rgb(65, 72, 169);
    color: black;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  padding: 0px 10px;
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  } else if (props.isRounded) {
    return isRounded;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  letter-spacing: 1px;
  line-height: 50px;
  margin: 5px;
  font-size: 15px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
  @media (max-width:850px) {
    font-size: 10px;
  }
`;

const isRounded = css`
  border-radius: 10rem;
  width: 20%;
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;
