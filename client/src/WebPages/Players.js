import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from '@material-ui/data-grid';
import { Container } from "react-bootstrap";

// const Players = () => {
//
//     const [players, setPlayers] = useState([]);
//
//     const columns = [
//         { field: 'playerid', headerName: 'ID', type: 'number', width: '20%', align:'center' },
//         { field: 'playername', headerName: 'Player Name', width: '80%', align:'centre' }
//     ];
//
//     const getPlayers = async () => {
//         try {
//             const response = await fetch("http://localhost:4000/players/details");
//             const jsonData = await response.json();
//
//             setPlayers(jsonData.rows);
//
//         } catch (err) {
//             console.error(err.message);
//         }
//     };
//
//     useEffect(() => {
//         getPlayers()}, []
//     );
//
//     return (
//         // <Container>
//         //     <table class="table mt-5 text-center">
//         //         <thead>
//         //             <tr>
//         //                 <th>Player Id</th>
//         //                 <th>Player Name</th>
//         //             </tr>
//         //         </thead>
//         //         <tbody>
//         //         {Array.from(players).map(p => (
//         //             <tr key={p.playerid}>
//         //                 <td>{p.playerid}</td>
//         //                 <td>
//         //                     {p.playername}
//         //                 </td>
//         //             </tr>
//         //         ))}
//         //         </tbody>
//         //     </table>
//         // </Container>
//
//         <Container>
//             <Fragment>
//                  {/*<div style={{ height: 400, width: '100%' }}>*/}
//                      <DataGrid rows={players} columns={columns} pageSize={5}  />
//                  {/*</div>*/}
//             </Fragment>
//         </Container>
//     );
// }

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
                <div style={{ height: 400, width: '100%' }}>
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
    { field: 'playerid', headerName: 'ID', type: 'number', align:'center', width: '50%' },
    { field: 'playername', headerName: 'Player Name', align:'centre', width: '50%' }
];

export default Players;

