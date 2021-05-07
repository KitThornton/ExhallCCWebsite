import { Container } from "@material-ui/core";
import purple from '@material-ui/core/colors/purple';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

const color = purple[500];

const themePurple = createMuiTheme({
    palette: {
        background: {
            default: color
        },
    }
});

function Home(props) {

    const id =  props.match.params.id;

    return (
        // <MuiThemeProvider theme={themePurple}>
        //     <CssBaseline />
            <Container bgcolor="text.secondary">
                Profile {id}
            </Container>
        // </MuiThemeProvider>
    );
}

export default Home;
