"use strict"

$(function () {
  let attendanceData = basicParticipantsJson["Attendance and Delivery"]["Attendance"];
  
  Highcharts.chart('chart-attendance-percentage', {
      chart: {
          type: 'pie'
      },
      title: {
          text: 'Percentage of participants in contact during report period'
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
  });
});