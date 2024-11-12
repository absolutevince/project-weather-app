export default function displayWeatherCondition(data) {
  const condition = document.querySelector(".weather_condition-condition");
  const temperature = document.querySelector(".weather_condition-temperature");
  const feelsLike = document.querySelector(".weather_condition-feels_like");
  const windDirection = document.querySelector(
    ".weather_condition-wind_direction"
  );
  const windGust = document.querySelector(".weather_condition-wind_gust");
  const windSpeed = document.querySelector(".weather_condition-wind_speed");

  condition.textContent = data.conditions;
  temperature.textContent = data.temperature;
  feelsLike.textContent = data.feelsLike;
  windDirection.textContent = data.windDirection;
  windGust.textContent = data.windGust;
  windSpeed.textContent = data.windSpeed;
}
