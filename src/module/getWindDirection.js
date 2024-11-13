export default function getWindDirection(deg) {
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
