"use strict"

$(function() {
  let demographicsData = basicParticipantsJson.Demographics["Demographic - Other"]["Counts - Has this person been referred to you as part of the MOPAC funded sessions?"];
  let description = demographicsData[0].description;
  
  //   ===================== COLUMN CHART =====================
  let seriesData = [{
    "name": "value",
    "data": []
  }];
  
  for (let obj of demographicsData) {
    seriesData[0].data.push( [obj.breakdown, +obj.value] );
  }

  Highcharts.chart('chart-demographics-mopac', {
    chart: {
      type: 'column'
    },
    title: {
      text: description
    },
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
    
  //   ===================== PIE CHART =====================
  let pieSeriesData = [{
    "name": "value",
    "data": []
  }];
  
  for (let obj of demographicsData) {
    pieSeriesData[0].data.push( { "name": obj.breakdown, "y": parseInt(obj.percentage) } );
  }
    
  Highcharts.chart('chart-demographics-mopac-percentage', {
      chart: {
          type: 'pie'
      },
      title: {
          text: description + " (Percentage)"
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false
              },
              showInLegend: true
          }
      },
      series: pieSeriesData
  });
  
});