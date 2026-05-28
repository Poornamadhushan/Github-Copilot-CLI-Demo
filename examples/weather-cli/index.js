const city = process.argv.slice(2).join(" ").trim();

if (!city) {
  console.log("Usage: node index.js <city>");
  process.exit(1);
}

const buildUrl = (name) => `https://wttr.in/${encodeURIComponent(name)}?format=j1`;

const main = async () => {
  try {
    const response = await fetch(buildUrl(city));
    if (!response.ok) {
      throw new Error("Weather service error");
    }

    const data = await response.json();
    const current = data?.current_condition?.[0];

    if (!current) {
      throw new Error("City not found");
    }

    const condition = current.weatherDesc?.[0]?.value ?? "Unknown";
    const tempC = current.temp_C ?? "?";
    const humidity = current.humidity ?? "?";

    console.log(`Weather in ${city}`);
    console.log(`Condition: ${condition}`);
    console.log(`Temperature: ${tempC} C`);
    console.log(`Humidity: ${humidity}%`);
  } catch (error) {
    console.log("Could not fetch weather. Check the city name and try again.");
  }
};

main();
