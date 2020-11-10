import * as d3 from 'd3';
import { saveSvgAsPng } from 'save-svg-as-png';

// mostly copied from https://www.d3-graph-gallery.com/graph/barplot_basic.html

export function applyD3(data, labels) {
    const {
        title,
        xAxis,
        yAxis,
    } = labels;
    // set the dimensions and margins of the graph
    const margin = {
        top: 60,
        right: 70,
        bottom: 90,
        left: 90,
    };
    const width = 800 - margin.left - margin.right;
    const height = 800 - margin.top - margin.bottom;
    const chartID = "#d3_chart";
    const downloadButtonID = "#download";
    const minY = 0;
    const maxY = 13000;

    d3.select("svg").remove();

    // append the svg object to the body of the page
    var svg = d3.select(chartID)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // Parse the Data
    // X axis
    var x = d3.scaleBand()
        .range([0, width])
        .domain(data.map(function (d) { return d.name; }))
        .padding(0.2);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .attr("class", "axisBlack")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

    svg.append("text")
        .attr("transform", "translate(" + (width/2) + " ," + (height + margin.top + 10) + ")")
        .style("text-anchor", "middle")
        .style("font-size", "24px")
        .text(xAxis)

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([minY, maxY])
        .range([height, 0]);
    svg.append("g")
        .attr("class", "axisBlack")
        .call(d3.axisLeft(y));

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .style("font-size", "24px")
        .text(yAxis);

    svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", "32px") 
        .style("text-decoration", "underline")  
        .text(title);

    // Bars
    svg.selectAll("mybar")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", function (d) { return x(d.name); })
        .attr("y", function (d) { return y(d.value); })
        .attr("width", x.bandwidth())
        .attr("height", function (d) { return height - y(d.value); })
        .attr("fill", "#228B22")

    d3.select(downloadButtonID)
        .on('click', function(){
            // Get the d3js SVG element and save using saveSvgAsPng.js
            saveSvgAsPng(document.getElementsByTagName("svg")[0], `${title}.png`, {scale: 2, backgroundColor: "#FFFFFF"});
        })
}
