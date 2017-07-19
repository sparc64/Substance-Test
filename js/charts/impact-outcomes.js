"use strict"

$(function() {
  let outcomesData = basicParticipantsJson.Impact.Outcomes.Count;
  
  let seriesData = [{
    "name": "value",
    "data": []
  }];
  
  for (let key in outcomesData) {
    seriesData[0].data.push( [outcomesData[key].breakdown, +outcomesData[key].value] );
  }

  Highcharts.chart('chart-impact-outcomes', {
    chart: {
      type: 'bar'
    },
    title: null,
    xAxis: {
      type: 'category'
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    series: seriesData
  });
});