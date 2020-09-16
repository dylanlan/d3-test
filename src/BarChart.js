import React, { Component } from 'react'
import { applyD3 } from './d3';

class BarChart extends Component {
    componentDidMount() {
        const data = [
            { Name: "Thing1", Value: "12345" },
            { Name: "Thing2", Value: "5000" },
            { Name: "Thing3", Value: "1000" },
        ];
        applyD3(data);
    }
    render() { return <div id="d3_chart"></div> }
}
export default BarChart