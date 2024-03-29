import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { writeUserData, deleteUserData } from "../../firebase/firebase.utils";

import {
  FormContainer,
  ProfileContainer,
  ProfileTitle,
  Header,
} from "./profile-details.styles";

class ProfileDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
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
      id: this.props.currentUser.id,
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

  handleDelete = (id) => {
    console.log(id);
    deleteUserData(id);
    window.alert("Account has been deleted successfully");
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
    console.log(event);
  };

  render() {
    const {
      id,
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
        <Header>
          <ProfileTitle>Profile Details</ProfileTitle>
          <CustomButton onClick={() => this.handleDelete(id)}>
            Delete Account
          </CustomButton>
        </Header>
        <span>Enter your infomation below</span>
        <form onSubmit={this.handleSubmit}>
          <FormContainer>
            <FormInput
              isProfile
              type="text"
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
              label="First Name"
              required
            />

            <FormInput
              isProfile
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
              label="Last Name"
              required
            />
            <FormInput
              isProfile
              type="text"
              name="location"
              value={location}
              onChange={this.handleChange}
              label="City"
            />
            <FormInput
              isProfile
              type="text"
              name="title"
              value={title}
              onChange={this.handleChange}
              label="Current Role i.e Front-end developer"
            />

            <FormInput
              isProfile
              type="text"
              name="skills"
              value={skills}
              onChange={this.handleChange}
              label="Skills"
            />

            <FormInput
              isProfile
              type="text"
              name="portfolioLink"
              value={portfolioLink}
              onChange={this.handleChange}
              label="Portfollio Link"
            />
            <FormInput
              isProfile
              type="text"
              name="githubLink"
              value={githubLink}
              onChange={this.handleChange}
              label="Github Link"
            />
            <FormInput
              isProfile
              type="text"
              name="linkedinLink"
              value={linkedinLink}
              onChange={this.handleChange}
              label="Linkedin Link"
            />
          </FormContainer>
          <FormInput
            type="text"
            name="about"
            value={about}
            onChange={this.handleChange}
            label="Tell us about yourself"
            textArea
          />
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
