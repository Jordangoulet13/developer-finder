import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { writeUserData } from "../../firebase/firebase.utils";

import {
  FormContainer,
  ProfileContainer,
  ProfileTitle,
} from "./profile-details.styles";

class ProfileDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      location: "",
      title: "",
      about: "",
      skills: "",
      portfolioLink: "",
      githubLink: "",
      linkedinLink: "",
    };
  }
  componentDidMount() {
    this.setState({
      firstName: this.props.currentUser.firstName,
      lastName: this.props.currentUser.lastName,
      location: this.props.currentUser.location,
      title: this.props.currentUser.title,
      about: this.props.currentUser.about,
      skills: this.props.currentUser.skills,
      portfolioLink: this.props.currentUser.portfolioLink,
      githubLink: this.props.currentUser.githubLink,
      linkedinLink: this.props.currentUser.linkedinLink,
    });
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
      githubLink,
      linkedinLink,
    } = this.state;

    try {
      writeUserData(
        this.props.currentUser.id,
        firstName,
        lastName,
        location,
        title,
        about,
        skills,
        portfolioLink,
        githubLink,
        linkedinLink
      );
      alert("Infomation Successfully Updated.");
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
    console.log(event);
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
      githubLink,
      linkedinLink,
    } = this.state;

    return (
      <ProfileContainer>
        {console.log(">>>", this.props.currentUser)}
        <ProfileTitle>Profile Details</ProfileTitle>
        <span>Enter your infomation below</span>

        <form onSubmit={this.handleSubmit}>
          <FormContainer>
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
              label="Portfollio Link"
            />
            <FormInput
              type="text"
              name="githubLink"
              value={githubLink}
              onChange={this.handleChange}
              label="Github Link"
            />
            <FormInput
              type="text"
              name="linkedinLink"
              value={linkedinLink}
              onChange={this.handleChange}
              label="Linkedin Link"
            />
            <FormInput
              type="text"
              name="about"
              value={about}
              onChange={this.handleChange}
              label="Tell us about yourself"
              textArea
            />
          </FormContainer>
          <CustomButton type="submit">Update</CustomButton>
        </form>
      </ProfileContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(ProfileDetails);
