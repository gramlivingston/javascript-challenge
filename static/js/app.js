// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button = d3.select("filter-btn");

// Create event handlers for clicking the button or pressing the enter key

data.forEach((TableSighting) => {
  var row = tbody.append("tr");
  Object.entries(TableSighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
