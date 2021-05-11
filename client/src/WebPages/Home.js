// import {Container} from 'react-bootstrap';
import React, {Fragment} from 'react';
import { Container } from "@material-ui/core";
import Image from '../images/ExhallCC1.png'; // Import using relative path
import HomeCard from "../components/HomeCard"
import CardGroup from "../components/CardGroup";

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        height: 400
    }
};

function Home() {
    return (
        <Fragment>
            {/*<Container>*/}
                <HomeCard />
                <CardGroup />
            {/*</Container>*/}
        </Fragment>
    );
}

export default Home;
