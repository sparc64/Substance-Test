"use strict"

$(function () {
  let attendanceData = basicParticipantsJson["Attendance and Delivery"]["Delivery"];
  let numberOfSessions = +attendanceData["Number of sessions delivered in report period"][0].value;
  
  Highcharts.chart('chart-delivery-sessions', {
      chart: {
          type: 'solidgauge'
      },
      title: { text: "Number of sessions delivered in report period" },
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
          max: numberOfSessions,
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
          data: [numberOfSessions],
          dataLabels: {
              format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                  ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                     '<span style="font-size:12px;color:silver">Sessions</span></div>'
          },
      }]
  });
});