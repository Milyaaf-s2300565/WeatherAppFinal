// All OpenWeatherMap calls live here, so screens never talk to the API directly.

const API_KEY = process.env.EXPO_PUBLIC_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function getCurrentWeather(city, units = "metric") {
  const url = `${BASE_URL}/weather?q=${encodeURIComponent(city)}&units=${units}&appid=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 404) throw new Error(`City "${city}" not found.`);
    if (response.status === 401) throw new Error("Invalid API key.");
    throw new Error("Could not load weather. Try again.");
  }

  return response.json();
}
