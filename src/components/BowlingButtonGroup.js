import React from 'react';
import {ToggleButton, ToggleButtonGroup} from "@mui/lab";

export default class BowlingButtonGroup extends React.Component {

    constructor() {
        super();
        this.state = {view: "wickets"};
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e, value) {
        if (value !== null) {
            this.setState({view: value});
        }

        this.props.onCareerGraphDataChange(value);
    }

    render() {
        return (
            <ToggleButtonGroup orientation="horizontal"
                               value={this.state.view}
                               exclusive={true}
                               size="small"
                               onChange={this.handleOnChange}
            >
                <ToggleButton value="overs">
                    Overs
                </ToggleButton>
                <ToggleButton value="wickets">
                    Wickets
                </ToggleButton>
                <ToggleButton value="fivewickethauls">
                    5 Wickets Hauls
                </ToggleButton>
                <ToggleButton value="bestfigures">
                    Best Figures
                </ToggleButton>
                <ToggleButton value="average">
                    Average
                </ToggleButton>
            </ToggleButtonGroup>
        );
    };
}