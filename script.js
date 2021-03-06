/**
 * Created by samanthamusselman on 7/27/16.
 */

google.charts.load('current', {packages: ['corechart', 'bar', 'geochart']});
google.charts.setOnLoadCallback(drawBarChart);
google.charts.setOnLoadCallback(drawPieChart);
google.charts.setOnLoadCallback(drawGeoChart);

function drawBarChart() {
    var chartOneData = google.visualization.arrayToDataTable([
        ['Number of Participants', 'Participants', { role: 'style' }],
        [18, 0, 'color: green'],
        [19, 2, 'color: blue'],
        [20, 1, 'color: purple'],
        [21, 0, 'color: green'],
        [22, 4, 'color: blue'],
        [25, 3, 'color: purple'],
        [26, 7, 'color: green'],
        [28, 4, 'color: blue'],
        [29, 6, 'color: purple'],
        [30, 4, 'color: green']
    ]);

    var chartOneOptions = {
        title: "Ages of Participants",
        height: 500,
        width: 800,
        hAxis: {
            title: "Number of Participants"
        },
        vAxis: {
            title: "Age",
            minValue: 18
        },
        colors: ['#0B2E59']
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

function drawGeoChart() {
    var geoChartData = google.visualization.arrayToDataTable([
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

    var geoChartOptions = {
        backgroundColor: '#C4C9CE',
        colors: ['#00DFFC', '#005F6B'],
        magnifyingGlass: {enable: true},
        region: '150'
    };

    var geoChart = new google.visualization.GeoChart(document.getElementById('chartThree'));

    geoChart.draw(geoChartData, geoChartOptions);
}
