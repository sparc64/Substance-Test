"use strict"

$(function () {
  let attendanceData = basicParticipantsJson["Attendance and Delivery"]["Attendance"];
  
  Highcharts.chart('chart-attendance-percentage', Highcharts.merge(pieChartSettings, {
      title: {
          text: 'Percentage of participants in contact during report period'
      },
      series: [{
          name: 'Participants',
          colorByPoint: true,
          data: [{
              name: "Number of 'starter' participants",
              y: parseFloat(attendanceData["Number of 'starter' participants"][0].percentage),
          }, {
              name: "Number of currently 'involved' participants",
              y: parseFloat(attendanceData["Number of currently 'involved' participants"][0].percentage),
          }, {
              name: "Number of 'not currently attending' participants",
              y: parseFloat(attendanceData["Number of 'not currently attending' participants"][0].percentage),
          }],
      }]
  }));
});