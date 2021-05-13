import React from 'react';
import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab";

export default class BattingButtonGroup extends React.Component {

    constructor() {
        super();
        this.state = {view: "runs", players: []};
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e, value) {
        if (value !== null) {
            this.setState({ view: value });
        }
    }

    render() {
        return (
            <ToggleButtonGroup orientation="vertical"
                               value={this.state.view}
                // aria-checked={true}
                               exclusive = {true}
                               size = "small"
                               onChange={this.handleOnChange}>
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