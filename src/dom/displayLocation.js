export default function displayLocation(data) {
  const address = document.querySelector(".location-address");
  const timezone = document.querySelector(".location-timezone");
  const datetimeDate = document.querySelector(".location-datetime-date");
  const datetimeTime = document.querySelector(".location-datetime-time");
  const description = document.querySelector(".location-description");
  console.log(description);

  address.textContent = data.address;
  timezone.textContent = data.timezone;
  datetimeDate.textContent = data.datetime.date;
  datetimeTime.textContent = data.datetime.time;
  description.textContent = data.description;
}
