//[temp, days]
var iceData = [
[22.94,   87],
[23.02,   137],
[25.68,   106],
[19.96,   97],
[24.80,   105],
[23.98,   118],
[22.10,   118],
[20.30,   136],
[24.20,   91],
[22.74,   107],
[24.16,   96],
[24.94,   114],
[22.40,   125],
[22.14,   115],
[20.84,   118],
[25.66,   82],
[21.73,   115],
[24.49,   97],
[24.13,   104],
[22.17,   146],
[21.73,   126],
[20.41,   141],
[24.41,   111],
[23.95,   123],
[20.95,   118],
[26.71,   83],
[22.81,   48],
[23.11,   118],
[23.33,   116],
[28.83,   81],
[23.11,   116],
[21.47,   123],
[23.97,   112],
[24.75,   99],
[23.61,   102],
[23.08,   118],
[21.24,   63],
[26.63,   62],
[23.88,   132]
];

var svg = d3.select("#scatter_plot");
svg.selectAll("circle").data(iceData).enter().append("circle")
    .attr("r", "2")
    .attr("fill", "red")
    .attr("cy", function(d) {return d[1]*4;}) //days of ice
    .attr("cx", function(d) {return d[0]*15;}); //temperature

var tempCoords = [];
for(var i = 5; i <= 30; i += 5) {
    tempCoords.push(i);
}

svg.selectAll("text").data(tempCoords).enter().append("text")
    .attr("x", function(d, i) {
        return (i+1) * 500 / tempCoords.length;
    })
    .attr("y", 12)
    .text(function(d) {
        return d;
    });

var dayCoords = [];
for(var i = 25; i <= 150; i += 25) {
    dayCoords.push(i);
}

svg.selectAll("tspan").data(dayCoords).append("text")
    .attr("x", 5)
    .attr("y", function(d, i) {
        return (i + 1) * 500 / dayCoords.length;
    })
    .text(function(d) {
        return d;
    });


