import React from 'react';
import * as BattingRepoActions from "../../actions/repositoryactions/Batting";
import {connect} from "react-redux";

class BiAxialBarChart extends React.Component {

    componentDidMount() {
        this.props.onUpdateCareerBattingChartData("runs", 10);
    }

    render() {

        function CustomisedTickAxis() {
            return {fontSize: '20px', width: '90px', wordWrap: 'break-word'};
        }

        return (
            <div>

            </div>
            // <BarChart
            //     width={400}
            //     height={300}
            //     data={this.props.careerBattingChartData}
            //     margin={{
            //         top: 5,
            //         right: 10,
            //         left: 10,
            //         bottom: 65,
            //     }}
            // >
            //     <CartesianGrid strokeDasharray="5 5"/>
            //     <XAxis
            //         dataKey="playerId"
            //         interval={0}
            //         tickFormatter={<CustomisedTickAxis/>}
            //         angle={-45}
            //         textAnchor='end'/>
            //     <YAxis/>
            //     <Tooltip/>
            //     {/*<Legend />*/}
            //     <Bar dataKey={"runs"} fill="#8884d8"/>
            //     {/*<Bar dataKey="uv" fill="#82ca9d" />*/}
            // </BarChart>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        careerBattingChartData: state.careerBattingChartData
    }
}

const mapDispatchToProps = (dispatch) => ({
    onUpdateCareerBattingChartData: (stat, count) => dispatch(BattingRepoActions.updateCareerBattingChartData(stat, count))
})

export default connect(mapStateToProps, mapDispatchToProps)(BiAxialBarChart)