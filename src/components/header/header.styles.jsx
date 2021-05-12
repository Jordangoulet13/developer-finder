import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";

export const HeaderContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoImage = styled.div`
  background-image: url(${Logo});
  background-size: cover;
  height: 20px;
  width: 20px;
`;

export const LogoContainer = styled(Link)`
  height: auto;
  width: 180px;
  padding: 25px;
  display: flex;
  align-items: center;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
