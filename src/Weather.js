import { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("Manchester");
  const [weather, setWeather] = useState(null);
  const [currentDate, setCurrentDate] = useState("--");
  const [cityImage, setCityImage] = useState(null);

  const fetchCityImage = async () => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${city}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
      );
      setCityImage(response.data.results[0].urls.regular);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
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
    fetchCityImage();
    getDate();
  };
  return (
    <>
      {weather && (
        <div
          className="left-section"
          style={{
            backgroundImage: cityImage
              ? `url(${cityImage})`
              : `url(${process.env.PUBLIC_URL}/images/manchester.jpg)`,
          }}
        ></div>
      )}
      <div className="right-section">
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
                "--, --"}
            </p>
            <p id="date" className="date">
              {currentDate}
            </p>
            <p className="temperature-info">
              {(weather && `${Math.round(weather.main.temp - 273.15)}°C`) ||
                "--°C"}
            </p>
            <p className="weather-description">
              {(weather && weather.weather[0].description) || "--"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
