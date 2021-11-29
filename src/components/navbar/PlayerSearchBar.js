import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/lab/Autocomplete';
import {Button} from "@mui/material";

function CreateURL(id) {
    let str1 = "/profile/";
    let str2 = str1.concat(id);

    return str2;
}

class PlayerSelect extends React.Component {

    constructor() {
        super();
        this.state = {players: []};
    }

    componentDidMount() {
        this.GetPlayers().then(r => r);
    }

    GetPlayers = async () => {

        try {
            const response = await fetch(`http://localhost:4000/players/details`);
            const jsonData = await response.json();

            this.setState({players: jsonData.rows});

        } catch (err) {
            console.error(err.message);
        }
    }

    render() {

        return (
            <Autocomplete
                id="country-select-demo"
                style={{
                    width: 300,
                    backgroundColor: "#f2f2f2",
                    outlineColor: "#f2f2f2",
                    borderColor: 'transparent'
                }}
                options={this.state.players}
                // classes={{
                //     option: classes.option,
                // }}
                autoHighlight
                size={"small"}
                getOptionLabel={(option) => option.playername}
                renderOption={(option) => (
                    <React.Fragment>
                        {/*<span>*/}
                        <Button
                            href={CreateURL(option.playerid)}
                            style={{
                                minWidth: '100%',
                                textAlign: 'left',
                                alignSelf: 'stretch'
                            }}
                        >
                            {toProperCase(option.playername)}
                        </Button>
                        {/*</span>*/}
                    </React.Fragment>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search for a player"
                        variant="outlined"
                        // InputLabelProps={{
                        //     style: { color: '#fff' },
                        // }}
                        // inputProps={{
                        //     ...params.inputProps,
                        //     autoComplete: 'new-password', // disable autocomplete and autofill
                        // }}
                    />
                )}
            />
        )
    }
}

function toProperCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

// const styles = theme => ({
//     bar: {
//         width: 100
//     },
//     option: {
//         fontSize: 15,
//         '& > span': {
//             marginRight: 10,
//             fontSize: 18,
//         },
//     },
// });

export default PlayerSelect;
