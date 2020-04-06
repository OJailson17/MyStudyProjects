function clock() {
  var data = new Date();
  var hour = data.getHours();
  var minute = data.getMinutes();
  var second = data.getSeconds();

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  var horas = hour + ":" + minute + ":" + second;
  document.getElementById('rel').value = horas;
}

var time = setInterval(clock, 1000);