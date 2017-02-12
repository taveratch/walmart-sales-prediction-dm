/*global someFunction google:true*/
/*eslint no-undef: "error"*/
import csv from './predicted.csv';
export default {
  loadData: () => {
    google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(drawBackgroundColor);

function drawBackgroundColor() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Date');
      data.addColumn('number', 'Weekly Sales');
      let arr = [];
      for(let i=0; i<csv.length; i++) {
        arr.push([csv[i].Id, parseInt(csv[i].Weekly_Sales)]);
      }
      data.addRows(arr);

      var options = {
        hAxis: {
          title: 'Date'
        },
        vAxis: {
          title: 'Weekly Sales'
        },
        backgroundColor: 'white',
        height: 400
      };

      var chart = new google.visualization.LineChart(document.getElementById('weekly-graph'));
      chart.draw(data, options);
    }
  }
}
