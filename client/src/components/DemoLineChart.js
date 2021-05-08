import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';

export default class DemoLineChart extends React.Component {

    render() {
        return (
            <LineChart
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
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year">
                    <Label value="Season" offset={-5} position="bottom" />
                </XAxis>
                {/*<YAxis label={{ x: 0, y: 0, value: 'pv of page', angle: -90, position: 'insideLeft' }} />*/}
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="runs" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line yAxisId="right" type="monotone" dataKey="average" stroke="#82ca9d" />
            </LineChart>
        );
    }
}

// function AxisLabel({ axisType, x, y, width, height, stroke, children }) {
//     const isVert = axisType === 'yAxis';
//     const cx = isVert ? x : x + (width / 2);
//     const cy = isVert ? (height / 2) + y : y + height + 20;
//     const rot = isVert ? `270 ${cx} ${cy}` : 0;
//     const lineHeight = 20;
//
//     if (children.length > 1 && children.map) {
//         return (<g>
//             {children.map((child, index) =>
//                 renderText(
//                     child,
//                     cx,
//                     cy + index * lineHeight,
//                     rot,
//                     stroke,
//                     index)
//             )}
//         </g>);
//     }
//
//     return renderText(children, cx, cy, rot, stroke);
// }
//
// function renderText(child, x, y, rotate, stroke, key) {
//     if (child && child.content) {
//         return (<text
//             key={key}
//             x={x}
//             y={y}
//             transform={`rotate(${rotate})`}
//             textAnchor="middle"
//             stroke={stroke}
//             {...child.props}>
//             {child.content}
//         </text>);
//     }
//
//     return (<text
//         key={key}
//         x={x}
//         y={y}
//         transform={`rotate(${rotate})`}
//         textAnchor="middle"
//         stroke={stroke}>{child}</text>);
// }
//
// AxisLabel.propTypes = {
//     axisType: React.PropTypes.oneOf(['yAxis', 'xAxis']),
//     x: React.PropTypes.number,
//     y: React.PropTypes.number,
//     width: React.PropTypes.number,
//     height: React.PropTypes.number,
//     stroke: React.PropTypes.string,
//     children: React.PropTypes.any,
// };

// const data = [
//     {
//         name: 'Page A',
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
//     {
//         name: 'Page B',
//         uv: 3000,
//         pv: 1398,
//         amt: 2210,
//     },
//     {
//         name: 'Page C',
//         uv: 2000,
//         pv: 9800,
//         amt: 2290,
//     },
//     {
//         name: 'Page D',
//         uv: 2780,
//         pv: 3908,
//         amt: 2000,
//     },
//     {
//         name: 'Page E',
//         uv: 1890,
//         pv: 4800,
//         amt: 2181,
//     },
//     {
//         name: 'Page F',
//         uv: 2390,
//         pv: 3800,
//         amt: 2500,
//     },
//     {
//         name: 'Page G',
//         uv: 3490,
//         pv: 4300,
//         amt: 2100,
//     },
// ];