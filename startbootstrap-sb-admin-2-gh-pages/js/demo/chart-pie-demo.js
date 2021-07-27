// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var myBooks2 = [
  {
    "Labels": "АРДТ",
    "close": 526
  },
  {
    "Labels": "ВРДТ",
    "close": 391
  },
  {
    "Labels": "ЗРДТ",
    "close": 298
  },
  {
    "Labels": "СРДТ",
    "close": 237
  },
  {
    "Labels": "ЦРДТ",
    "close": 471
  },
  {
    "Labels": "ЮРДТ",
    "close": 292
  }
]

var labels = myBooks2.map(function (e) {
  return e.Labels
})

var data = myBooks2.map(function (e) {
  return e.close
})

var ctx = document.getElementById("myPieChart");
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    labels: labels,
    datasets: [{
      label: '# of Votes',
      // data: [12, 19, 3, 5, 2, 3],
      data: data,
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1,
      hoverOffset: 4
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

var ctx2 = document.getElementById("myPieChart2");
var myPieChart2 = new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ["СФ", "ЦА", "ГЦУСТ", "ДАИКТ", "ДИС", "ДКБ", "ДРБ", "ДРБ", "ДТК", "ОДС"],
    datasets: [{
      data: [35, 7, 29, 1, 2, 7, 4, 8, 7],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#e74a3b', '#1c606a', '#6f42c1', '#78261f', '#e9aa0b', '#484a54'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});

var ctx3 = document.getElementById("myPieChart3");
var myPieChart3 = new Chart(ctx3, {
  type: 'doughnut',
  data: {
    labels: ["СФ", "ЦА", "ГЦУСТ", "ДАИКТ", "ДИС", "ДКБ", "ДРБ", "ДРБ", "ДТК", "ОДС"],
    datasets: [{
      data: [35, 7, 29, 1, 2, 7, 4, 8, 7],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#e74a3b', '#1c606a', '#6f42c1', '#78261f', '#e9aa0b', '#484a54'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
