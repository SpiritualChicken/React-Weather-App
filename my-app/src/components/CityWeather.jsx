import React, { useEffect, useState } from "react";
import Search from "./Search";
import { useLocation } from "react-router-dom";
import WeatherIcons from "./WeatherIcons";


function CityWeather () {
    const { state } = useLocation()
    const [isFave, setIsFave] = useState(false)
    console.log(state.data)

    function handleClick() {
        if (isFave) {
          const options = {
            method: "DELETE",
          };
      
          fetch(`http://localhost:5000/favourites/${state.data.name.id}`, options)
            .then((resp) => resp.json())
            .then((data) => {
              console.log(state.data.name)
              console.log(data)
              if (data) {
                setIsFave(false); 
              } else {
                console.error("1");
              }
            })
            .catch((error) => {
              console.error("Error while removing from favorites:", error);
            });
        } else {
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: state.data.name,
            }),
          };
      
          fetch("http://localhost:5000/favourites", options)
            .then((resp) => resp.json())
            .then((data) => {
              setIsFave(!!data);
            })
            .catch((error) => {
              console.error("Error while adding to favorites:", error);
            });
        }
      }


    return (
        <div className="container">
            <Search />
            <div className="deatailWeatherItem">
                
                <h4>{state.data.name}</h4>
                <p>Temperature: {}°C</p>
                <p>Wind speed: {}km/h</p>
                <p>Humidity: {}%</p>
            <button onClick={handleClick}>{isFave ? "Remove From Favourite" : "Add To Favourite"}</button>
             </div>
        </div>
    )
}

export default CityWeather;