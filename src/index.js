import {
  displayLocation,
  displayCurrentConditions,
  displayTodayConditions,
  displayForecast,
} from "./dom/displayWeatherData";
import loader from "./dom/loader";
import "./main.css";
import Weather from "./module/Weather";

const searchInput = document.querySelector(".nav-search-input");
const searchButton = document.querySelector(".nav-search-button");

searchButton.addEventListener("click", start);

loader.show();
start();

async function start() {
  loader.show();
  const defaultLocation = Intl.DateTimeFormat()
    .resolvedOptions()
    .timeZone.split("/")
    .pop()
    .split("_")
    .join("");
  const query = searchInput.value ? searchInput.value : defaultLocation;
  const [data, error] = await Weather.getWeather(query);

  console.log(data);

  loader.hide();
  if (data === null) {
    // TODO: Add error display
    return;
  }

  displayLocation(data);
  displayCurrentConditions(data);
  displayTodayConditions(data);
  displayForecast(data);
}
