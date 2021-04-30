import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { writeUserData } from "../../firebase/firebase.utils";

import { ProfileContainer, ProfileTitle } from "./profile-details.styles";

class ProfileDetails extends React.Component {
  constructor(currentUser) {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      location: "",
      title: "",
      about: "",
      skills: "",
      portfolioLink: "",
      currentUser: currentUser,
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const {
      firstName,
      lastName,
      location,
      title,
      about,
      skills,
      portfolioLink,
      currentUser,
    } = this.state;

    try {
      writeUserData(
        currentUser.currentUser.uid,
        firstName,
        lastName,
        location,
        title,
        about,
        skills,
        portfolioLink
      );
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const {
      firstName,
      lastName,
      location,
      title,
      about,
      skills,
      portfolioLink,
      currentUser,
    } = this.state;

    console.log(currentUser.currentUser);
    return (
      <ProfileContainer>
        <ProfileTitle>Profile Details</ProfileTitle>
        <span>Enter your infomation below</span>
        <form className="profile-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
            label="First Name"
            required
          />
          <FormInput
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.handleChange}
            label="Last Name"
            required
          />
          <FormInput
            type="text"
            name="location"
            value={location}
            onChange={this.handleChange}
            label="Location"
          />
          <FormInput
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
            label="Title i.e Front-end developer"
          />
          <FormInput
            type="text"
            name="about"
            value={about}
            onChange={this.handleChange}
            label="Tell us about yourself"
          />
          <FormInput
            type="text"
            name="skills"
            value={skills}
            onChange={this.handleChange}
            label="Skills"
          />
          <FormInput
            type="text"
            name="portfolioLink"
            value={portfolioLink}
            onChange={this.handleChange}
            label="PortfolioLink"
          />
          <CustomButton type="submit">Update Infomation</CustomButton>
        </form>
      </ProfileContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(ProfileDetails);
