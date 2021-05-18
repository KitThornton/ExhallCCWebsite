import React from 'react';
import { Grid, withStyles } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import Container from '@material-ui/core/Container';
import BiAxialLineChart from "../components/BiAxialLineChart";
import PageHeader from "../components/PageHeader";
import PlayerProfileCard from '../components/PlayerProfileCard';
import Columns from "../components/columns/ProfileBatting"

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {batting: "",
            id: this.props.match.params.id,
            playerName: "",
            columns: ""
        }
    }

    componentDidMount() {
        this.getBatting().then(r => r);
        this.setState({columns: Columns});
    }

    getBatting = async () => {
        try {
            const response = await fetch(`http://localhost:4000/batting/seasons/${this.state.id}`);
            const jsonData = await response.json();

            this.setState({batting: jsonData.rows, playerName: jsonData.rows[0]["playername"]});

        } catch (err) {
            console.error(err.message);
        }
    };

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
                        <PlayerProfileCard playername={this.state.playerName} />
                    </Grid>
                    <Grid item xs={4}>
                        <BiAxialLineChart rawdata={this.state.batting} />
                    </Grid>
                    <Grid item xs={12} style={{ height: 600, padding: "25px" }}>
                        <DataGrid
                            // width={"50%"}
                            getRowId={(r) => r.battingid}
                            rows={Array.from(this.state.batting)}
                            columns={this.state.columns}
                            pageSize={40}  />
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
        height: 300,
    },
    grid: {
        minHeight: 500,
        width: '100%',
        padding: "10px"
    }
});

export default withStyles(styles)(Profile);
