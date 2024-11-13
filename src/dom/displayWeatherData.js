import {
  forecastDataTemplate,
  locationDataTemplate,
  todayConditionsDataTemplate,
  weatherConditionDataTemplate,
} from "../data_templates/templateData";
import { speedMetricKmh, tempMetricCelsius } from "../module/metricString";

export function displayCurrentConditions(data) {
  const template = weatherConditionDataTemplate(data);
  const condition = document.querySelector(".weather_condition-condition");
  const temperature = document.querySelector(".weather_condition-temperature");
  const feelsLike = document.querySelector(".weather_condition-feels_like");
  const windDirection = document.querySelector(
    ".weather_condition-wind_direction"
  );
  const windGust = document.querySelector(".weather_condition-wind_gust");
  const windSpeed = document.querySelector(".weather_condition-wind_speed");

  condition.textContent = template.conditions;
  temperature.textContent = template.temperature;
  feelsLike.textContent = template.feelsLike;
  windDirection.textContent = template.windDirection;
  windGust.textContent = template.windGust;
  windSpeed.textContent = template.windSpeed;
}

export function displayTodayConditions(data) {
  const template = todayConditionsDataTemplate(data);
  const condition = document.querySelector(".today-conditions");
  const tempMax = document.querySelector(".today-temperature-max");
  const tempMin = document.querySelector(".today-temperature-min");
  const temp = document.querySelector(".today-temperature");
  const sunrise = document.querySelector(".today-sunrise");
  const sunset = document.querySelector(".today-sunset");

  condition.textContent = template.conditions;
  tempMax.textContent = template.tempMax;
  tempMin.textContent = template.tempMin;
  temp.textContent = template.temp;
  sunrise.textContent = template.sunrise;
  sunset.textContent = template.sunset;
}

export function displayLocation(data) {
  const template = locationDataTemplate(data);
  const address = document.querySelector(".location-address");
  const timezone = document.querySelector(".location-timezone");
  const datetimeDate = document.querySelector(".location-datetime-date");
  const datetimeTime = document.querySelector(".location-datetime-time");
  const description = document.querySelector(".location-description");

  address.textContent = template.address;
  timezone.textContent = template.timezone;
  datetimeDate.textContent = template.datetime.date;
  datetimeTime.textContent = template.datetime.time;
  description.textContent = template.description;
}

export function displayForecast(data) {
  const template = forecastDataTemplate(data);
  const container = document.querySelector(".forecast-container");

  container.innerHTML = "";
  template.forEach((day) => {
    const wrapper = document.createElement("li");
    const dayName = document.createElement("h3");
    const date = document.createElement("span");
    const conditions = document.createElement("p");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");

    wrapper.className = "day-wrapper";
    dayName.className = "day-day";
    date.className = "day-date";

    conditions.className = "day-conditions";

    dayName.textContent = day.day;
    date.textContent = day.date;
    conditions.textContent = day.conditions;

    div1.append(dayName, date);
    div2.append(conditions);

    wrapper.append(div1, div2);

    wrapper.append(
      createTable(
        [
          { name: "Temerature max", value: day.tempMax },
          { name: "Temperature", value: day.temp },
          { name: "Temperature min", value: day.tempMin },
        ],
        tempMetricCelsius
      )
    );

    wrapper.append(
      createTable(
        [
          { name: "Wind Direction", value: day.windDir },
          { name: "Wind Speed", value: day.windSpeed },
          { name: "Wind Gust", value: day.windGust },
        ],
        speedMetricKmh
      )
    );
    function createTable(arr, metric) {
      const table = document.createElement("table");
      table.className = "day-table";
      arr.forEach((t) => {
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        const td = document.createElement("td");

        tr.className = "day-table-tr";
        th.className = "day-table-th";
        td.className = "day-table-td";

        th.textContent = t.name;
        td.textContent = t.value + metric;
        tr.append(th, td);
        table.append(tr);
      });

      return table;
    }

    container.append(wrapper);
  });
}

// <li>
// <h3 class="days-heading"></h3>
// <span class="days-datetime"></span>
// <p class="days-condition"></p>
// <ul class="days-temperature">
//   <li>
//     <p>
//       Max: <span class="days-temperature-max">24&deg;c</span>
//     </p>
//   </li>
//   <li>
//     <p>
//       Current:
//       <span class="days-temperature-current">24&deg;c</span>
//     </p>
//   </li>
//   <li>
//     <p>
//       Min: <span class="days-temperature-min">24&deg;c</span>
//     </p>
//   </li>
// </ul>
// </li>
