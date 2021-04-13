import styled from "styled-components";
import backgroundImg from "../../assets/vancouver-software-development-apps.jpg";
export const SubHeadingContainer = styled.div`
  height: 95vh;
  background-image: linear-gradient(
      to right bottom,
      rgb(36, 40, 172, 0.8),
      rgba(233, 233, 233, 0.8)
    ),
    url(${backgroundImg});
  background-size: cover;
  background-position: top;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`;
