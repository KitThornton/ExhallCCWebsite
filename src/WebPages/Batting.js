import React from "react";

class Batting extends React.Component {

    constructor(props) {
        super(props);
        this.state = {batting: "", team: this.props.match.params.team}
    }

    render() {
        return (
            <div style={{padding: 0}}>
                Batting {this.state.team}
            </div>
        );
    }
}

export default Batting;
