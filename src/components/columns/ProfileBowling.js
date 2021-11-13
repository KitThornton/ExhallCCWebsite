const columns = [
    {field: 'id', headerName: 'ID', type: 'number', flex: 0.5, headerAlign: 'center', align: "center"},
    {field: 'year', headerName: 'Year', flex: 1, headerAlign: 'center', align: "center"},
    {field: 'overs', headerName: 'Overs', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    {field: 'maidens', headerName: 'Maidens', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    {field: 'wickets', headerName: 'Wickets', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    {field: 'runs', headerName: 'Runs', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    {field: 'average', headerName: 'Average', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    {field: 'fivewickethauls', headerName: '5 WHs', type: 'number', flex: 1, headerAlign: 'center', align: "center"}
];

export default columns;