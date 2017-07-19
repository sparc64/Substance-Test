"use strict"

$(function () {
  let attendanceData = basicParticipantsJson["Attendance and Delivery"]["Attendance"];
  
  let originalTimeValue = attendanceData["Average contact hours (per participant)"][0].value;
  let decimalTime = getDecimalTime(originalTimeValue);
  
  Highcharts.chart('chart-attendance-hours-average', Highcharts.merge( solidgaugeChartSettings, {
      title: { text: "Average contact hours (per participant)" },
      yAxis: {
          max: Math.ceil(decimalTime),
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