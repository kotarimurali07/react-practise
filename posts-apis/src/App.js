import React from "react";
import Users from "./Components/Users";
import Posts from "./Components/Posts";
import Comments from "./Components/Comments";
import Dashboard from "./Components/Dashboard";
import Userprofile from "./Components/Userprofile";
//import userprofile from './components/Userprofile'
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <userprofile />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/Users" component={Users} />
          <Route exact path="/Posts" component={Posts} />
          <Route exact path="/Comments" component={Comments} />
          <Route
            exact
            path="/users/:name"
            component={(props) => <Userprofile {...props} />}
          />
          {/* <Route exact path="/users" component={UsersList}  /> */}

          {/* <Route exact path="/users/:name/posts/:postId" component={(props) => <PostView {...props} />}  /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
