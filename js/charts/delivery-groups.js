"use strict"

$(function () {
  let attendanceData = basicParticipantsJson["Attendance and Delivery"]["Delivery"];
  let numberOfGroups = +attendanceData["Number of session groups delivered in report period"][0].value;
  
  Highcharts.chart('chart-delivery-groups', Highcharts.merge( solidgaugeChartSettings, {
      title: { text: "Number of session groups delivered in report period" },
      yAxis: {
          max: numberOfGroups,
      },
      series: [{
          data: [numberOfGroups],
          dataLabels: {
              format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                  ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                     '<span style="font-size:12px;color:silver">Groups</span></div>'
          },
      }]
  }));
});