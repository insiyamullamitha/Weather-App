import { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("Manchester");
  const [weather, setWeather] = useState(null);
  const [currentDate, setCurrentDate] = useState("Sunday 4 February 2024");

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      );
      setWeather(response.data);
    } catch (error) {
      alert("City not found");
      setWeather(null);
      setCity("");
    }
  };

  const getDate = () => {
    const date = new Date();
    const day = date.toLocaleString("en-gb", { weekday: "long" });
    const month = date.toLocaleString("en-gb", { month: "long" });
    const dayNumber = date.getDate();
    const year = date.getFullYear();
    const dateString = `${day} ${dayNumber} ${month} ${year}`;
    setCurrentDate(dateString);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeather();
    getDate();
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
          />
        </form>
        <div className="weather-info">
          <p className="location">
            {(weather && `${weather.name}, ${weather.sys.country}`) ||
              "Manchester, GB"}
          </p>
          <p id="date" className="date">
            {currentDate}
          </p>
          <p className="temperature-info">
            {(weather && `${Math.round(weather.main.temp - 273.15)}°C`) ||
              "5°C"}
          </p>
          <p className="weather-description">
            {(weather && weather.weather[0].description) || "Rainy"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
