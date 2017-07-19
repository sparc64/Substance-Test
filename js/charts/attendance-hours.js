"use strict"

$(function () {
  let attendanceData = basicParticipantsJson["Attendance and Delivery"]["Attendance"];
  
  let originalTimeValue = attendanceData["Aggregate contact hours at all Sessions"][0].value;
  let decimalTime = getDecimalTime(originalTimeValue);

  Highcharts.chart('chart-attendance-hours', Highcharts.merge( solidgaugeChartSettings, {
      title: { text: "Aggregate contact hours at all Sessions" },
      yAxis: {
          max: 3000, // Need additional data to set this value
      },
      series: [{
          data: [decimalTime],
          dataLabels: {
              format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                  ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">' + originalTimeValue + '</span><br/>' +
                     '<span style="font-size:12px;color:silver">Hours</span></div>'
          },
      }]
  }));
});