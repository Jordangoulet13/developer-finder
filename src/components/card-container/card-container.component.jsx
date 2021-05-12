import React from "react";
import UserCard from "../user-card/user-card.component";
import { getUsersCollection } from "../../firebase/firebase.utils";
import { UserPreviewContainer } from "./card-container.styles";

class CardContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ users: getUsersCollection() });
  }

  render() {
    const { users } = this.state;
    return (
      <UserPreviewContainer>
        {users.map((user) => (
          <UserCard key={user.email} user={user} />
        ))}
      </UserPreviewContainer>
    );
  }
}

export default CardContainer;
