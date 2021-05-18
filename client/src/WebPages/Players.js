import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import {Grid, withStyles } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import BiAxialBarChart from "../components/graphs/BiAxialBarChart";
import BattingButtonGroup from "../components/BattingButtonGroup";
import Columns from "../components/columns/PlayerDatabase";
import PageHeader from "../components/PageHeader";
import BowlingButtonGroup from "../components/BowlingButtonGroup";

class Players extends React.Component {

    constructor() {
        super();
        this.state = {view: "runs", players: [], columns:[], data:[], bowling: []};
    }

    componentDidMount() {
        this.getPlayers().then(r => r);
        this.getCareerBatting().then(r => r);
        this.getCareerWickets().then(r => r);
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

    getCareerWickets = async () => {
      try {

          const response = await fetch("http://localhost:4000/bowling/CareerWickets/10");
          const jsonData = await response.json();

          this.setState({bowling: jsonData.rows});

      }  catch (err) {
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
                <Grid container spacing={5}
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
                    <Grid item xs={6} className={classes.table}>

                    </Grid>

                    {/*    New row    */}
                    <Grid item xs={4}>
                        <div className={classes.div} >
                            <BattingButtonGroup />
                        </div>
                    {/*</Grid>*/}
                    {/*<Grid item xs={5}>*/}
                    {/*    <h4 style={{ align: "centre" }}>Career Batting</h4>*/}
                        <BiAxialBarChart rawdata={this.state.data} yaxis={"runs"} />
                    </Grid>
                    <Grid item xs={4}>
                        <div className={classes.div} >
                            <BowlingButtonGroup />
                        </div>

                    {/*</Grid>*/}
                    {/*<Grid item xs={5}>*/}
                    {/*    <h4 style={{ align: "centre" }}>Career Bowling</h4>*/}
                        <BiAxialBarChart rawdata={this.state.bowling} yaxis="wickets" />
                    </Grid>

                    <Grid item xs={4}>
                        <div className={classes.div} >
                            <BowlingButtonGroup />
                        </div>

                        {/*</Grid>*/}
                        {/*<Grid item xs={5}>*/}
                        {/*    <h4 style={{ align: "centre" }}>Career Bowling</h4>*/}
                        <BiAxialBarChart rawdata={this.state.bowling} yaxis="wickets" />
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
        height: 900
    },
    table: {
        height: 300,
    },
    grid: {
        minHeight: 500,
        width: '100%',
        padding: "10px"
    },
    div: {
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    }
});

export default withStyles(styles)(Players);