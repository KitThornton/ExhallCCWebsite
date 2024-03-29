import React from 'react';
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';

export default class BiAxialLineChart extends React.Component {

    render() {
        return (
            <LineChart
                width={700}
                height={500}
                data={this.props.data}
                margin={{
                    top: 10,
                    right: 10,
                    left: 10,
                    bottom: 10,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="year">
                    {/*<Label value="Season" offset={-5} position="bottom" />*/}
                </XAxis>

                <YAxis yAxisId="left" orientation="left"
                    // label={{ x: -1000, y: 10, value: 'Runs', angle: -90, position: 'Left' }}
                />
                {/*<YAxis yAxisId="right" orientation="right"*/}
                {/*       // label={{ x: 0, y: 0, value: 'Average', angle: -90, position: 'Right' }}*/}
                {/*/>*/}

                <Tooltip/>
                <Legend offset={-20}/>
                <Line yAxisId="left" type="monotone" dataKey={this.props.stat} stroke="#8884d8" activeDot={{r: 8}}/>
                {/*<Line  yAxisId="right" type="monotone" dataKey="average" stroke="#82ca9d" />*/}
            </LineChart>
        );
    }
}