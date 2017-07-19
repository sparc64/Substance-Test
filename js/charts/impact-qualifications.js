"use strict"

$(function() {
  let qualificationsData = basicParticipantsJson.Impact.Qualifications.Count;
  
  let seriesData = [{
    "name": "value",
    "data": []
  }];
  
  for (let obj of qualificationsData) {
    seriesData[0].data.push( [obj.breakdown, +obj.value] );
  }

  Highcharts.chart('chart-impact-qualifications', {
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