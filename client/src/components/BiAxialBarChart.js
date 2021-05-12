// Here we'll have a barchart where we pass in the the data source.

import React  from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default class BiAxialBarChart extends React.Component {

    render() {
        return (
            // <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={this.props.rawdata}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="playername" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="runs" fill="#8884d8" />
                    {/*<Bar dataKey="uv" fill="#82ca9d" />*/}
                </BarChart>
            // </ResponsiveContainer>
        );
    }
}


