import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// Components
import Home from './webpages/Home';
import AboutTheClub from "./webpages/AboutTheClub";
import NavBar from "./components/navbar/Navbar";
import Players from "./webpages/Players";
import Profile from "./webpages/Profile";
import Batting from "./webpages/Batting";
import Bowling from "./webpages/Bowling";
import Awards from "./webpages/Awards";
// import Footer from "./components/Footer"
import PlayerTrophies from "./webpages/PlayerTrophies"

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
            {/*<Footer/>*/}
            {/*</Container>*/}
        </Router>
    </div>
);

export default App;

//"@material-ui/core": "^4.11.4",
//"@material-ui/lab": "^4.0.0-alpha.58",
// "material-ui": "^0.15.0",
// "material-ui-search-bar": "^1.0.0",
