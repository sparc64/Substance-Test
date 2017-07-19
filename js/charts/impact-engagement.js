"use strict"

$(function() {
  let engagementData = basicParticipantsJson.Impact["Engagement and Progression"];

  let seriesData = [{
    "name": "value",
    "data": []
  }];
  
  for (let key in engagementData) {
    seriesData[0].data.push([key, +engagementData[key][0].value]);
  }

  Highcharts.chart('chart-impact-engagement', {
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