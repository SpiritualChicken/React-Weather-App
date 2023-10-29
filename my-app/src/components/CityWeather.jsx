import React, { useEffect, useState } from "react";
import Search from "./Search";
import { useLocation } from "react-router-dom";
import WeatherIcons from "./WeatherIcons";


function CityWeather () {
    const { state } = useLocation()
    const [isFave, setIsFave] = useState(false)
    //console.log(state.data)
    const windSpeed = Math.floor(state.data.wind.speed * 3.6)
    const displayTemp = Math.floor(state.data.main.temp)
    const [weatherImg, setWeatherImg ] = useState("")

     useEffect(() => {
        if (state && state.data) {
            const mainWeather = state.data.weather[0].main.toLowerCase();
            setWeatherImg(mainWeather);
        }
    }, [state])
    

    function handleClick() {
        if (isFave) {
          const options = {
            method: "DELETE",
          };
      
          fetch(`http://localhost:5000/favourites/${state.data.name.id}`, options)
            .then((resp) => resp.json())
            .then((data) => {
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
                <div className="imgContainer">
                    <img className="weatherImg"src={WeatherIcons[weatherImg]} alt={`${weatherImg} img`}/>
                </div>
                <div className="weatherTemp">{displayTemp}°C</div>
                <div className="weatherLoaction">{state.data.name}</div>
                <div className="dataContainer">
                    <div className="element">
                        <img src={WeatherIcons["humidity"]} alt="Humidity Icon" className="icon" />
                        <div className="data">
                            <div className="humidtyPercent">{state.data.main.humidity}%</div>
                            <div className="text">Humidity</div>
                        </div>
                    </div>
                
                
                    <div className="element">
                        <img src={WeatherIcons["wind"]} alt="Wind Icon" className="icon" />
                        <div className="data">
                            <div className="humidtyPercent">{windSpeed}%</div>
                            <div className="text">Wind speed</div>
                        </div>
                    </div>
                </div>
            <div className="buttonContainer">
                <button onClick={handleClick} className="favouriteButton">{isFave ? "Remove From Favourite" : "Add To Favourite"}</button>
            </div>
             </div>
        </div>
    )
}

export default CityWeather;