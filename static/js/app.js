// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// BONUS: Refactor to use Arrow Functions!
data.forEach((UFOSighting) => {
  var row = tbody.append("tr");
  Object.entries(UFOSighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// // Select the submit button

var DateFilter = d3.select("#filter-btn");

DateFilter.on("click", function() {

//   // Prevent the page from refreshing
d3.event.preventDefault();

// Loop through the rows to identify sightings that match the date
  // Declare variables 
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("datetime");
  filter = input.value;
  table = document.getElementById("ufo-table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }

}); 