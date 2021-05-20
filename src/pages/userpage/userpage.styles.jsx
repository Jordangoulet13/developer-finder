import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  margin: 5vh 0;
`;

export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-left: 75px;
`;

export const UserImage = styled.div`
  border: 1px solid black;
  background-size: cover;
  background-position: center;
  background-image: ${({ image }) => `url(${image})`};
  border-radius: 50%;
  width: 20vw;
  height: 20vw;
`;
export const Heading = styled.div`
  display: flex;
  font-size: 30px;
  justify-content: space-between;
  ${(p) =>
    p.name ? "width: 100%; border-bottom: 2px solid black;" : "margin:20px 0;"};

  ${(p) =>
    p.about ? " width:fit-content;border-bottom: 2px solid black;" : null};
`;

export const HeadingItem = styled.div`
  ${(p) =>
    p.info
      ? `color:rgb(65, 72, 169); font-size:20px; font-style:italic; `
      : null};
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
  ${(p) =>
    p.about
      ? `padding:20px; width:100%; text-indent :5em; background-color:white;`
      : null};
`;

export const ContentItem = styled.div`
  font-size: 16px;
  width: 50%;
  ${(p) => (p.about ? `padding:20px; ` : null)};
`;
