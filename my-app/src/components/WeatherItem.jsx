import React, { useEffect, useState } from "react";

function WeatherItem ({ city }) {
const [temp, setTemp] = useState(0)
const [wind, setWind] = useState(0)

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.name}&appid=cc2551d6f015c0c9fc75ac14012f75dc`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setTemp(data.main.temp)
            setWind(data.wind.speed)
          });
      }, []);
    
    return (
        <div>
            <h4>{city.name}</h4>
            <p>{temp}</p>
            <p>{wind}</p>
        </div>
    )
}

export default WeatherItem