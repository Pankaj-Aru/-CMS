

import $ from 'jquery';
import "https://cdnjs.cloudflare.com/ajax/libs/raphael/2.3.0/raphael.min.js"

import Morris from "https://cdnjs.cloudflare.com/ajax/libs/morris.js/0.2.7/morris.min.js";

$(document).ready(function() {
    barChart();
    lineChart();
    areaChart();
    donutChart();
  
    $(window).resize(function() {
      window.barChart.redraw();
      window.lineChart.redraw();
      window.areaChart.redraw();
      window.donutChart.redraw();
    });
  });
  
  function barChart() {
    window.barChart = Morris.Bar({
      element: 'bar-chart',
      data: [
        { y: '2006', a: 100, b: 90 },
        { y: '2007', a: 75,  b: 65 },
        { y: '2008', a: 50,  b: 40 },
        { y: '2009', a: 75,  b: 65 },
        { y: '2010', a: 50,  b: 40 },
        { y: '2011', a: 75,  b: 65 },
        { y: '2012', a: 100, b: 90 }
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Series A', 'Series B'],
      lineColors: ['#1e88e5','#ff3321'],
      lineWidth: '3px',
      resize: true,
      redraw: true
    });
  }
  
  function lineChart() {
    window.lineChart = Morris.Line({
      element: 'line-chart',
      data: [
        { y: '2006', a: 80, b: 90 , c:20},
        { y: '2007', a: 75 },
        { y: '2008', a: 50,  b: 40 , c:55},
        { y: '2009', a: 75,  b: 65 },
        { y: '2010',   b: 40 },
        { y: '2011', a: 75,  b: 65, c:45 },
        { y: '2012', a: 100, b: 90 },
        { y: '2013',  b: 65 },
        { y: '2014', a: 50 },
        { y: '2015', a: 75,  b: 65 },
        { y: '2016', a: 100 },
        { y: '2017', a: 100, b: 90 },
        { y: '2018',   b: 65 },
        { y: '2019', a: 50,  b: 40 },
        { y: '2020', a: 75,  b: 65 },
        { y: '2025', a: 100, b: 90 }
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Series A', 'Series B'],
      lineColors: ['#1e88e5','#ff3321'],
      lineWidth: '3px',
      resize: true,
      redraw: true
    });
  }
  
  function areaChart() {
    window.areaChart = Morris.Area({
      element: 'area-chart',
      data: [
        { y: '2006', a: 100, b: 90 },
        { y: '2007',   b: 65 },
        { y: '2008', a: 50,  b: 40 },
        { y: '2009', a: 75 },
        { y: '2010', a: 50,  b: 40 },
        { y: '2011', a: 75,  b: 65 },
        { y: '2012', a: 100, b: 90 }
      ],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Series A', 'Series B'],
      lineColors: ['#1e88e5','#ff3321'],
      lineWidth: '3px',
      resize: true,
      redraw: true
    });
  }
  
  function donutChart() {
    window.donutChart = Morris.Donut({
    element: 'donut-chart',
    data: [
      {label: "Download Sales", value: 50},
      {label: "In-Store Sales", value: 25},
      {label: "Mail-Order Sales", value: 5},
      {label: "Uploaded Sales", value: 10},
      {label: "Video Sales", value: 10}
    ],
    resize: true,
    redraw: true
  });
  }
  
//   function pieChart() {
//     var paper = Raphael("pie-chart");
//   paper.piechart(
//     100, // pie center x coordinate
//     100, // pie center y coordinate
//     90,  // pie radius
//      [18.373, 18.686, 2.867, 23.991, 9.592, 0.213], // values
//      {
//      legend: ["Windows/Windows Live", "Server/Tools", "Online Services", "Business", "Entertainment/Devices", "Unallocated/Other"]
//      }
//    );
//   }


// Configuartion of Line chartsssssssssssssss
// var data = [
//     { y: '2014', a: 50, b: 90},
//     { y: '2015', a: 65,  b: 75},
//     { y: '2016', a: 50,  b: 50},
//     { y: '2017', a: 75,  b: 60},
//     { y: '2018', a: 80,  b: 65},
//     { y: '2019', a: 90,  b: 70},
//     { y: '2020', a: 100, b: 75},
//     { y: '2021', a: 115, b: 75},
//     { y: '2022', a: 120, b: 85},
//     { y: '2023', a: 145, b: 85},
//     { y: '2024', a: 160, b: 95}
//   ],
//   config = {
//     data: data,
//     xkey: 'y',
//     ykeys: ['a', 'b'],
//     labels: ['Total Income', 'Total Outcome'],
//     fillOpacity: 0.6,
//     hideHover: 'auto',
//     behaveLikeLine: true,
//     resize: true,
//     pointFillColors:['#ffffff'],
//     pointStrokeColors: ['black'],
//     lineColors:['gray','red']
// };
// config.element = 'area-chart';
// Morris.Area(config);
// config.element = 'line-chart';
// Morris.Line(config);