import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import BiAxialBarChart from "../components/BiAxialBarChart";
import {Grid, withStyles} from "@material-ui/core";
import PageHeader from "../components/PageHeader";
import Container from '@material-ui/core/Container';
import BattingButtonGroup from "../components/BattingButtonGroup";
import Columns from "../components/columns/PlayerDatabase";

class Players extends React.Component {

    constructor() {
        super();
        this.state = {view: "runs", players: [], columns:[], data:[]};
    }

    componentDidMount() {
        this.getPlayers().then(r => r);
        this.getCareerBatting().then(r => r);
        this.setState({columns: Columns})
    }

    getPlayers = async () => {
        try {
            const response = await fetch("http://localhost:4000/players/details");
            const jsonData = await response.json();

            this.setState({players: jsonData.rows});

        } catch (err) {
            console.error(err.message);
        }
    };

    getCareerBatting = async () => {
        try {
            const response = await fetch("http://localhost:4000/batting/CareerRuns/10");
            const jsonData = await response.json();

            this.setState({data: jsonData.rows});

        } catch (err) {
            console.error(err.message);
        }
    };

    getCareerHighScores = async () => {
        try {
            const response = await fetch("http://localhost:4000/batting/CareerHighScores/10");
            const jsonData = await response.json();

            this.setState({data: jsonData.rows});

        } catch (err) {
            console.error(err.message);
        }
    };

    render() {

        const { classes } = this.props;

        return(
            <Container className={classes.root}>
                <PageHeader
                    header = "Player Database"
                    description = "Search via player name, view player caps and link to their profile page."
                />
                <Grid container spacing={2}
                      alignItems="center"
                      justify="center">
                    <Grid item xs={6}>
                        <DataGrid
                            className={classes.table}
                            width={"50%"}
                            getRowId={(r) => r.playerid}
                            rows={this.state.players}
                            columns={this.state.columns}
                            pageSize={40}  />
                    </Grid>
                    <Grid item xs={1}>
                        <BattingButtonGroup />
                    </Grid>
                    <Grid item xs={5}>
                        <h4 style={{ align: "centre" }}>Career Batting</h4>
                        <BiAxialBarChart rawdata={this.state.data} />
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

const styles = theme => ({
    root: {
        // maxWidth: 345,
        padding: 20,
        height: 800
    },
    table: {
        height: 300,
    },
    grid: {
        minHeight: 500,
        width: '100%',
        padding: "10px"
    }
});

export default withStyles(styles)(Players);