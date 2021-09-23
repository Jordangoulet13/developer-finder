import styled from "styled-components";
import backgroundImg from "../../assets/vancouver-software-development-apps.jpg";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProfileTitle = styled.h2`
  margin: 10px 0;
`;

export const ImageHeadingContainer = styled.div`
  height: 80vh;
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

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1rem;
`;
