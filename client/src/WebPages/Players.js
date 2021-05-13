import React, { Fragment } from "react";
import {DataGrid, GridApi, GridCellValue, GridColDef} from "@material-ui/data-grid";
import {ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import Button from "@material-ui/core/Button";
import BiAxialBarChart from "../components/BiAxialBarChart";
import { Grid, Paper } from "@material-ui/core";
import PageHeader from "../components/PageHeader";
import Container from '@material-ui/core/Container';
import SearchBar from "material-ui-search-bar";

class Players extends React.Component {

    constructor() {
        super();
        this.state = {view: "runs", players: []};
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e, value) {
        if (value !== null) {
            this.setState({ view: value });
        }
    }

    componentDidMount() {
        this.getPlayers().then(r => r);
        this.getCareerBatting().then(r => r);
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
            const response = await fetch("http://localhost:4000/batting/highestCareerRuns/10");
            const jsonData = await response.json();

            this.setState({careerBatting: jsonData.rows});

        } catch (err) {
            console.error(err.message);
        }
    };

    render() {
        return(
            <Container>
                <PageHeader
                    header = "Player Database"
                    description = "Search via player name, view player caps and link to their profile page."
                />
                <Grid container spacing={1}
                      alignItems="center"
                      justify="center">
                    <Grid item xs={6}>
                        {/*<Paper>*/}
                            {/*<SearchBar*/}
                            {/*    // value={searched}*/}
                            {/*    // onChange={(searchVal) => requestSearch(searchVal)}*/}
                            {/*    // onCancelSearch={() => cancelSearch()}*/}
                            {/*/>*/}
                            {/*<DataGrid*/}
                            {/*    width={"50%"}*/}
                            {/*    getRowId={(r) => r.playerid}*/}
                            {/*    rows={this.state.players}*/}
                            {/*    columns={columns}*/}
                            {/*    pageSize={40}  />*/}
                        {/*</Paper>*/}
                        <div style={{ height: 300, width: '100%', padding: "10px" }}>
                            <DataGrid
                                width={"50%"}
                                getRowId={(r) => r.playerid}
                                rows={this.state.players}
                                columns={columns}
                                pageSize={40}  />
                        </div>
                    </Grid>
                    <Grid item xs={1}>
                        <ToggleButtonGroup orientation="vertical"
                                           value={this.state.view}
                                           // aria-checked={true}
                                           exclusive = {true}
                                           size = "small"
                                           onChange={this.handleOnChange}>
                            <ToggleButton value="runs" aria-label="runs">
                                runs
                            </ToggleButton>
                            <ToggleButton value="highscore">
                                High Score
                            </ToggleButton>
                            <ToggleButton value="average">
                                average
                            </ToggleButton>
                            <ToggleButton value="centuries">
                                Centuries
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                    <Grid item xs={5}>
                        <BiAxialBarChart rawdata={this.state.careerBatting} />
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

const columns: GridColDef[] = [
    { field: 'playerid', headerName: 'ID', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    { field: 'playername', headerName: 'Name', flex: 1, headerAlign: 'center', align: "center"},
    { field: 'seasons', headerName: 'Seasons', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    { field: 'matches', headerName: 'Matches', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    {
        field: "",
        headerName: "Action",
        filter: "disabled",
        disableClickEventBubbling: true,
        renderCell: (params) => {

            const onClick = () => {
                const api: GridApi = params.api;
                const fields = api
                    .getAllColumns()
                    .map((c) => c.field)
                    .filter((c) => c !== "__check__" && !!c);
                const thisRow: Record<string, GridCellValue> = {};

                fields.forEach((f) => {
                    thisRow[f] = params.getValue(f);
                });

                const id = thisRow["playerid"];
                window.location.href = `/Profile/${id}`;
            };

            return <Button variant="outlined" color="primary" onClick={onClick}>
                Profile
            </Button>;
        }
    }
];

export default Players;

