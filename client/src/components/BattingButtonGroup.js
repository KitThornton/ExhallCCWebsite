import React from 'react';
import {ToggleButton, ToggleButtonGroup} from "@material-ui/lab";

export default class BattingButtonGroup extends React.Component {

    constructor() {
        super();
        this.state = {view: "runs", rawdata: [], data: []};
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(e, value) {
        if (value !== null) {
            this.setState({ view: value });
        }

        // Here, let's change the data for the
        switch (value) {
            case "highscore":
                this.getCareerHighScores().then(r => r);
                break;
            default:
                break;
        }
    }

    getCareerHighScores = async () => {
        try {
            const response = await fetch("http://localhost:4000/batting/CareerHighScores/10");
            const jsonData = await response.json();

            this.setState({data: jsonData.rows});

        } catch (err) {
            console.error(err.message);
        }
    };

    render() {
        return (
            <ToggleButtonGroup orientation="vertical"
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