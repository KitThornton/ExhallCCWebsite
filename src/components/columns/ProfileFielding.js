const columns = [
    {field: 'id', headerName: 'ID', type: 'number', flex: 0.5, headerAlign: 'center', align: "center"},
    {field: 'year', headerName: 'Year', flex: 1, headerAlign: 'center', align: "center"},
    {field: 'catches', headerName: 'Catches', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    {field: 'stumpings', headerName: 'Stumpings', type: 'number', flex: 1, headerAlign: 'center', align: "center"},
    {
        field: 'dismissals',
        headerName: 'Total Dismissals',
        type: 'number',
        flex: 1,
        headerAlign: 'center',
        align: "center"
    },
];

export default columns;