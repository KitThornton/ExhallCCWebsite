// So here will be the profile page for the player..
// We'll need a list of all the stuff tat we're gonna wanna display
import React from 'react';
import { Container } from "@material-ui/core";
import purple from '@material-ui/core/colors/purple';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {DataGrid, GridApi, GridCellValue, GridColDef} from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {batting: "", id: this.props.match.params.id}
    }

    componentDidMount() {
        this.getBatting().then(r => r);
    }

    getBatting = async () => {
        try {
            const response = await fetch(`http://localhost:4000/batting/seasons/${this.state.id}`);
            const jsonData = await response.json();

            this.setState({batting: jsonData.rows}, () => console.log(jsonData));

        } catch (err) {
            console.error(err.message);
        }
    };

    render() {
        return (
            // <MuiThemeProvider theme={themePurple}>
            //     <CssBaseline />
            <Container bgcolor="text.secondary">
                Profile {this.state.id}

                <div style={{ height: 600, width: '100%', padding: "10px" }}>
                    <DataGrid
                        // width={"50%"}
                        getRowId={(r) => r.battingid}
                        rows={Array.from(this.state.batting)}
                        columns={columns}
                        pageSize={40}  />
                </div>
            </Container>
            // </MuiThemeProvider>
        );
    }
}

const color = purple[500];

const themePurple = createMuiTheme({
    palette: {
        background: {
            default: color
        },
    }
});

const columns = [
    { field: 'battingid', headerName: 'ID', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    { field: 'year', headerName: 'Year',  flex: 1, headerAlign: 'center', align: "center"},
    // { field: 'playername', headerName: 'Player Name', type: 'text', flex: 1, headerAlign: 'center', align: "center"},
    // { field: 'playerid', headerName: 'playerid', flex: 1, headerAlign: 'center', align: "center"},
    { field: 'matches', headerName: 'Matches', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    { field: 'runs', headerName: 'Runs', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    { field: 'average', headerName: 'Average', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    { field: 'fifties', headerName: 'Fifties', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    { field: 'hundreds', headerName: 'Hundreds', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    { field: 'highscore', headerName: 'Highscore', type: 'number', flex: 1, headerAlign: 'center', align: "center"}
];


export default Profile;
