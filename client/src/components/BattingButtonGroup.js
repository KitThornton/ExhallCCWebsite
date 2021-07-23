import React from 'react';
import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab";

export default class BattingButtonGroup extends React.Component {

    constructor() {
        super();
        this.state = {view: "runs"};
        this.handleOnChange = this.handleOnChange.bind(this);
    }

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
                               onChange={this.handleOnChange}>
                <ToggleButton value="caps">
                    caps
                </ToggleButton>
                <ToggleButton value="runs" aria-label="runs">
                    runs
                </ToggleButton>
                <ToggleButton value="highscore">
                    High Score
                </ToggleButton>
                <ToggleButton value="average">
                    average
                </ToggleButton>
                <ToggleButton value="centuries">
                    Centuries
                </ToggleButton>
            </ToggleButtonGroup>
        );
    };
}