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
  
      tbody.html("");
      var date = d3.select("#datetime");
      var input = date.property("value");
      console.log(input);
      var filteredData = tableData.filter(ufo => ufo.datetime === input);
      console.log(filteredData);
  
      filteredData.forEach(function(select) {
      console.log(select);

      var row = tbody.append("tr");
      Object.entries(select).forEach(function([key, value]) {
          var cell = row.append("td");
          cell.text(value);
      });
  });
  });