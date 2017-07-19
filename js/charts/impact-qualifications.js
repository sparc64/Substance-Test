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

  Highcharts.chart('chart-impact-qualifications', Highcharts.merge( barChartSettings, { series: seriesData } ));
});