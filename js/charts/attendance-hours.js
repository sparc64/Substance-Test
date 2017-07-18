"use strict"

$(function () {
  let attendanceData = basicParticipantsJson["Attendance and Delivery"]["Attendance"];

  Highcharts.chart('chart-attendance-hours', {
      chart: {
          type: 'solidgauge'
      },
      title: { text: "Aggregate attendance at all sessions" },
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
          max: 1200, // Need additional data to set this value
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
          name: 'Speed',
          data: [+attendanceData["Aggregate attendance at all sessions"][0].value],
          dataLabels: {
              format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                  ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                     '<span style="font-size:12px;color:silver">Sessions</span></div>'
          },
      }]
  });
});