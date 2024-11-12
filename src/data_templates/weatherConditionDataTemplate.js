export default function weatherConditionDataTemplate(data) {
  if (!data) {
    return;
  }
  const tempMetric = " " + String.fromCodePoint(176) + "c";
  const speedMetric = " km/h";

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
    console.log(index % 16);
    return dirs[index % 16];
  }

  return {
    conditions: data.currentConditions.conditions,
    temperature: data.currentConditions.temp + tempMetric,
    feelsLike: data.currentConditions.feelslike + tempMetric,
    windGust: data.currentConditions.windgust + speedMetric,
    windSpeed: data.currentConditions.windspeed + speedMetric,
    windDirection: getWindDirection(data.currentConditions.winddir),
  };
}
