// So here will be the profile page for the player..
// We'll need a list of all the stuff tat we're gonna wanna display
import React, { Fragment } from 'react';
import { Container, Grid } from "@material-ui/core";
// import purple from '@material-ui/core/colors/purple';
// import { createMuiTheme, makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import {DataGrid,
    // GridApi,
    // GridCellValue,
    // GridColDef
} from "@material-ui/data-grid";
// import CssBaseline from "@material-ui/core/CssBaseline";
import BiAxialLineChart from "../components/BiAxialLineChart";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {batting: "", id: this.props.match.params.id, playerName: ""}
    }

    componentDidMount() {
        this.getBatting().then(r => r);
        this.getPlayerName().then(r => r);
    }

    getPlayerName = async () => {
        try {
            const response = await fetch(`http://localhost:4000/players/details/${this.state.id}`);
            const jsonData = await response.json();

            this.setState({playerName: jsonData.rows[0]["playername"]});

        } catch (err) {
            console.error(err.message);
        }
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
            <Fragment>
                <Grid container spacing={2} style={{ height: 50, padding: "15px" }}>
                    <Grid item xs={12} >
                        {this.state.playerName}
                    </Grid>
                </Grid>
                <Grid container spacing={2} style={{ height: 600, padding: "15px" }}>
                    <Grid item xs={8} >
                        <DataGrid
                            // width={"50%"}
                            getRowId={(r) => r.battingid}
                            rows={Array.from(this.state.batting)}
                            columns={columns}
                            pageSize={40}  />
                    </Grid>
                    <Grid item xs={4}>
                        <BiAxialLineChart rawdata={this.state.batting} />
                    </Grid>
                </Grid>
            </Fragment>
        );
    }
}

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
