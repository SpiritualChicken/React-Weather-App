import React, { useEffect, useState } from "react";
import WeatherIcons from "./WeatherIcons";

function WeatherItem ({ city }) {
const [temp, setTemp] = useState(0);
const [wind, setWind] = useState(0);
const [humidity, setHumidity]= useState(0);
const [weatherImg, setWeatherImg ] = useState("")

const windSpeed = Math.floor(wind * 3.6)
const displayTemp = Math.floor(temp)

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&units=Metric&appid=cc2551d6f015c0c9fc75ac14012f75dc`)
          .then((response) => response.json())
          .then((data) => {
            //console.log(data);
            setTemp(data.main.temp)
            setWind(data.wind.speed)
            setHumidity(data.main.humidity)
            setWeatherImg(data.weather[0].main.toLowerCase())
          });
      }, []);

      // console.log(weatherImg)

      function handleClick () {
        console.log(city.name, "was clicked")
      }

      
    return (
        <div className="weatherItem">
            <img className="weatherImg"src={WeatherIcons[weatherImg]} alt={`${weatherImg} img`}/>
            <h4>{city.name}</h4>
            <p>Temperature: {displayTemp}°C</p>
            <p>Wind speed: {windSpeed}km/h</p>
            <p>Humidity: {humidity}%</p>
            <button onClick={handleClick}>Add to favourite</button>
        </div>
    )
}

export default WeatherItem