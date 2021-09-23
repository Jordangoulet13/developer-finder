import styled from "styled-components";
import backgroundImg from "../../assets/vancouver-software-development-apps.jpg";

export const ManageProfileContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  margin: 0px auto;
  flex-direction: column;
  align-items: center;
`;

export const ImageHeadingContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
      to right bottom,
      rgb(36, 40, 172, 0.8),
      rgba(233, 233, 233, 0.8)
    ),
    url(${backgroundImg});
  background-size: cover;
  background-position: top;
  position: relative;
  align-items: center;
  flex-direction: column;
`;
