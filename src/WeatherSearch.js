import React, { useState } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import ReactAnimatedWeather from "react-animated-weather";
import FormattedDate from "./FormattedDate";
import ShowTemperature from "./ShowTemperature";
import "./App.css";

export default function WeatherSearch() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weatherData, setWeatherData] = useState({});

  function CustomIcon(iconCode) {
    switch (iconCode) {
      case "01d":
        return "CLEAR_DAY";
      case "01n":
        return "CLEAR_NIGHT";
      case "02d":
        return "PARTLY_CLOUDY_DAY";
      case "02n":
        return "PARTLY_CLOUDY_NIGHT";
      case "03d":
        return "CLOUDY";
      case "03n":
        return "CLOUDY";
      case "04d":
        return "CLOUDY";
      case "04n":
        return "CLOUDY";
      case "09d":
        return "RAIN";
      case "09n":
        return "RAIN";
      case "10d":
        return "RAIN";
      case "10n":
        return "RAIN";
      case "11d":
        return "THUNDERSTORM";
      case "11n":
        return "THUNDERSTORM";
      case "13d":
        return "SNOW";
      case "13n":
        return "SNOW";
      case "50d":
        return "FOG";
      case "50n":
        return "FOG";
      default:
        return "CLEAR_DAY";
    }
  }

  function displayWeatherData(response) {
    setLoaded(true);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=03de31d04fb70d99511816e779098e29&units=metric`;
    axios.get(apiUrl).then(displayWeatherData);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city here"
            onChange={updateCity}
          />
        </div>
        <div className="col-3">
          <button>Search</button>
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="date">
          <FormattedDate date={weatherData.date} />
        </div>
        <h2 className="city">{city}</h2>
        <ul>
          <li>
            <ShowTemperature celsius={weatherData.temperature} />
          </li>
          <li>{weatherData.description}</li>
          <li>💦:{weatherData.humidity}%</li>
          <li>🍃:{weatherData.wind} km/h</li>
          <li>
            <ReactAnimatedWeather
              icon={CustomIcon(weatherData.icon)}
              color="purple"
              size={80}
              animate={true}
            />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        {form}
        <p>
          <ReactLoading
            type="spin"
            color="purple"
            height={200}
            width={200}
            className="loader"
          />
        </p>
        <p>Waiting for you to type a city! 🫰</p>
      </div>
    );
  }
}
