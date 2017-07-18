"use strict"

$(function () {
  let attendanceData = basicParticipantsJson["Attendance and Delivery"]["Attendance"];
  
  let originalTimeValue = attendanceData["Aggregate contact hours at all Sessions"][0].value;
  let decimalTime = getDecimalTime(originalTimeValue);

  Highcharts.chart('chart-attendance-hours', {
      chart: {
          type: 'solidgauge'
      },
      title: { text: "Aggregate contact hours at all Sessions" },
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
          max: 3000, // Need additional data to set this value
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
          data: [decimalTime],
          dataLabels: {
              format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                  ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">' + originalTimeValue + '</span><br/>' +
                     '<span style="font-size:12px;color:silver">Hours</span></div>'
          },
      }]
  });
});