import React, { Fragment, useEffect, useState } from "react";
import { DataGrid } from '@material-ui/data-grid';
import {Container} from "react-bootstrap";

const Players = () => {

    const [players, setPlayers] = useState([]);

    const columns = [
        { field: 'playerid', headerName: 'ID', type: 'number', width: '20%', align:'center' },
        { field: 'playername', headerName: 'Player Name', width: '80%', align:'centre' }
    ];

    const getPlayers = async () => {
        try {
            const response = await fetch("http://localhost:4000/players/details");
            const jsonData = await response.json();

            setPlayers(jsonData.rows);

        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getPlayers();
    });

    return (
        // <div style={{ padding: 0 }} >
        //     <Fragment>
        //         <table class="table mt-5 text-center">
        //             <thead>
        //             <tr>
        //                 <th>Player Id</th>
        //                 <th>Player Name</th>
        //             </tr>
        //             </thead>
        //             <tbody>
        //             {Array.from(players).map(p => (
        //                 <tr key={p.playerid}>
        //                     <td>{p.playerid}</td>
        //                     <td>
        //                         {p.playername}
        //                     </td>
        //                 </tr>
        //             ))}
        //             </tbody>
        //         </table>
        //     </Fragment>
        // </div>

        <Container>
            <Fragment>
                 <div style={{ height: 400, width: '100%' }}>
                     <DataGrid rows={players} columns={columns} pageSize={5}  />
                 </div>
            </Fragment>
        </Container>
    );
}

export default Players;


// {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//         `${params.getValue('playerid') || ''} ${params.getValue('playerName') || ''}`,
// },
