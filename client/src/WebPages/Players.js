import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from '@material-ui/data-grid';
import { Container } from "react-bootstrap";

class Players extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        players: []
    };

    componentDidMount() {
        this.getPlayers().then(r => r);
    }

    getPlayers = async () => {
        try {
            const response = await fetch("http://localhost:4000/players/details");
            const jsonData = await response.json();

            this.setState({players: jsonData.rows}, () => console.log(jsonData));

        } catch (err) {
            console.error(err.message);
        }
    };

    render() {

        return(
            <Container>
                {/*<div style={{ height: 400, width: '100%' }}>*/}
                <div style={{ height: 500, width: '100%', padding: "10px" }}>
                    <DataGrid
                        width={"50%"}
                        getRowId={(r) => r.playerid}
                        rows={this.state.players}
                        columns={columns}
                        pageSize={20}  />
                </div>

            </Container>
        )
    }
}

const columns = [
    { field: 'playerid', headerName: 'ID', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    { field: 'playername', headerName: 'Player Name', flex: 1, headerAlign: 'center', align: "center"}
];

export default Players;

