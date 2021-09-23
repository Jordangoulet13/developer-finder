import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  MobileMenuIcon,
  Menu,
} from "./header.styles";

const Header = ({ currentUser }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <h1>DevFinder.</h1>
      </LogoContainer>
      <MobileMenuIcon onClick={() => setMenuOpen((s) => !s)}>
        <div />
        <div />
        <div />
      </MobileMenuIcon>
      <Menu open={menuOpen}>
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
        <OptionLink
          to="/"
          onClick={() => window.alert("Contact page coming soon :) ")}
        >
          CONTACT
        </OptionLink>
      </Menu>
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
