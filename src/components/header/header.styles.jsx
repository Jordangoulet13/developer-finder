import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";

export const HeaderContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
  border-bottom: 2px solid whitesmoke;
  @media (max-width: 850px) {
    padding-bottom: 10px;
  }
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
  display: flex;
  align-items: center;
  @media (max-width: 850px) {
    width: 50px;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 850px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  @media (max-width: 850px) {
    padding: 10px;
    font-size: 10px;
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;
  margin: auto 0 auto auto;
  width: 40px;
  min-width: 25px;
  padding: 5px;
  > div {
    height: 3px;
    background: black;
    margin: 5px 0;
    width: 100%;
  }
  @media (max-width: 850px) {
    display: block;
  }
`;

export const Menu = styled.nav`
  display: flex;
  background: none;
  left: initial;
  top: initial;
  width: initial;
  border-bottom: none;
  margin: auto 0 auto auto;
  position: relative;
  background-color: white;

  @media (max-width: 850px) {
    display: ${(p) => (p.open ? "flex" : "none")};
    position: absolute;
    width: 100%;
    top: 50px;
    left: 0;
    padding: 8px;
    box-sizing: border-box;
    border-bottom: 3px solid whitesmoke;
    background-color: white;
    z-index: 1;
    justify-content: center;
  }
`;
