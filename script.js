/**
 * Created by samanthamusselman on 7/27/16.
 */

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBarChart);
google.charts.setOnLoadCallback(drawPieChart);

function drawBarChart() {
    var chartOneData = google.visualization.arrayToDataTable([
        ['Number of Participants', 'Participants'],
        [18, 0],
        [19, 2],
        [20, 1],
        [21, 0],
        [22, 4],
        [25, 3],
        [26, 7],
        [28, 4],
        [29, 6],
        [30, 4]
    ]);

    var chartOneOptions = {
        title: "Ages of Participants",
        chartArea: {width: 500},
        hAxis: {
            title: "Number of Participants"
        },
        vAxis: {
            title: "Age",
            minValue: 18
        }
    };

    var chartOne = new google.visualization.BarChart(document.getElementById('chartOne'));

    chartOne.draw(chartOneData, chartOneOptions);

};

function drawPieChart() {

    var pieChartData = google.visualization.arrayToDataTable([
        ['Country', 'Number of Participants'],
        ['Venezuela', 1],
        ['Argentina', 3],
        ['Russia', 2],
        ['China', 4],
        ['Bulgaria', 1],
        ['United Kingdom', 1],
        ['United States', 2],
        ['Canada', 1],
        ['Mexico', 3],
        ['Tanzania', 1],
        ['Swaziland', 1],
        ['India', 3],
        ['Austria', 1],
        ['Poland', 1]
    ]);

    var pieChartOptions = {
        title: "Participants' Home Countries",
        chartArea: {
            width: 500,
            height: 400
        }
    };

    var pieChart = new google.visualization.PieChart(document.getElementById('chartTwo'));

    pieChart.draw(pieChartData, pieChartOptions);
}

// Sample Data for Later
//var countries = {
//    Venezuela: 1,
//    Argentina: 3,
//    Russia: 2,
//    China: 4,
//    Bulgaria: 1,
//    'United Kingdom': 1,
//    'United States': 2,
//    Canada: 1,
//    Mexico: 3,
//    Tanzania: 1,
//    Swaziland: 1,
//    India: 3,
//    Austria: 1,
//    Poland: 1
//};
//
//var ages = {
//    18: 0,
//    19: 2,
//    20: 1,
//    21: 0,
//    22: 4,
//    25: 3,
//    26: 7,
//    27: 5,
//    28: 4,
//    29: 6,
//    30: 4
//};
//
//var scores = [98, 56, 77, 87, 96, 94, 89, 75, 99, 88, 77, 89, 96, 99, 83, 82, 71, 60, 95, 75, 86];