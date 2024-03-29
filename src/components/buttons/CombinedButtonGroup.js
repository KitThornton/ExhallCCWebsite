// Here will be a button group that'll span the container and dictate the stat displayed in the graph
import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

// import {withStyles} from "@mui/material";

class CombinedButtonGroup extends React.Component {

    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.state = {id: props.id}
    }

    setData = async (e) => {

        try {
            //    Here we just need to update what the graph is using rather than re-fetch data
            this.props.onGraphDataChange(e);

        } catch (err) {
            console.error(err.message);
        }
    }

    handleInput(e) {
        this.props.onGraphDataChange(e);
    }

    render() {

        return (
            <div className="root">
                <ButtonGroup variant="text" color="primary"
                             aria-label="text primary button group">
                    <Button onClick={() => this.handleInput("appearances")}>Appearances</Button>
                    <Button onClick={() => this.handleInput("runs")}>Runs</Button>
                    <Button onClick={() => this.handleInput("wickets")}>Wickets</Button>
                    <Button onClick={() => this.handleInput("highscore")}>HighScore</Button>
                    <Button onClick={() => this.handleInput("bataverage")}>Average (bat)</Button>
                    <Button onClick={() => this.handleInput("bowlaverage")}>Average (bowl)</Button>
                </ButtonGroup>
            </div>
        )
    }
}

// const styles = theme => ({
//     root: {
//         width: "100%",
//         textAlign: "center"
//     }
// });

export default CombinedButtonGroup