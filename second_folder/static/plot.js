

ids =[]
labels = []
parents = []
value_layer = []
// let url = 'http://127.0.0.1:5000/sunburst_data'
// Initialize the page with default plot
function init() {
  //Plotly.d3.json(url, function(figure) {
  d3.json("http://127.0.0.1:5000/sunburst_data").then((data) => {
    // subsitute 1s for i
    // console.log(data);
    // console.log(data[1]);
    // console.log(data[1][1]);

    //let data = figure.data;
    for (let i = 0; i < data.length; i++) {
        ids.push(data[i][1]);
        labels.push(data[i][2]);
        parents.push(data[i][3]);
        //// Format the data and convert to numerical
        value_layer.push(+data[i][4]);
      };  
        //console.log(ids);
        console.log('label');
        console.log(labels);
        console.log('parents');
        console.log(parents);
        console.log('value_layer');
        console.log(value_layer);


    let trace = [
    {
      "type": "sunburst",
      //only unique values? filter values using
      //"ids": ids, 
      "labels": labels,
      "parents": parents,
      "values":  value_layer,
      "leaf": {"opacity": 0.4},
      "marker": {"line": {"width": 2}},
      "branchvalues": 'total'
    }];
    
    var layout = {
      "margin": {"l": 0, "r": 0, "b": 0
      , "t": 0},
    };
    
    //Plotly.plot(document.getElementById('sunburstPlot'), [trace], layout,
    // {displayModeBar: false}); 
    Plotly.newPlot('sunburstPlot', [trace], layout); 
    
    //myPlot = document.getElementById("sunburstPlot");
  //})}; 
  })}; 

init(); 

//console.log('initialize'); 