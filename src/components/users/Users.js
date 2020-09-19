import React, { Component } from "react";
import UserItem from "./UserItem";

export class Users extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "github user",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/abrolon87",
      },
      {
        id: "2",
        login: "github user",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/abrolon87",
      },
      {
        id: "3",
        login: "github user",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/abrolon87",
      },
    ],
  };

  render() {
    return (
      <div>
        {this.state.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Users;
