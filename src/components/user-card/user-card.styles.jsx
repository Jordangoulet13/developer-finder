import styled, { css } from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const UserCardContainer = styled.div`
  width: 33%;
  display: flex;
  height: 250px;
  align-items: center;
  position: relative;
  border: 1px solid black;
  margin-bottom: 25px;
  box-sizing: border-box;
`;

export const PorfileImage = styled.div`
  border: 1px solid black;
  background-size: cover;
  background-position: center;
  background-image: ${({ image }) => `url(${image})`};
  border-radius: 50%;
  height: 120px;
  width: 120px;
`;

export const ProfileImageContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
`;

export const Name = styled.span`
  width: 90%;
  margin: 20px 20px 0 20px;
`;

export const Title = styled.span`
  width: 90%;
  margin: 5px 20px 0 20px;
  font-size: 10px;
`;

export const LineBreak = styled.div`
  width: 90%;
  border-bottom: 1px solid rgba(179, 218, 255, 0.5);
  margin: 20px 0 20px 0;
`;

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: auto;
  margin-left: 20px;
  max-height: 50px;
`;

export const Details = styled.span`
  width: 100%;
  padding: 5px;
  font-size: 12px;
`;

export const DetailsHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  ${Details} {
    color: rgb(77, 148, 255);
  }
`;

export const DetailsInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;
