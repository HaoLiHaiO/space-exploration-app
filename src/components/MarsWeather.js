import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function MarsWeather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeather();

    async function fetchWeather() {
      const sol = await fetch(
        `https://api.nasa.gov/insight_weather/?api_key=${apiKey}&feedtype=json&ver=1.0`
      );
      const data = await sol.json();

      setWeatherData(Object.entries(data));
    }
  }, []);

  return (
    <>
      <NavBar />

      <div className="weather-info">
        <p>Today is Sol: </p>
        <p>Highest temp on Mars was: </p>
        <p>Lowest temp on Mars was: </p>
        <p>Average wind speed was: </p>
        <p></p>
      </div>
    </>
  );
}
