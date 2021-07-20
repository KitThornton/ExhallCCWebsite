// Here will be a button group that'll span the container and dictate the stats displayed in the table
import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

class DisciplineButton extends React.Component {

    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.state = { id: props.id}
    }

    setData = async (e) => {
        let q;

        switch (e) {
            case "fielding":
                q = `http://localhost:4000/fielding/seasons/${this.state.id}`;
                break;
            case "bowling":
                q = `http://localhost:4000/bowling/seasons/${this.state.id}`;
                break;
            case "batting":
                q = `http://localhost:4000/batting/seasons/${this.state.id}`;
                break;
        }

        try {
            const response = await fetch(q);
            const jsonData = await response.json();
            this.props.onDataChange(jsonData.rows, e);

        } catch (err) {
            console.error(err.message);
        }
    }

    handleInput(e) {
        this.setData(e).then(r => r);
    }

    render() {
        return (
            <div>
                <ButtonGroup variant="contained" color="primary"
                             aria-label="contained primary button group">
                    <Button onClick={() => this.handleInput("batting")}>Batting</Button>
                    <Button onClick={() => this.handleInput("bowling")} >Bowling</Button>
                    <Button onClick={() => this.handleInput("fielding")} >Fielding</Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default DisciplineButton;