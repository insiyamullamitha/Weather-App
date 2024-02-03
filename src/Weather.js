import { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      );
      setWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather();
  };
  return (
    <div className="weather-container">
      <div className="weather-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />
          <button type="submit">Get Weather</button>
        </form>
        {weather && (
          <div>
            <h1>{weather.name}</h1>
            <p>{weather.weather[0].description}</p>
            <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
