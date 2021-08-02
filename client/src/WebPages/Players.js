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
        this.state = {view: "runs",
            players: [],
            columns:[],
            data:[],
            bowling: [],
            careerGraphData: [],
            careerGraphStat: "runs"
        };
    }

    componentDidMount() {
        this.getPlayers().then(r => r);
        this.getCareerWickets().then(r => r);
        this.getCareerGraphStat("runs").then(r => r);
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

    getCareerWickets = async () => {
      try {

          const response = await fetch("http://localhost:4000/bowling/CareerWickets/10");
          const jsonData = await response.json();

          this.setState({bowling: jsonData.rows});

      }  catch (err) {
          console.error(err.message);
      }
    };

    getCareerGraphStat = async (stat) => {
        try {
            let q;
            const count = 10;

            // TODO: change this switch to a dictionary const or similar? Must be a neater way
            switch (stat) {
                case "caps":
                    q = `http://localhost:4000/players/CareerCaps/${count}`;
                    break;
                case "runs":
                    q = `http://localhost:4000/batting/CareerRuns/${count}`;
                    break;
                case "highscore":
                    q = `http://localhost:4000/batting/CareerHighScores/${count}`;
                    break;
                case "average":
                    q = `http://localhost:4000/batting/CareerAverage/${count}`;
                    break;
                case "centuries":
                    q = `http://localhost:4000/batting/CareerCenturies/${count}`;
                    break;
            }

            const response = await fetch(q);
            const jsonData = await response.json();

            this.setState({careerGraphData: jsonData.rows});

        } catch (err) {
            console.error(err.message);
        }
    };

    handleCareerGraphDataChange = (stat) => {
        // Update the data sent to the Recharts and the key stat
        this.setState({ careerGraphStat: stat });
        this.getCareerGraphStat(stat).then(r => r);
    }

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
                        {/*TODO: add in first to last season played*/}
                        <DataGrid
                            className={classes.table}
                            width={"50%"}
                            getRowId={(r) => r.playerid}
                            rows={this.state.players}
                            columns={this.state.columns}
                            pageSize={40}  />
                    </Grid>
                    <Grid item xs={6} className={classes.table}>
                        {/*<h2>Career Hall of Fame</h2>*/}
                        <div className={classes.div}>
                            <BattingButtonGroup onCareerGraphDataChange={this.handleCareerGraphDataChange} />
                        </div>
                        {/*</Grid>*/}
                        {/*<Grid item xs={5}>*/}
                        {/*    <h4 style={{ align: "centre" }}>Career Batting</h4>*/}
                        <BiAxialBarChart stat={this.state.careerGraphStat} data={this.state.careerGraphData} />
                    </Grid>

                    {/*    New row    */}
                    <Grid item xs={6}>
                        <div className={classes.div} >
                            <BowlingButtonGroup />
                        </div>

                    {/*</Grid>*/}
                    {/*<Grid item xs={5}>*/}
                    {/*    <h4 style={{ align: "centre" }}>Career Bowling</h4>*/}
                        <BiAxialBarChart rawdata={this.state.bowling} yaxis="wickets" />
                    </Grid>

                    <Grid item xs={6}>
                        <div className={classes.div} >
                            <BowlingButtonGroup />
                        </div>

                        {/*</Grid>*/}
                        {/*<Grid item xs={5}>*/}
                        {/*    <h4 style={{ align: "centre" }}>Career Bowling</h4>*/}
                        <BiAxialBarChart rawdata={this.state.bowling} yaxis="wickets" />
                    </Grid>
                {/*    Here we could have the best stats by season. And also choose to view the stats for a season? */}
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
        height: 400,
        // padding: 12,
        paddingBottom: 20
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