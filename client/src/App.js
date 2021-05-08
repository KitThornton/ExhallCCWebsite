import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Home from './WebPages/Home';
import AboutTheClub from "./WebPages/AboutTheClub";
import NavBar from "./components/Navbar";
import Players from "./WebPages/Players";
import Profile from "./WebPages/Profile";
import { Container } from "@material-ui/core";

const App = () => (
      <div style={{ padding: 0 }} >
          <Router>
              <Container>
                  <NavBar/>
                  <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/Profile" component={Profile} />
                      <Route exact path="/Home" component={Home} />
                      <Route exact path="/Players" component={Players} />
                      <Route exact path="/AboutTheClub" component={AboutTheClub} />
                      <Route exact path="/Profile/:id" component={Profile} />
                  </Switch>
              </Container>
          </Router>
      </div>
);

export default App;
