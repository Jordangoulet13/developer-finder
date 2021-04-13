import React from "react";

import { ReactComponent as Logo } from "../../assets/team-leader.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <LogoContainer to="/"></LogoContainer>
    <OptionsContainer>
      <OptionLink to="/signin">LOGIN</OptionLink>
      <OptionLink to="/">CONTACT</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;
