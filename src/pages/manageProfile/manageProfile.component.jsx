import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import ImageInput from "../../components/image-input/ImageInput.component";
import ProfileDetails from "../../components/profile-details/profile-details.component";
import {
  ManageProfileContainer,
  ImageHeadingContainer,
} from "./manageProfile.styles";

const ManageProfile = ({ currentUser }) => {
  return (
    <ManageProfileContainer>
      <ImageHeadingContainer>
        <ImageInput></ImageInput>
      </ImageHeadingContainer>
      <ProfileDetails></ProfileDetails>
    </ManageProfileContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(ManageProfile);
