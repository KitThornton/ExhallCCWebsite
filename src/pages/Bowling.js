import React from "react";

class Bowling extends React.Component {

    constructor(props) {
        super(props);
        this.state = {bowling: "", team: this.props.match.params.team}
    }

    render() {
        return (
            <div style={{padding: 0}}>
                Bowling {this.state.team}
            </div>
        );
    }
}

export default Bowling;
