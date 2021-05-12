import React from "react";

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
} from "./user-card.styles";

// onClick={() => history.push(`${match.path}/${routeName}`)}
const UserCard = ({ ...otherCollectionProps }) => {
  const {
    firstName,
    lastName,
    location,
    image,
    about,
    skills,
    title,
    portfolioLink,
    email,
  } = otherCollectionProps;
  return (
    <UserCardContainer>
      <ProfileImageContainer>
        <PorfileImage image={image} />
      </ProfileImageContainer>
      <InfoContainer>
        <Name>{`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}</Name>
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
