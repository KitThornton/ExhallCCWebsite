import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';

export default class BiAxialLineChart extends React.Component {

    render() {
        return (
            <LineChart
                width={500}
                height={300}
                data={this.props.rawdata}
                margin={{
                    top: 100,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year">
                    {/*<Label value="Season" offset={-5} position="bottom" />*/}
                </XAxis>

                <YAxis yAxisId="left" orientation="left"
                       // label={{ x: -1000, y: 10, value: 'Runs', angle: -90, position: 'Left' }}
                />
                {/*<YAxis yAxisId="right" orientation="right"*/}
                {/*       // label={{ x: 0, y: 0, value: 'Average', angle: -90, position: 'Right' }}*/}
                {/*/>*/}

                <Tooltip />
                <Legend />
                <Line  yAxisId="left" type="monotone" dataKey="runs" stroke="#8884d8" activeDot={{ r: 8 }} />
                {/*<Line  yAxisId="right" type="monotone" dataKey="average" stroke="#82ca9d" />*/}
            </LineChart>
        );
    }
}