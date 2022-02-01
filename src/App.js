import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDetails from './components/userDetails';
import UserPosts from './components/userPosts';
import UserNewPost from './components/userNewPost';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <UserDetails></UserDetails>
          </Route>
          <Route path="/userPosts/:id">
            <UserPosts />
          </Route>
          <Route path="/newPost/:id">
            <UserNewPost />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
