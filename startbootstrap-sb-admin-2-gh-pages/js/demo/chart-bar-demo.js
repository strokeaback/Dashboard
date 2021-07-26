// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

/*function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}*/

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["АРДТ", "ВРДТ", "ЗРДТ", "СРДТ", "ЦРДТ", "ЮРДТ"],
    datasets: [
    //   label: "Mediana",
    //   backgroundColor: "#4edf88",
    //   hoverBackgroundColor: "#2e59d9",
    //   borderColor: "#4edf88",
    //   data: [10, 14, 13, 12],
    //   order: 3
    // }, {
    {
      label: "Average",
      backgroundColor: "#2e59d9",
      data: [15, 18, 14, 14, 18, 21],
      order: 2
    }, {
      label: "Mode",
      backgroundColor: "#ed2828",
        data: [10, 13, 8, 7, 15, 23],
        order: 3
    }, {
      label: 'Mediana',
      Color: "#4edf88",
      borderColor: "#3be755",
      pointHoverRadius: 3,
      pointBackgroundColor: "#3be755",
      pointBorderColor: "#3be755",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [10, 13, 8, 7, 15, 21],
      type: 'line',
      // this dataset is drawn on top
      order: 1
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 24,
          maxTicksLimit: 5,
          padding: 10,
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    // legend: {
    //   display: false
    // },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
  }
});

var ctx2 = document.getElementById("myBarChart2");
var myBarChart2 = new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ["B2B", "B2C", "Другие", "Техблок"],
    datasets: [{
      label: "Mediana",
      backgroundColor: "#4edf88",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4edf88",
      data: [10, 14, 13, 12],
      order: 3
    }, {
      label: 'Average',
      Color: "#4edf88",
      borderColor: "#2e59d9",
      pointHoverRadius: 3,
      pointBackgroundColor: "#2e59d9",
      pointBorderColor: "#2e59d9",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [15, 19, 17, 16],
      type: 'line',
      // this dataset is drawn on top
      order: 2
    }, {
      label: 'Mode',
      Color: "#4edf88",
      borderColor: "#e74a3b",
      pointHoverRadius: 3,
      pointBackgroundColor: "#e74a3b",
      pointBorderColor: "#e74a3b",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [8, 8, 7, 5],
      type: 'line',
      // this dataset is drawn on top
      order: 1
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 20,
          maxTicksLimit: 5,
          padding: 10,
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    // legend: {
    //   display: false
    // },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
  }
});

var ctx3 = document.getElementById("myBarChart3");
var myBarChart3 = new Chart(ctx3, {
  type: 'bar',
  data: {
    labels: ["ГЦУСТ", "ДАИКТ", "ДИС", "ДКБ", "ДРБ", "ДТК", "ОДС", "СФ", "ЦА"],
    datasets: [
    //   label: "Mediana",
    //   backgroundColor: "#4edf88",
    //   hoverBackgroundColor: "#2e59d9",
    //   borderColor: "#4edf88",
    //   data: [10, 14, 13, 12],
    //   order: 3
    // }, {
    {
      label: "Average",
      backgroundColor: "#2e59d9",
      data: [16, 21, 23, 15, 13, 15, 16, 19, 17],
      order: 2
    }, {
      label: "Mode",
      backgroundColor: "#ed2828",
        data: [9, null, null, 9, 1, 7, 8, 7, 16],
        order: 3
    }, {
      label: 'Mediana',
      Color: "#4edf88",
      borderColor: "#3be755",
      pointHoverRadius: 3,
      pointBackgroundColor: "#3be755",
      pointBorderColor: "#3be755",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [14, 21, 18, 9, 9, 10, 15, 14, 12],
      type: 'line',
      // this dataset is drawn on top
      order: 1
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 6
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 24,
          maxTicksLimit: 5,
          padding: 10,
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
//     legend: {
//       display: false
//     },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
  }
});
