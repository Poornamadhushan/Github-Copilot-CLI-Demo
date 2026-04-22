// weather.js - starter file for the weather CLI
// TODO: Read the location from command line arguments (process.argv)
// TODO: Build the wttr.in URL using the location and format=j1
// TODO: Fetch weather data with async/await
// TODO: Parse JSON and display temperature (C), condition, and humidity
// TODO: Show a friendly error if the location is not found

async function getWeather(location) {
  // Fetch JSON from wttr.in and return a simplified object.
  const encoded = encodeURIComponent(location);
  const url = `https://wttr.in/${encoded}?format=j1`;
  const response = await fetch(url);

  if (!response.ok) {
    return null;
  }

  const payload = await response.json();
  const data = payload && payload.data ? payload.data : payload;

  if (!data || (Array.isArray(data.error) && data.error.length > 0)) {
    return null;
  }

  const current = Array.isArray(data.current_condition)
    ? data.current_condition[0]
    : null;

  if (!current) {
    return null;
  }

  const description = Array.isArray(current.weatherDesc)
    ? current.weatherDesc[0]?.value
    : null;

  return {
    location,
    tempC: current.temp_C,
    condition: description,
    humidity: current.humidity,
  };
}

function printUsage() {
  console.log("Usage: node weather.js <city-or-zip>");
  console.log("Example: node weather.js Colombo");
}

async function main() {
  const args = process.argv.slice(2);
  const location = args.join(" ").trim();

  if (!location) {
    printUsage();
    process.exit(1);
  }

  try {
    const data = await getWeather(location);

    if (!data) {
      console.log("Location not found. Please try another city or zip code.");
      process.exit(1);
    }

    console.log(`Location: ${data.location}`);
    console.log(`Temperature: ${data.tempC} C`);
    console.log(`Condition: ${data.condition}`);
    console.log(`Humidity: ${data.humidity}%`);
  } catch (error) {
    console.log("Something went wrong while fetching weather data.");
    console.log("Please check your network connection and try again.");
  }
}

main();
