import { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [searchInputTop, setSearchInputTop] = useState("50%");

  const moveSearchInput = () => {
    setSearchInputTop("0");
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      );
      setWeather(response.data);
    } catch (error) {
      console.error(error);
      alert("City not found");
      setWeather(null);
      setCity("");
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
            placeholder="Enter city"
            className="weather-input"
            style={{ top: searchInputTop }}
          />
          <button
            className="search-button"
            type="submit"
            onClick={moveSearchInput}
          >
            Get Weather
          </button>
        </form>
        {weather && (
          <div className="weather-info">
            <p>{weather.weather[0].description}</p>
            <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
