// Here will be a button group that'll span the container and dictate the stats displayed in the table
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

class DisciplineButton extends React.Component {

    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.state = { id: props.id}
    }

    useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
                margin: theme.spacing(1),
            },
            width: '100%'
        },
    }));

    setData = async (e) => {
        // console.log(e.target.value);
        let q;

        switch (e) {
            case "fielding":
                q = `http://localhost:4000/batting/seasons/${this.state.id}`;
                break;
            case "bowling":
                q = `http://localhost:4000/bowling/seasons/${this.state.id}`;
                break;
            case "batting":
                q = `http://localhost:4000/batting/seasons/${this.state.id}`;
                break;
        }

        console.log(q);

        try {
            const response = await fetch(q);
            const jsonData = await response.json();

            // this.setState({data: jsonData.rows});
            this.props.onDataChange(jsonData.rows);
            console.log(jsonData.rows);

        } catch (err) {
            console.error(err.message);
        }
    }

    handleInput(e) {
        console.log(e);
        this.setData(e).then(r => r);
    }

    render() {
        return (
            <div>
                <ButtonGroup variant="text" color="primary"
                             aria-label="text primary button group">
                    <Button onClick={() => this.handleInput("batting")}>Batting</Button>
                    <Button onClick={() => this.handleInput("bowling")} >Bowling</Button>
                    <Button onClick={() => this.handleInput("fielding")} >Fielding</Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default DisciplineButton;