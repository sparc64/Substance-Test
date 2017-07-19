"use strict"

$(function () {
  let attendanceData = basicParticipantsJson["Attendance and Delivery"]["Delivery"];
  let originalTimeValue = attendanceData["Number of session hours delivered in report period"][0].value;
  let decimalTime = getDecimalTime(originalTimeValue);
  
  Highcharts.chart('chart-delivery-hours', Highcharts.merge( solidgaugeChartSettings, {
      title: { text: "Number of session hours delivered in report period" },
      yAxis: {
          max: decimalTime,
      },
      series: [{
          data: [decimalTime],
          dataLabels: {
              format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                  ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                     '<span style="font-size:12px;color:silver">Hours</span></div>'
          },
      }]
  }));
});