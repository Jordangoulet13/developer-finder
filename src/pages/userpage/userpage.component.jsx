import React from "react";
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";

import { selectUser } from "../../redux/usersCollection/userCollection.selectors";
import {
  UserImage,
  UserContainer,
  SideBar,
  UserInfo,
  Heading,
  ContentContainer,
  Location,
  HeadingItem,
  ContentItem,
} from "./userpage.styles";

/*
about: ""
createdAt: t {seconds: 1621307399, nanoseconds: 723000000}
displayName: "llll"
email: "lll@gmail.com"
firstName: "lll"
githubLink: ""
id: "j6ez10udnvvs9rg0tahddvad2yk1"
image: "data:image/jpeg;base64,/9j/4Q9rRXhpZgAATU0AKgAAAA
lastName: "lll"
linkedinLink: ""
location: ""
portfolioLink: ""
routeName: "j6ez10udnvvs9rg0tahddvad2yk1"
skills: ""
title: "" */

const UserPage = ({ user }) => {
  console.log(user);
  const {
    firstName,
    lastName,
    createdAt,
    email,
    githubLink,
    linkedinLink,
    image,
    location,
    skills,
    title,
    about,
  } = user;
  return (
    <UserContainer>
      <SideBar>
        <UserImage image={image} />
      </SideBar>
      <UserInfo>
        <Heading name>
          <HeadingItem>{`${firstName} ${lastName}`}</HeadingItem>
          <HeadingItem info>{title ? title : null}</HeadingItem>
        </Heading>
        <Location>{location}</Location>
        {skills ? (
          <ContentContainer>
            <ContentItem>Skills: </ContentItem>
            <ContentItem>{skills}</ContentItem>
          </ContentContainer>
        ) : (
          `${firstName} doesn't have any skills to share.`
        )}
        {/* {skills ? (
          <>
            <Heading about>Skills: </Heading>
            <ContentContainer about>{skills}</ContentContainer>
          </>
        ) : null} */}
        {about ? (
          <>
            <Heading about>About: </Heading>
            <ContentContainer about>{about}</ContentContainer>
          </>
        ) : null}
        <Location email>Contact: {email}</Location>
      </UserInfo>
    </UserContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  user: selectUser(ownProps.match.params.collectionId)(state),
  match: ownProps.match,
});

export default withRouter(connect(mapStateToProps)(UserPage));
