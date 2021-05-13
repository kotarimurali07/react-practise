import React, { useEffect, useState } from "react";
import axios from "axios";
import Userdetails from "../Userdetails";
//import Users from '../Users'
function Presentation() {
  const [users, setUsers] = useState({});
  useEffect(() => {
    const username = this.props.match.params.name;
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      const usersList = response.data;
      for (let i = 0; i < usersList.length; i++) {
        if (usersList[i].username === username) {
          setUsers(usersList[i]);
        }
      }
    });
  });
  return (
    <div>
      <Userdetails user={this.state.user} />
    </div>
  );
}
export default Presentation;
