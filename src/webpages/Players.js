import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {connect} from "react-redux";
import BiAxialBarChart from "../components/graphs/BiAxialBarChart";
import BattingButtonGroup from "../components/buttons/BattingButtonGroup";
// import Columns from "../components/columns/PlayerDatabase";
import PageHeader from "../components/PageHeader";
import BowlingButtonGroup from "../components/buttons/BowlingButtonGroup";
import * as PlayerRepoActions from '../actions/repositoryactions/Players';
import "./Players.css";
import PlayersTable from "../components/tables/PlayersTable";

class Players extends React.Component {

    constructor() {
        super();
        this.state = {
            view: "runs",
            // columns: [],
            careerGraphData: [],
            careerGraphStat: "runs",
            careerBowlingGraphData: [],
            careerBowlingGraphStat: "wickets"
        };
    }

    componentDidMount() {
        // this.getPlayers().then(r => r);
        this.getCareerBowlingGraphStat("wickets").then(r => r);
        this.getCareerBattingGraphStat("runs").then(r => r);
        // this.setState({columns: Columns});

        this.props.onGetAllPlayers();
    }

    // getPlayers = async () => {
    //     try {
    //         const response = await fetch("http://localhost:4000/players/details");
    //         const jsonData = await response.json();
    //
    //         this.setState({players: jsonData.rows});
    //
    //     } catch (err) {
    //         console.error(err.message);
    //     }
    // };

    handleCareerBattingGraphDataChange = (stat) => {
        this.getCareerBattingGraphStat(stat).then(r => r);
    }

    getCareerBattingGraphStat = async stat => {
        try {
            let q;
            const count = 10;

            // TODO: change this switch to a dictionary const or similar? Must be a neater way
            switch (stat) {
                case "caps":
                    q = `http://localhost:4000/players/CareerCaps/${count}`;
                    break;
                case "runs":
                    q = `http://localhost:4000/batting/CareerRuns/${count}`;
                    break;
                case "highscore":
                    q = `http://localhost:4000/batting/CareerHighScores/${count}`;
                    break;
                case "average":
                    q = `http://localhost:4000/batting/CareerAverage/${count}`;
                    break;
                case "centuries":
                    q = `http://localhost:4000/batting/CareerCenturies/${count}`;
                    break;
                default:
                    break;
            }

            const response = await fetch(q);
            const jsonData = await response.json();

            this.setState({careerGraphStat: stat});
            this.setState({careerGraphData: jsonData.rows});

        } catch (err) {
            console.error(err.message);
        }
    };

    handleCareerBowlingGraphDataChange = (stat) => {
        this.getCareerBowlingGraphStat(stat).then(r => r);
    }

    getCareerBowlingGraphStat = async (stat) => {
        try {
            let q;
            const count = 10;

            // TODO: change this switch to a dictionary const or similar? Must be a neater way
            switch (stat) {
                case "overs":
                    q = `http://localhost:4000/bowling/CareerOvers/${count}`;
                    break;
                case "wickets":
                    q = `http://localhost:4000/bowling/CareerWickets/${count}`;
                    break;
                case "bestfigures":
                    q = `http://localhost:4000/bowling/CareerBestFigures/${count}`;
                    break;
                case "fivewickethauls":
                    q = `http://localhost:4000/bowling/CareerFiveWicketHauls/${count}`;
                    break;
                case "average":
                    q = `http://localhost:4000/bowling/CareerAverage/${count}`;
                    break;
                case "centuries":
                    q = `http://localhost:4000/bowling/CareerCenturies/${count}`;
                    break;
                default:
                    break;
            }

            const response = await fetch(q);
            const jsonData = await response.json();

            this.setState({careerBowlingGraphStat: stat});
            this.setState({careerBowlingGraphData: jsonData.rows});

        } catch (err) {
            console.error(err.message);
        }
    };

    render() {

        return (
            <Container className="root">
                <PageHeader
                    header="Player Database"
                    description="Search via player name, view player caps and link to their profile page."
                />
                <Row>
                    <Col xs={6}>
                        <PlayersTable />
                    </Col>
                    <Col xs={6} className="table">
                        <div className="div">
                            <BattingButtonGroup onCareerGraphDataChange={this.handleCareerBattingGraphDataChange}/>
                        </div>

                        <BiAxialBarChart stat={this.state.careerGraphStat} data={this.state.careerGraphData}/>
                    </Col>
                </Row>
                {/*    New row    */}
                <Row>
                    <Col xs={6}>
                        <div className="div">
                            <BowlingButtonGroup onCareerGraphDataChange={this.handleCareerBowlingGraphDataChange}/>
                        </div>

                        <BiAxialBarChart stat={this.state.careerBowlingGraphStat}
                                         data={this.state.careerBowlingGraphData}/>
                    </Col>

                    <Col xs={6}>
                        <div className="div">
                            <BowlingButtonGroup/>
                        </div>

                        <BiAxialBarChart stat={this.state.careerBowlingGraphStat}
                                         data={this.state.careerBowlingGraphData}/>
                    </Col>
                </Row>
                {/*    Here we could have the best stats by season. And also choose to view the stats for a season? */}
            </Container>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        players: state.players
    }
}

const mapDispatchToProps = (dispatch) => ({
    onGetAllPlayers: () => dispatch(PlayerRepoActions.getAllPlayerAppearances())
})

export default connect(mapStateToProps, mapDispatchToProps)(Players)