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

  Highcharts.chart('chart-impact-engagement', Highcharts.merge( barChartSettings, { series: seriesData } ));
});