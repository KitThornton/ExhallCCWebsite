import PageHeader from "../components/PageHeader";
import Container from '@material-ui/core/Container';
import PlayerSearchBar from '../components/PlayerSearchBar'

function AboutTheClub() {
    return (
        <Container>
            <PageHeader header="About The Club" description="Some more info about the club in general and stuff." />
            {/*<PlayerSearchBar/>*/}
            <br/>
        </Container>
    );
}

export default AboutTheClub;
