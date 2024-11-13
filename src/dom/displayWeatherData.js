import {
  forecastDataTemplate,
  locationDataTemplate,
  todayConditionsDataTemplate,
  weatherConditionDataTemplate,
} from "../data_templates/templateData";
import { speedMetricKmh, tempMetricCelsius } from "../module/metricString";

export function displayCurrentConditions(data) {
  const template = weatherConditionDataTemplate(data);
  const condition = document.querySelector(".current_conditions-conditions");
  const temperature = document.querySelector(".current_conditions-temperature");
  const feelsLike = document.querySelector(".current_conditions-feels_like");
  const windDirection = document.querySelector(
    ".current_conditions-wind_direction"
  );
  const windGust = document.querySelector(".current_conditions-wind_gust");
  const windSpeed = document.querySelector(".current_conditions-wind_speed");

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
    const datetimeWrapper = document.createElement("div");
    const conditionsWrapper = document.createElement("div");

    wrapper.className = "day-wrapper";
    dayName.className = "day-day";
    date.className = "day-date";
    datetimeWrapper.classList = "day-datetime-wrapper";
    conditionsWrapper.classList = "day-conditions-wrapper";

    conditions.className = "day-conditions";

    dayName.textContent = day.day;
    date.textContent = day.date;
    conditions.textContent = day.conditions;

    datetimeWrapper.append(dayName, date);
    conditionsWrapper.append(conditions);

    wrapper.append(datetimeWrapper, conditionsWrapper);

    wrapper.append(
      createTable(
        "Temperature",
        [
          { name: "max", value: day.tempMax, className: "max" },
          { name: "normal", value: day.temp, className: "temp" },
          { name: "min", value: day.tempMin, className: "min" },
        ],
        tempMetricCelsius
      )
    );

    wrapper.append(
      createTable(
        "Wind",
        [
          {
            name: "Direction",
            value: day.windDir,
            valueType: "dir",
            className: "wind",
          },
          { name: "Speed", value: day.windSpeed, className: "wind" },
          { name: "Gust", value: day.windGust, className: "wind" },
        ],
        speedMetricKmh
      )
    );
    function createTable(header, arr, metric) {
      const table = document.createElement("table");
      const thead = document.createElement("thead");
      const tbody = document.createElement("tbody");
      table.className = "day-table";
      thead.className = "day-table-thead";

      thead.textContent = header;
      table.append(thead, tbody);
      arr.forEach((t) => {
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        const td = document.createElement("td");

        tr.className = `day-table-tr ${t.className ? t.className : ""}`;
        th.className = `day-table-th ${t.className ? t.className : ""}`;
        td.className = `day-table-td ${t.className ? t.className : ""}`;

        th.textContent = t.name;
        td.textContent = `${t.value} ${t.valueType === "dir" ? "" : metric}`;
        tr.append(th, td);
        tbody.append(tr);
      });

      return table;
    }

    container.append(wrapper);
  });
}
