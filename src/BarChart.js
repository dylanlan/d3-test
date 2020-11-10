import React, { Component } from 'react'
import { applyD3 } from './d3';

class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Title',
        };
      }

    componentDidMount() {
        this.handleChartUpdate();
    }

    componentDidUpdate(prevProps) {
        if (this.props.data && prevProps.data !== this.props.data) {
            this.handleChartUpdate();
        }
    }

    render() {
        return (
            <div>
                <label>
                    Title:
                    <input type="text" name="title" />
                </label>
                <label>
                    Y-Axis:
                    <input type="text" name="title" />
                </label>
                <label>
                    X-Axis:
                    <input type="text" name="title" />
                </label>
                <div id="d3_chart"></div>
            </div>
        );
    }

    handleChartUpdate() {
        const { data } = this.props;
        applyD3(data);
    }
}
export default BarChart