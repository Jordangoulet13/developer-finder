import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
  @media (max-width: 850px) {
    width: 100%;
    flex-direction: column;
  }
`;
