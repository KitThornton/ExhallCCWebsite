import { Container } from "@material-ui/core";

function Home(props) {
    return (
        <Container>
            Profile {props.id}
        </Container>
    );
}

export default Home;
