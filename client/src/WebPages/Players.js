import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import {Container } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
// import {LinkContainer} from "react-router-bootstrap";
// import {withRouter} from 'react-router-dom';

class Players extends React.Component {

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
                <div style={{ height: 600, width: '100%', padding: "10px" }}>
                    <DataGrid
                        width={"50%"}
                        getRowId={(r) => r.playerid}
                        rows={this.state.players}
                        columns={columns}
                        pageSize={40}  />
                </div>

            </Container>
        )
    }
}

const columns = [
    { field: 'playerid', headerName: 'ID', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    { field: 'playername', headerName: 'Player Name', flex: 1, headerAlign: 'center', align: "center"},
    { field: 'seasons', headerName: 'Seasons', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    { field: 'matches', headerName: 'Matches', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    {
        field: "",
        headerName: "Action",
        filter: "disabled",
        // disableClickEventBubbling: true,
        renderCell: () => {

            return <Button variant="outlined" color="primary" component={Link} to="/Home">
                Profile
            </Button>;
        }
    }
];

export default Players;

