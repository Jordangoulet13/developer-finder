import React from "react";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/">LOGIN</OptionLink>
      <OptionLink to="/">CONTACT</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;
