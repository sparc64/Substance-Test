"use strict"

function getDecimalTime(timeString) {
  let hours = parseInt(timeString);
  let minutes = parseInt( timeString.slice(-2) );
  let decimalMinutes = ( minutes * 100 ) / 60;
  
  return parseFloat(hours + '.' + decimalMinutes);
}

const barChartSettings = {
    chart: {
      type: 'bar'
    },
    title: null,
    xAxis: {
      type: 'category'
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    //series: seriesData
  };

const columnChartSettings = {
    chart: {
      type: 'column'
    },
//     title: {
//       text: description
//     },
    xAxis: {
      type: 'category'
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true
        }
      }
    },
    //series: seriesData
  };

const pieChartSettings = {
      chart: {
          type: 'pie'
      },
//       title: {
//           text: description + " (Percentage)"
//       },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
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
      //series: pieSeriesData
  };

const solidgaugeChartSettings = {
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
//           max: 1200, // Need additional data to set this value
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
//       series: [{
//           data: [+attendanceData["Aggregate attendance at all sessions"][0].value],
//           dataLabels: {
//               format: '<div style="text-align:center"><span style="font-size:25px;color:' +
//                   ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
//                      '<span style="font-size:12px;color:silver">Sessions</span></div>'
//           },
//       }]
  };