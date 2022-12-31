import React, { useState } from "react";


export default function Weather() {
  const [city, setResults] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState("");

  function showResults(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: ` http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
  }

  function citySearch(event) {
    event.preventDefault();
    let apiKey = "88e0d667a1fd1dd87882eeeb4f42a013";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
  }

  function cityChange(event) {
    setResults(event.target.value);
  }

  let form = (
    <form onSubmit={citySearch}>
      <input
        type="search"
        placeholder="Search city here..."
        onChange={cityChange}
      />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Description: {weather.description}</li>
          <li>Temperature: {Math.round(weather.temperature)}℃</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {Math.round(weather.wind)}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
