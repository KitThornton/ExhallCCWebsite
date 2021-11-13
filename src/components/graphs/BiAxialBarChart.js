// Here we'll have a barchart where we pass in the the data source.
import React from 'react';
import {Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis,} from 'recharts';

export default class BiAxialBarChart extends React.Component {

    render() {

        function CustomisedTickAxis() {
            return {fontSize: '20px', width: '90px', wordWrap: 'break-word'};
        }

        return (
            <BarChart
                width={450}
                height={300}
                data={this.props.data}
                margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 65,
                }}
            >
                <CartesianGrid strokeDasharray="5 5"/>
                <XAxis
                    dataKey="playername"
                    interval={0}
                    tickFormatter={<CustomisedTickAxis/>}
                    angle={-45}
                    textAnchor='end'/>
                <YAxis/>
                <Tooltip/>
                {/*<Legend />*/}
                <Bar dataKey={this.props.stat} fill="#8884d8"/>
                {/*<Bar dataKey="uv" fill="#82ca9d" />*/}
            </BarChart>
        );
    }
}