"use strict"

$(function () {
  let attendanceData = basicParticipantsJson["Attendance and Delivery"]["Delivery"];
  let numberOfSessions = +attendanceData["Number of sessions delivered in report period"][0].value;
  
  Highcharts.chart('chart-delivery-sessions', Highcharts.merge( solidgaugeChartSettings, {
      title: { text: "Number of sessions delivered in report period" },
      yAxis: {
          max: numberOfSessions,
      },
      series: [{
          data: [numberOfSessions],
          dataLabels: {
              format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                  ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                     '<span style="font-size:12px;color:silver">Sessions</span></div>'
          },
      }]
  }));
});