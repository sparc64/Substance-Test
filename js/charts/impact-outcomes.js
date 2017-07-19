"use strict"

$(function() {
  let outcomesData = basicParticipantsJson.Impact.Outcomes.Count;

  let seriesData = [{
    "name": "value",
    "data": []
  }];
  
  for (let obj of outcomesData) {
    seriesData[0].data.push( [obj.breakdown, +obj.value] );
  }

  Highcharts.chart('chart-impact-outcomes', Highcharts.merge( barChartSettings, { series: seriesData } ));
});