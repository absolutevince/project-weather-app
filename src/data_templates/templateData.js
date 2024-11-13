import { formatTime } from "../module/formatDateTime";
import { speedMetricKmh, tempMetricCelsius } from "../module/metricString";

export function locationDataTemplate(data) {
  if (!data) {
    return;
  }
  const currentDate = new Date();
  const country = data.resolvedAddress.split(", ").pop();

  return {
    address: data.address + " / " + country,
    description: data.description,
    datetime: {
      date: currentDate.toLocaleDateString("en", {
        timeZone: data.timezone,
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      time: currentDate.toLocaleTimeString("en", {
        timeZone: data.timezone,
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    },
  };
}

export function todayConditionsDataTemplate(data) {
  const today = data.days[0];
  const hours = {};

  today.hours.forEach((hour) => {
    hours[today.datetime] = hourConditionsDataTemplate(hour);
  });

  console.log(today.conditions);

  return {
    conditions: today.conditions,
    temp: today.temp,
    tempMax: today.tempmax + tempMetricCelsius,
    tempMin: today.tempmin + tempMetricCelsius,
    sunrise: formatTime(today.sunrise),
    sunset: formatTime(today.sunset),
    hours: today.hours,
  };
}

export function weatherConditionDataTemplate(data) {
  if (!data) {
    return;
  }

  function getWindDirection(deg) {
    console.log(deg);
    const index = Math.floor(deg / 22.5);
    const dirs = [
      "North",
      "North-Northeast",
      "Northeast",
      "East-Northeast",
      "Northeast",
      "East-Southeast",
      "Southeast",
      "South-Southeast",
      "South",
      "South-Southwest",
      "Southwest",
      "West-Southwest",
      "West",
      "West-Northwest",
      "Northwest",
      "North-Northwest",
    ];
    return dirs[index % 16];
  }

  return {
    conditions: data.currentConditions.conditions,
    temperature: data.currentConditions.temp + tempMetricCelsius,
    feelsLike: data.currentConditions.feelslike + tempMetricCelsius,
    windGust: data.currentConditions.windgust + speedMetricKmh,
    windSpeed: data.currentConditions.windspeed + speedMetricKmh,
    windDirection: getWindDirection(data.currentConditions.winddir),
  };
}

export function hourConditionsDataTemplate(data) {
  return {
    time: data.datetime,
    temp: data.temp,
  };
}

export function forecastDataTemplate(data) {
  const arr = [];

  for (let i = 0; i < 7; i++) {
    const d = data.days[i];

    const newDate = new Date(d.datetime).toLocaleDateString("en", {
      timeZone: data.timezone,
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const day = newDate.split(",").shift();
    let date = newDate.split(",");
    date.shift();
    date = date.join(", ");

    arr.push({
      conditions: d.conditions,
      day: day,
      date: date,
      tempMax: d.tempmax,
      temp: d.temp,
      tempMin: d.tempmin,
      windDir: d.winddir,
      windGust: d.windgust,
      windSpeed: d.windspeed,
    });
  }

  return arr;
}
