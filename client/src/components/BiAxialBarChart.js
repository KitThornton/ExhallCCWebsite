// Here we'll have a barchart where we pass in the the data source.

import React  from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class BiAxialBarChart extends React.Component {

    constructor() {
        super();
    }

    render() {

        function CustomisedTickAxis() {
            return { fontSize: '20px', width: '90px', wordWrap: 'break-word' };
        }

        return (
            // <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={450}
                    height={300}
                    data={this.props.rawdata}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 65,
                    }}
                >
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis
                        dataKey="playername"
                        interval={0}
                        tickFormatter={<CustomisedTickAxis />}
                        angle={-45}
                        textAnchor='end'/>
                    <YAxis />
                    <Tooltip />
                    {/*<Legend />*/}
                    <Bar dataKey={this.props.yaxis} fill="#8884d8" />
                    {/*<Bar dataKey="uv" fill="#82ca9d" />*/}
                </BarChart>
            // </ResponsiveContainer>
        );
    }
}