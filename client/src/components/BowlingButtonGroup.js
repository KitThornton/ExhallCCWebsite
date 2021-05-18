import React from 'react';
import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab";

export default class BowlingButtonGroup extends React.Component {

    constructor() {
        super();
        this.state = {view: "runs", rawdata: [], data: []};
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e, value) {
        if (value !== null) {
            this.setState({ view: value });
        }
    }

    render() {
        return (
            <ToggleButtonGroup orientation="horizontal"
                               value={this.state.view}
                               exclusive = {true}
                               size = "small"
                               onChange={this.handleOnChange}
            >
                <ToggleButton value="caps">
                    Overs
                </ToggleButton>
                <ToggleButton value="runs" aria-label="runs">
                    Wickets
                </ToggleButton>
                <ToggleButton value="average">
                    5 Wickets
                </ToggleButton>
                <ToggleButton value="centuries">
                    Best Figures
                </ToggleButton>
                <ToggleButton value="highscore">
                    Average
                </ToggleButton>
            </ToggleButtonGroup>
        );
    };
}