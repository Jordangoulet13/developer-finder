import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

const Header = ({ currentUser }) => (
  <HeaderContainer>
    <LogoContainer to="/"></LogoContainer>
    <OptionsContainer>
      {currentUser ? (
        <>
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
          <OptionLink to="/manageProfile">MANAGE PROFILE</OptionLink>
        </>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <OptionLink to="/">CONTACT</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
