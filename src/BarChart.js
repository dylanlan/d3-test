import React, { Component } from 'react'
import { applyD3 } from './d3';

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Title',
            xAxis: 'X-Axis',
            yAxis: 'Y-Axis',
        };
      }

    componentDidMount() {
        this.handleChartUpdate(this.props.data, this.state);
    }

    componentDidUpdate(prevProps) {
        if (this.props.data && prevProps.data !== this.props.data) {
            this.handleChartUpdate(this.props.data, this.state);
        }
    }

    render() {
        return (
            <div>
                <input type="text"
                    name="title"
                    value={this.state.title}
                    onChange={(e) => this.handleLabelChange('title', e.target.value)}
                />
                <input type="text"
                    name="title"
                    value={this.state.yAxis}
                    onChange={(e) => this.handleLabelChange('yAxis', e.target.value)}
                />
                <input type="text"
                    name="title"
                    value={this.state.xAxis}
                    onChange={(e) => this.handleLabelChange('xAxis', e.target.value)}
                />
                <div id="d3_chart"></div>
            </div>
        );
    }

    async handleLabelChange(propName, value) {
        const state = { ...this.state };
        state[propName] = value;
        this.setState(state);
        this.handleChartUpdate(this.props.data, state);
    }

    handleChartUpdate(data, labels) {
        applyD3(data, labels);
    }
}
export default BarChart