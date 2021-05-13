import React from "react";
import { Link } from "react-router-dom";
function Presentation() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/users">Go to users list page</Link>
      <br />
      <Link to="/Posts">Go to Posts list page</Link>
      <br />
      <Link to="/Comments">Go to Comments list page</Link>
      <br />
    </div>
  );
}

export default Presentation;
