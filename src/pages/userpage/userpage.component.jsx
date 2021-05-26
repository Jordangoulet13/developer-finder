import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

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
  LinksContainer,
  UserLink,
} from "./userpage.styles";

const UserPage = ({ user }) => {
  console.log(user);
  const {
    firstName,
    lastName,

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
        <LinksContainer>
          {githubLink ? (
            <UserLink github href={`https://${githubLink}`} target="_blank" />
          ) : (
            ""
          )}
          {linkedinLink ? (
            <UserLink href={`https://${linkedinLink}`} target="_blank" />
          ) : (
            ""
          )}
        </LinksContainer>
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
