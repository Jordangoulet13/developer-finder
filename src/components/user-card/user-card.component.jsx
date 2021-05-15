import React from "react";
import { Link } from "react-router-dom";

import {
  UserCardContainer,
  PorfileImage,
  ProfileImageContainer,
  Name,
  Title,
  InfoContainer,
  LineBreak,
  DetailsContainer,
  DetailsHeadingContainer,
  DetailsInfoContainer,
  Details,
  LinksContainer,
  UserLink,
} from "./user-card.styles";

// onClick={() => history.push(`${match.path}/${routeName}`)}
const UserCard = ({ ...otherCollectionProps }) => {
  const {
    firstName,
    lastName,
    location,
    image,
    skills,
    title,
    portfolioLink,
    email,
    githubLink,
    linkedinLink,
  } = otherCollectionProps;
  console.log(otherCollectionProps);
  return (
    <UserCardContainer>
      <ProfileImageContainer>
        <PorfileImage image={image} />
        <LinksContainer>
          {githubLink ? <UserLink github /> : ""}
          {linkedinLink ? <UserLink /> : ""}
        </LinksContainer>
      </ProfileImageContainer>
      <InfoContainer>
        <Name>{`${firstName ? firstName.toUpperCase() : "N/A"} ${
          lastName ? lastName.toUpperCase() : "N/A"
        }`}</Name>
        <Title>{title}</Title>
        <LineBreak />
        <DetailsContainer>
          <DetailsHeadingContainer>
            <Details>Skills</Details>
            <Details>Email</Details>
            <Details>Location</Details>
            <Details>PortfolioLink</Details>
          </DetailsHeadingContainer>
          <DetailsInfoContainer>
            <Details>{skills ? skills : "N/A"}</Details>
            <Details>{email ? email : "N/A"}</Details>
            <Details>{location ? location : "N/A"}</Details>
            <Details>{portfolioLink ? portfolioLink : "N/A"}</Details>
          </DetailsInfoContainer>
        </DetailsContainer>
      </InfoContainer>
    </UserCardContainer>
  );
};

export default UserCard;
