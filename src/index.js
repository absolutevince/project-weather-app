import displayLocation from "./dom/displayLocation";
import displayWeatherCondition from "./dom/displayWeatherCondition";
import locationDataTemplate from "./data_templates/locationDataTemplate";
import weatherConditionDataTemplate from "./data_templates/weatherConditionDataTemplate";
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
  const [data, error] = await Weather.getWeatherByLocation(query);

  loader.hide();
  if (data === null) {
    // TODO: Add error display
    return;
  }
  // LOCATION
  const locationData = locationDataTemplate(data);
  console.log(locationData);
  displayLocation(locationData);

  // CONDITION
  const weatherConditionData = weatherConditionDataTemplate(data);
  displayWeatherCondition(weatherConditionData);
}
