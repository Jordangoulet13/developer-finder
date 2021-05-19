import React from "react";
import { useLocation, useHistory, useRouteMatch } from "react-router-dom";
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
//onClick={() => history.push(`${match.url}${linkUrl}`)}
// onClick={() => history.push(`${match.path}/${routeName}`)}
const UserCard = ({ ...otherCollectionProps }) => {
  const {
    id,
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
  const locationUrl = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <UserCardContainer>
      <ProfileImageContainer>
        <PorfileImage
          image={image}
          onClick={() => history.push(`/users/${id}`)}
        />
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
      </ProfileImageContainer>
      <InfoContainer onClick={() => history.push(`/users/${id}`)}>
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
