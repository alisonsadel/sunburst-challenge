

ids =[]
labels = []
parents = []
values = []

d3.json("http://127.0.0.1:5000/sunburst_data").then((data) => {
  // Creates variables to hold the peices of data. 
  // subsitute 1s for i
  console.log(data);
  console.log(data[1]);
  console.log(data[1][1]);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (j===1) {
        var ids = data[i][j];
        console.log(ids);
      } 
      else if (j===2) {
        var labels = data[i][j];
      }
      else if (j===3) {
        var parents = data[i][j];
      }
      else if (j===4) {
        var values = data[i][j];
      }  
      //console.log(arr[i][j]);
}}}); 

    // PUT ALL INSIDE D3 JSON
var data = [
{
    "type": "sunburst",
    //only unique values? filter values using
    "ids": ids, 
    "labels": labels,
    "parents": parents,
    "values":  values,
    "leaf": {"opacity": 0.4},
    "marker": {"line": {"width": 2}},
    "branchvalues": 'total'
  }];
  
  var layout = {
    "margin": {"l": 0, "r": 0, "b": 0
    , "t": 0},
  };
  
  
  Plotly.newPlot('sunburstPlot', data, layout, {showSendToCloud: true}); 
  
  myPlot = document.getElementById("sunburstPlot"); 
