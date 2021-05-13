import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
function Presentation() {
  const [users, setusers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response);
        setusers(response.data);
        // console.log(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>sno</TableCell>
              <TableCell>name</TableCell>
              <TableCell>username</TableCell>
              <TableCell>email</TableCell>
              <TableCell>address</TableCell>
              <TableCell>phone</TableCell>
              <TableCell>website</TableCell>
              <TableCell>company</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow>
                <TableCell>{user.id}</TableCell>
                <TableCell>
                  <Link to={"/users/" + user.username}>{user.username}</Link>
                </TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  {[
                    user.address.street +
                      "," +
                      user.address.suite +
                      "," +
                      user.address.city +
                      "," +
                      user.address.zipcode
                  ]}
                </TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.website}</TableCell>
                <TableCell>
                  {[
                    user.company.name,
                    +"," + user.company.catchPhrase + "," + user.company.bs
                  ]}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <ul>
        {
users.map((post)=>(
  <li>{post.id}</li>
))
        }
      </ul> */}
    </div>
  );
}

export default Presentation;
