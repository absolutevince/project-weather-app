export function formatTime(time) {
  let timeHour = Number(time.substring(0, 2));

  if (timeHour[0] === "0") {
    timeHour = timeHour[1];
  }

  let ext;
  let hour;

  if (timeHour >= 12) {
    ext = "PM";
    hour = timeHour - 12;
  } else {
    ext = "AM";
    hour = timeHour;
  }

  return hour + time.substring(2, 5) + " " + ext;
}
