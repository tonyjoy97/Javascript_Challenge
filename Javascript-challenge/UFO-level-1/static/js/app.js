var tableData = data;

var tableBody = d3.select('tbody');

for (let index = 0; index < tableData.length; index++) {
  var dictionary = tableData[index];
  var row = tableBody.append('tr') 
  row.append('td').text(dictionary['datetime']); 
  row.append('td').text(dictionary['city']); 
  row.append('td').text(dictionary['state']);
  row.append('td').text(dictionary['country']); 
  row.append('td').text(dictionary['shape']); 
  row.append('td').text(dictionary['durationMinutes']);
  row.append('td').text(dictionary['comments']);

};

var button = d3.select("#filter-btn");

button.on("click", function() {

d3.event.preventDefault()

  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");
  console.log(inputValue);

  var filteredData = tableData.filter(dictionary => dictionary.datetime === inputValue);

tableBody.html("")

for (let index = 0; index < filteredData.length; index++) {
  var dictionary = filteredData[index];
  var row = tableBody.append('tr') 
  row.append('td').text(dictionary['datetime']); 
  row.append('td').text(dictionary['city']); 
  row.append('td').text(dictionary['state']);
  row.append('td').text(dictionary['country']); 
  row.append('td').text(dictionary['shape']); 
  row.append('td').text(dictionary['durationMinutes']);
  row.append('td').text(dictionary['comments']);

};
  
  console.log(filteredData);

});