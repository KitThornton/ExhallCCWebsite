import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// Components
import Home from './WebPages/Home';
import AboutTheClub from "./WebPages/AboutTheClub";
import NavBar from "./components/Navbar";
import Players from "./WebPages/Players";
import Profile from "./WebPages/Profile";
import Batting from "./WebPages/Batting";
import Bowling from "./WebPages/Bowling";
import Awards from "./WebPages/Awards";
import Footer from "./components/Footer"
import PlayerTrophies from "./WebPages/PlayerTrophies"

const App = () => (
    <div style={{padding: 0}}>
        <Router>
            {/*<Container>*/}
            <NavBar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Profile" component={Profile}/>
                <Route exact path="/Home" component={Home}/>
                <Route exact path="/Players" component={Players}/>
                <Route exact path="/AboutTheClub" component={AboutTheClub}/>
                <Route exact path="/Profile/:id" component={Profile}/>
                <Route exact path="/Batting/:team" component={Batting}/>
                <Route exact path="/Bowling/:team" component={Bowling}/>
                <Route exact path="/Awards" component={Awards}/>
                <Route exact path="/Trophies/Players" component={PlayerTrophies}/>
            </Switch>
            <Footer/>
            {/*</Container>*/}
        </Router>
    </div>
);

export default App;
