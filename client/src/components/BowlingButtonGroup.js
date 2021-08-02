import React from 'react';
import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab";

export default class BowlingButtonGroup extends React.Component {

    constructor() {
        super();
        this.state = {view: "wickets"};
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    //1663.23

    handleOnChange(e, value) {
        if (value !== null) {
            this.setState({ view: value });
        }

        this.props.onCareerGraphDataChange(value);
    }

    render() {
        return (
            <ToggleButtonGroup orientation="horizontal"
                               value={this.state.view}
                               exclusive = {true}
                               size = "small"
                               onChange={this.handleOnChange}
            >
                <ToggleButton value="overs">
                    Overs
                </ToggleButton>
                <ToggleButton value="wickets" aria-label="runs">
                    Wickets
                </ToggleButton>
                <ToggleButton value="5whs">
                    5 Wickets
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