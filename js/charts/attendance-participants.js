"use strict"

let attendanceData = basicParticipantsJson["Attendance and Delivery"]["Attendance"];

$(function () { 
    Highcharts.chart('chart-attendance-participants', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Number of participants in contact during report period'
        },
        xAxis: {
            categories: ['']
        },
        yAxis: {
            title: {
                text: 'Participants'
            },
            stackLabels: {
              enabled: true,
              style: {
                  fontWeight: 'bold',
                  color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
              }
           }
        },
        plotOptions: {
            series: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                }
            }
        },
        series: [{
            type: 'bar',
            name: "Number of 'starter' participants",
            data: [+attendanceData["Number of 'starter' participants"][0].value]
        }, {
            type: 'bar',
            name: "Number of currently 'involved' participants",
            data: [+attendanceData["Number of currently 'involved' participants"][0].value]
        },{
            type: 'bar',
            name: "Number of 'not currently attending' participants",
            data: [+attendanceData["Number of 'not currently attending' participants"][0].value]
        }]
    });
});