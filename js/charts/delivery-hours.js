"use strict"

$(function () {
  let attendanceData = basicParticipantsJson["Attendance and Delivery"]["Delivery"];
  let originalTimeValue = attendanceData["Number of session hours delivered in report period"][0].value;
  let decimalTime = getDecimalTime(originalTimeValue);
  
  Highcharts.chart('chart-delivery-hours', {
      chart: {
          type: 'solidgauge'
      },
      title: { text: "Number of session hours delivered in report period" },
      pane: {
          center: ['50%', '85%'],
          startAngle: -90,
          endAngle: 90,
          size: '140%',
          background: {
              backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
              innerRadius: '60%',
              outerRadius: '100%',
              shape: 'arc'
          }
      },
      tooltip: {
          enabled: false
      },
      yAxis: {
          min: 0,
          max: decimalTime,
          lineWidth: 0,
          minorTickInterval: null,
          tickAmount: 2,
          labels: {
              y: 16
          }
      },
      plotOptions: {
          solidgauge: {
              dataLabels: {
                  y: -44,
                  borderWidth: 0,
                  useHTML: true
              }
          }
      },
      series: [{
          data: [decimalTime],
          dataLabels: {
              format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                  ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                     '<span style="font-size:12px;color:silver">Hours</span></div>'
          },
      }]
  });
});