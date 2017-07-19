"use strict"

$(function() {
  let demographicsData = basicParticipantsJson.Demographics["Demographic - Ethnicity"].Counts;
  let description = demographicsData[0].description;
  
  //   ===================== COLUMN CHART =====================
  let seriesData = [{
    "name": "value",
    "data": []
  }];
  
  for (let obj of demographicsData) {
    seriesData[0].data.push( [obj.breakdown, +obj.value] );
  }

  Highcharts.chart('chart-demographics-ethnicity', Highcharts.merge(columnChartSettings, {
    title: {
      text: description
    },
    series: seriesData
  }));
    
  //   ===================== PIE CHART =====================
  let pieSeriesData = [{
    "name": "value",
    "data": []
  }];
  
  for (let obj of demographicsData) {
    pieSeriesData[0].data.push( { "name": obj.breakdown, "y": parseInt(obj.percentage) } );
  }
    
  Highcharts.chart('chart-demographics-ethnicity-percentage', Highcharts.merge(pieChartSettings, {
      title: {
          text: description + " (Percentage)"
      },
      series: pieSeriesData
  }));
  
});