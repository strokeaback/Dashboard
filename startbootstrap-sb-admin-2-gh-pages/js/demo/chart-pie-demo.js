// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var myBooks3 = [
  {
    "Name": "Блок прочих функций",
    "Count": "302"
  },
  {
    "Name": "Восточная РДТ",
    "Count": "662"
  },
  {
    "Name": "Главный центр управления сетями телекомм",
    "Count": "530"
  },
  {
    "Name": "Головная структурная единица",
    "Count": "66"
  },
  {
    "Name": "Головное подразделение",
    "Count": "2"
  },
  {
    "Name": "Головное предприятие ОДТ",
    "Count": "59"
  },
  {
    "Name": "Головной аппарат",
    "Count": "45"
  },
  {
    "Name": "Дивизион по корпоративному бизнесу",
    "Count": "232"
  },
  {
    "Name": "Дивизион по розничному бизнесу",
    "Count": "170"
  },
  {
    "Name": "Дирекция \"Академия инфоком. технологий\"",
    "Count": "26"
  },
  {
    "Name": "Дирекция информационных систем",
    "Count": "86"
  },
  {
    "Name": "Дирекция стр.телеком.инфрастр",
    "Count": "23"
  },
  {
    "Name": "Дирекция Телеком Комплект",
    "Count": "77"
  },
  {
    "Name": "Западная РДТ",
    "Count": "594"
  },
  {
    "Name": "РДТ Алматытелеком",
    "Count": "935"
  },
  {
    "Name": "РДТ Астанателеком",
    "Count": "40"
  },
  {
    "Name": "Северная РДТ",
    "Count": "480"
  },
  {
    "Name": "Северо-Казахстанская ОДТ",
    "Count": "1"
  },
  {
    "Name": "Сервисная Фабрика",
    "Count": "417"
  },
  {
    "Name": "Центральная РДТ",
    "Count": "1181"
  },
  {
    "Name": "Центральный аппарат",
    "Count": "147"
  },
  {
    "Name": "Южная РДТ",
    "Count": "408"
  }
]

var labels = myBooks3.map(function (e) {
  return e.Name
})

var data = myBooks3.map(function (e) {
  return e.Count
})

var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: labels,
    datasets: [{
      data: data,
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc', '#e74a3b', '#1c606a', '#6f42c1', '#78261f', '#e9aa0b', '#484a54', '#484a54', '#484a54', '#0D1321', '#1D2D44', '#3E5C76', '#748CAB', '#F0EBD8', '#D6D2D2', '#F1E4F3', '#F4BBD3', '#F686BD', '#FE5D9F', '#423B0B'],
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
