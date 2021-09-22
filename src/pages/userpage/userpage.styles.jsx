import styled from "styled-components";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/Octicons-mark-github.svg";
import profilePic from "../../assets/1200px-Breezeicons-actions-22-im-user.svg.png";

export const UserContainer = styled.div`
  display: flex;
  margin: 5vh 0;
  @media (max-width: 850px) {
    flex-direction: column;
  }
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 850px) {
    width: 100%;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 75px;
  @media (max-width: 850px) {
    padding: 0;
  }
`;

export const UserImage = styled.div`
  border: 1px solid black;
  background-size: cover;
  background-position: center;
  background-image: ${({ image }) => `url(${image})`};
  border-radius: 50%;
  width: 15vw;
  height: 15vw;
  @media (max-width: 850px) {
    display: flex;
    align-self: center;
    width: 40vw;
    height: 40vw;
    margin-bottom: 50px;
  }
`;
export const Heading = styled.div`
  display: flex;
  font-size: 30px;
  justify-content: space-between;
  ${(p) =>
    p.name ? "width: 100%; border-bottom: 2px solid black;" : "margin:20px 0;"};

  ${(p) =>
    p.about ? " width:fit-content;border-bottom: 2px solid black;" : null};

  @media (max-width: 850px) {
    font-size: 20px;
    width: 100%;
  }
`;

export const HeadingItem = styled.div`
  ${(p) =>
    p.info
      ? `color:rgb(65, 72, 169); font-size:20px; font-style:italic; `
      : null};
  @media (max-width: 850px) {
    font-size: 15px;
  }
`;

export const Location = styled.div`
  font-size: 18px;
  color: rgba(93, 89, 89, 0.51);
  align-self: center;
  margin: 10px;
  margin-bottom: 50px;
  ${(p) => (p.email ? `color:rgba(65, 72, 169,0.5);` : null)};
`;

export const ContentContainer = styled.div`
  display: flex;
  background-color: rgba(93, 89, 89, 0.2);
  border-radius: 5px;
  justify-content: space-evenly;
  width: 80%;
  align-self: center;
  margin-bottom: 40px;
  white-space: pre-wrap;
  overflow-x: wrap;
  padding: 0;
  ${(p) =>
    p.about
      ? `padding:20px; width:100%; text-indent :5em; background-color:white;`
      : null};
  @media (max-width: 850px) {
    width: 100%;
  }
`;

export const ContentItem = styled.div`
  font-size: 16px;
  width: 50%;
  ${(p) => (p.about ? `padding:20px; ` : null)};
`;
export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserLink = styled.a`
  background-size: cover;
  background-position: center;
  background-image: ${(p) =>
    p.github
      ? `url(${github})`
      : p.linkedin
      ? `url(${linkedin})`
      : `url(${profilePic}) `};
  width: 30px;
  height: 30px;
  opacity: 0.5;
  margin: 10px;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
