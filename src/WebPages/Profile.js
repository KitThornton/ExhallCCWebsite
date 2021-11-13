import React from 'react';
import { Grid, withStyles } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import Container from '@material-ui/core/Container';
import BiAxialLineChart from "../components/graphs/BiAxialLineChart";
import PageHeader from "../components/PageHeader";
import PlayerProfileCard from '../components/PlayerProfileCard';
import battingColumns from "../components/columns/ProfileBatting"
import bowlingColumns from "../components/columns/ProfileBowling"
import fieldingColumns from "../components/columns/ProfileFielding"
import PlayerPieChart from "../components/graphs/PlayerPieChart";
import DisciplineButton from "../components/DisciplineButton";
import CombinedButtonGroup from "../components/CombinedButtonGroup";

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            playerName: "",
            columns: "",
            debut: "",
            profile: "",
            tableData: "",
            graphData: "",
            graphStat: "runs"
        }
    }

    componentDidMount() {
        this.getBatting().then(r => r);
        this.getPlayerProfile().then(r => r);
        this.getPlayerDebut().then(r => r);
        this.getKeyPlayerStats().then(r => r);
        this.setState({columns: battingColumns});
    }

    getBatting = async () => {
        try {
            const response = await fetch(`http://localhost:4000/batting/seasons/${this.state.id}`);
            const jsonData = await response.json();

            this.setState({tableData: jsonData.rows, playerName: jsonData.rows[0]["playername"]});

        } catch (err) {
            console.error(err.message);
        }
    };

    getPlayerDebut = async () => {
        try {
            const response = await fetch(`http://localhost:4000/players/debut/${this.state.id}`);
            const jsonData = await response.json();

            this.setState({debut: jsonData.rows});

        } catch (err) {
            console.error(err.message);
        }
    };

    getPlayerProfile = async () => {
        try {
            const response = await fetch(`http://localhost:4000/players/profile/${this.state.id}`);
            const jsonData = await response.json();

            this.setState({profile: jsonData.rows});

        } catch (err) {
            console.error(err.message);
        }
    };

    getKeyPlayerStats = async () => {
        try {
            const response = await fetch(`http://localhost:4000/players/keystats/${this.state.id}`);
            const jsonData = await response.json();

            this.setState({graphData: jsonData.rows});

        } catch (err) {
            console.error(err.message);
        }
    };

    handleTableDataChange = (data, disc) => {

        switch (disc) {
            case "batting":
                this.setState( { columns:  battingColumns})
                break;
            case "bowling":
                this.setState( { columns:  bowlingColumns})
                break;
           case "fielding":
                this.setState( { columns:  fieldingColumns})
                break;
        }

        this.setState({ tableData: data })
    };

    handleGraphDataChange = (stat) => {
        this.setState({ graphStat: stat });
        this.getKeyPlayerStats().then(r => r);
    }

    render() {

        const { classes } = this.props;

        return (
            <Container className={classes.root}>
                <Grid container spacing={2} style={{ height: 50, padding: "15px" }}>
                    <Grid item xs={12} >
                        <PageHeader
                            header={this.state.playerName}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <PlayerProfileCard playername={this.state.playerName}
                                           profileData={this.state.profile}
                                           debut={this.state.debut}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <CombinedButtonGroup onGraphDataChange={this.handleGraphDataChange} id={this.state.id} />
                        <BiAxialLineChart data={this.state.graphData} stat={this.state.graphStat} />
                    </Grid>
                    <Grid item xs={4}>
                        <PlayerPieChart rawdata={this.state.tableData} />
                    </Grid>
                    <Grid item xs={12} style={{ height: 600, padding: "25px" }}>
                        <div className={classes.buttonGroup}>
                            <DisciplineButton tableData={this.state.tableData} onTableDataChange={this.handleTableDataChange} id={this.state.id}/>
                        </div>
                        <div className={classes.table}>
                            <DataGrid
                                getRowId={(r) => r.id}
                                rows={Array.from(this.state.tableData)}
                                columns={this.state.columns}
                                pageSize={40}  />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

const styles = theme => ({
    root: {
        // maxWidth: 345,
        padding: 10,
        height: 1300
    },
    table: {
        height: 400,
        '& div[data-rowIndex][role="row"]:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.disabledBackground
        }
    },
    grid: {
        minHeight: 500,
        width: '100%',
        padding: "10px"
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
        minWidth: '100%'
    },
});

export default withStyles(styles)(Profile);
