/*EXCHANGE RATES*/
var data = {
    labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
    datasets: [{
        backgroundColor: "rgba(0,0,0,0)",
        borderColor: "rgba(91,37,245, 1)",
        borderWidth: 4.5,
        data: [10.2, 10, 13, 12, 15, 13, 14.5, 11, 13.5, 13, 11],
    }]
};

var options = {
    maintainAspectRatio: false,
    legend: {
        display: false
    },
    scales: {
        yAxes: [{
            stacked: true,
            gridLines: {
                display: true,
                color: "rgb(146, 142, 142)"
            },
            ticks: {
                maxTicksLimit: 5,
                min: 9,
                max: 16
            }
        }],
        xAxes: [{
            gridLines: {
                display: false
            }
        }]
    },
    elements: {
        point: {
            radius: 0
        }
    }
};


var ctx = document.getElementById('exchangeRates').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});

/*LAST COSTS*/
var data = {
    labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
    datasets: [{
        label: 'Spending',
        backgroundColor: "rgb(188, 185, 211)",
        data: [500, 300, 800, 150, 200, 150, 800, 200, 800, 100],
    }, {
        label: 'Arrival',
        backgroundColor: "rgba(91,37,245, 1)",
        data: [1000, 800, 1800, 1100, 1000, 800, 1800, 1600, 1800, 1200],
    }, ]
};

var options = {
    cornerRadius: 0,
    maintainAspectRatio: false,
    legend: {
        position: 'bottom',
        labels: {
            fontColor: "rgb(146, 142, 142)",
            boxWidth: 20,
            padding: 10
        }
    },
    scales: {
        yAxes: [{
            gridLines: {
                display: true,
                color: "rgb(146, 142, 142)"
            },
            ticks: {
                maxTicksLimit: 5,
            }
        }],
        xAxes: [{}]
    }
};


var ctx = document.getElementById('last_costs').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});

/*EFFICIENCY CHART*/

var data = {
    labels: ["Spend", "Earned"],
    datasets: [{
        label: "Population (millions)",
        backgroundColor: ["rgba(91,37,245, 1)", "#dad7e9"],
        data: [65, 35]
    }]
};

var options = {
    maintainAspectRatio: false,
    legend: {
        position: 'bottom',
        labels: {
            fontColor: "rgb(146, 142, 142)",
            boxWidth: 20,
            padding: 10
        }
    },
};


var ctx = document.getElementById('efficiency').getContext('2d');
var myLineChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});