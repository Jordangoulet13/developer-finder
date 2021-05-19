import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/Octicons-mark-github.svg";

const pulsate = keyframes`
  0% {
    transform: scale(1);
    box-shadow: none;
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.25);
  }
  100% {
    transform: scale(1);
    box-shadow: none;
  }`;

export const UserCardContainer = styled.div`
  width: 50%;
  display: flex;
  height: 225px;
  align-items: flex-start;
  position: relative;
  border-radius: 5px;
  box-sizing: border-box;

  &:hover {
    animation: ${pulsate} 1s;
    opacity: 0.8;
  }
`;

export const PorfileImage = styled.div`
  border: 1px solid black;
  background-size: cover;
  background-position: center;
  background-image: ${({ image }) => `url(${image})`};
  border-radius: 50%;
  height: 120px;
  width: 120px;
  cursor: pointer;
`;

export const LinksContainer = styled.div`
  display: flex;
`;

export const UserLink = styled.a`
  background-size: cover;
  background-position: center;
  background-image: ${(p) =>
    p.github ? `url(${github})` : `url(${linkedin})`};
  width: 20px;
  height: 20px;
  opacity: 0.5;
  margin: 10px;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const ProfileImageContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
  margin: 15px;
  display: flex;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: nowrap;
  cursor: pointer;
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
`;

export const Details = styled.div`
  display: inline-block;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  padding: 3px;
  font-size: 10px;
  overflow: hidden;
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
