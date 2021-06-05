export function h_min(timestamp) {
  var date = new Date(timestamp * 1000);

  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();

  return hours + ":" + minutes.substr(-2);
}

export function date_h_min(timestamp) {
  var time = new Date(timestamp * 1000);

  var date = time.toJSON().slice(0, 10);
  date = date.split("-");
  date.reverse();

  var hours = time.getHours();
  var minutes = "0" + time.getMinutes();

  return date.join(".") + " " + hours + ":" + minutes.substr(-2);
}

export function minutes_diff(start, end) {
  var startDate = new Date(start * 1000);
  var endDate = new Date(end * 1000);

  var diff = (startDate.getTime() - endDate.getTime()) / 1000;
  diff /= 60;
  return Math.abs(Math.round(diff));
}

export function h_min_diff_to(startTimestamp) {
  var now = new Date();
  var matchStart = new Date(startTimestamp * 1000);

  var diff = matchStart.getTime() - now.getTime();

  var h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((diff % (1000 * 60)) / 1000);

  if (h < 0) return "-";

  h = "0" + h;
  m = "0" + m;
  s = "0" + s;

  return h.substr(-2) + ":" + m.substr(-2) + ":" + s.substr(-2);
}
