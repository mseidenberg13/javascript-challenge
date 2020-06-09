// from data.js
var tableData = data;
console.log(tableData)

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var button = d3.select("#filter-btn");
button.on("click", function() {
    
    d3.select("tbody").html("");
    d3.event.preventDefault();

    var date = d3.select("#datetime").property("value");
    var country = d3.select("#country").property("value").toLowerCase();
    var state = d3.select("#state").property("value").toLowerCase();
    var city = d3.select("#city").property("value").toLowerCase();
    var shape = d3.select("#shape").property("value").toLowerCase();

    filteredData = tableData;
    if (date) {
        filteredData = filteredData.filter(ufo => ufo.datetime === date);
    }
    if (country) {
        filteredData = filteredData.filter(ufo => ufo.country === country);
    }
    if (state) {
        filteredData = filteredData.filter(ufo => ufo.state === state);
    }
    if (city) {
        filteredData = filteredData.filter(ufo => ufo.city === city);
    }
    if (shape) {
        filteredData = filteredData.filter(ufo => ufo.shape === shape);
    }

    filteredData.forEach(function(filter) {
        console.log(filter);
        var row = tbody.append("tr");
        Object.entries(filter).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});