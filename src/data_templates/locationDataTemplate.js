export default function locationDataTemplate(data) {
  if (!data) {
    return;
  }
  const currentDate = new Date();
  const country = data.resolvedAddress.split(", ").pop();

  const dateOptions = {
    timeZone: data.timezone,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const timeOptions = {
    timeZone: data.timezone,
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return {
    address: data.address + " / " + country,
    description: data.description,
    datetime: {
      date: currentDate.toLocaleDateString("en", dateOptions),
      time: currentDate.toLocaleTimeString("en", timeOptions),
    },
  };
}
