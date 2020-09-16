import * as d3 from 'd3';

// mostly copied from https://www.d3-graph-gallery.com/graph/barplot_basic.html

export function applyD3(data) {
    // set the dimensions and margins of the graph
    var margin = { top: 60, right: 70, bottom: 90, left: 90 },
        width = 800 - margin.left - margin.right,
        height = 800 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#d3_chart")
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
        .domain(data.map(function (d) { return d.Name; }))
        .padding(0.2);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .attr("class", "axisBlack")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

    svg.append("text")
        .attr("transform", "translate(" + (width/2) + " ," + (height + margin.top + 30) + ")")
        .style("text-anchor", "middle")
        .text("X-Axis")

    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, 13000])
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
        .text("Y Axis");

    svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 - (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", "32px") 
        .style("text-decoration", "underline")  
        .text("Title");

    // Bars
    svg.selectAll("mybar")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", function (d) { return x(d.Name); })
        .attr("y", function (d) { return y(d.Value); })
        .attr("width", x.bandwidth())
        .attr("height", function (d) { return height - y(d.Value); })
        .attr("fill", "#228B22")
}