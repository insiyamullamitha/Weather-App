# Weather App ⛅

## Overview 🌐

A simple React-based weather application that allows users to check the current weather conditions for a specified city. The app uses the OpenWeatherMap API to fetch real-time weather data and the Unsplash API to fetch city images.

## Getting Started 🚀

1. Clone the repository:

```
git clone https://github.com/insiyamullamitha/weather-app.git
```

2. Install dependencies:

```
npm install
```

3. Create a **'.env'** file in the project root:

   - Set your OpenWeatherMap API key as **'REACT_APP_WEATHER_API_KEY'**
   - Set your Unsplash API access key as **'REACT_APP_UNSPLASH_API_KEY'**

4. Run the app using **'npm start'**

5. Open the browser and navigate to **'http://localhost:3000'** to use the Weather App

## Features ✨

- **City Search:** Enter the name of the city to get the latest weather information.
- **Current Date Display:** Shows the current date in a user-friendly format.
- **Temperature Information:** Displays the temperature in Celsius along with a brief weather description.
- **City Image:** Displays image of entered city alongside weather information.
- **Error Handling:** Alerts the user if the entered city is not found.

## Technologies Used 🛠️

- React
- Axios
- OpenWeatherMap API
- Unsplash API
