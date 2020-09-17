import React, { Component } from 'react'
import { applyD3 } from './d3';

class BarChart extends Component {
    componentDidMount() {
        this.handleChartUpdate();
    }
    componentDidUpdate(prevProps) {
        if (this.props.data && prevProps.data !== this.props.data) {
            this.handleChartUpdate();
        }
    }

    render() {
        return <div id="d3_chart"></div>
    }

    handleChartUpdate() {
        const { data } = this.props;
        applyD3(data);
    }
}
export default BarChart