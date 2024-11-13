export default (function Weather() {
  const KEY = "6Z5DB8PU92WGNGEAWLSMB5SW4";

  //https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/new%20york?unitGroup=metric&key=6Z5DB8PU92WGNGEAWLSMB5SW4&contentType=json
  async function getWeather(location) {
    try {
      const res = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${KEY}&contentType=json`
      );

      const data = await res.json();
      return [data, null];
    } catch (err) {
      return [null, err];
    }
  }

  return {
    getWeather,
  };
})();
