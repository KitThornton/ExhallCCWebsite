import React, {Fragment} from 'react';
import HomeCard from "../components/HomeCard"
import CardGroup from "../components/CardGroup";
import Footer from "../components/Footer"

function Home() {
    return (
        <Fragment>
            <HomeCard />
            <CardGroup />
            <Footer />
        </Fragment>
    );
}

export default Home;
