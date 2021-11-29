import React from 'react';
import {GridApi, GridCellValue, GridColDef} from "@mui/x-data-grid";
import Button from "@mui/material/Button";

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    {field: 'name', headerName: 'Name', flex: 1, headerAlign: 'center', align: "center"},
    {field: 'seasons', headerName: 'Seasons', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    {field: 'matches', headerName: 'Matches', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    {
        field: "test",
        headerName: " ",
        filter: "disabled",
        disableClickEventBubbling: true,
        flex: 0.7,
        headerAlign: 'center',
        align: "center",
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

export const Columns2 = [{
    dataField: "name",
    text: "Player Name"
},{
    dataField: "seasons",
    text: "Seasons"
},{
    dataField: "appearances",
    text: "Appearances"
}
]

export default columns;
