import React from 'react';
import { Grid } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import Container from '@material-ui/core/Container';
import BiAxialLineChart from "../components/BiAxialLineChart";
import PageHeader from "../components/PageHeader";
import PlayerProfileCard from '../components/PlayerProfileCard';


class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {batting: "", id: this.props.match.params.id, playerName: ""}
    }

    componentDidMount() {
        this.getBatting().then(r => r);
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
        return (
            <Container>
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
                            columns={columns}
                            pageSize={40}  />
                    </Grid>
                </Grid>
            </Container>
        );
    }
}

const columns = [
    { field: 'battingid', headerName: 'ID', type: 'number', flex: 0.5, headerAlign: 'center', align: "center"},
    { field: 'year', headerName: 'Year',  flex: 1, headerAlign: 'center', align: "center"},
    { field: 'matches', headerName: 'Matches', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    { field: 'runs', headerName: 'Runs', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    { field: 'average', headerName: 'Average', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    { field: 'fifties', headerName: 'Fifties', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    { field: 'hundreds', headerName: 'Hundreds', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    { field: 'highscore', headerName: 'Highscore', type: 'number', flex: 1, headerAlign: 'center', align: "center"}
];

export default Profile;
