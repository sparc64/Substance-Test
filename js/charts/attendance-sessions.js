"use strict"

$(function () {
  let attendanceData = basicParticipantsJson["Attendance and Delivery"]["Attendance"];

  Highcharts.chart('chart-attendance-sessions', Highcharts.merge( solidgaugeChartSettings, {
      title: { text: "Aggregate attendance at all sessions" },
      yAxis: {
          max: 1200, // Need additional data to set this value
      },
      series: [{
          data: [+attendanceData["Aggregate attendance at all sessions"][0].value],
          dataLabels: {
              format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                  ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                     '<span style="font-size:12px;color:silver">Sessions</span></div>'
          },
      }]
  }));
});