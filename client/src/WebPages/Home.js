// import {Container} from 'react-bootstrap';
import React, {Fragment} from 'react';
import { Container } from "@material-ui/core";
import Image from '../images/ExhallCC1.png'; // Import using relative path
import HomeCard from "../components/HomeCard"

const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        height: 384
    }
};

function Home() {
    return (
        <Fragment>
            <Container>
                <HomeCard />
            </Container>
        </Fragment>
    );
}

export default Home;
