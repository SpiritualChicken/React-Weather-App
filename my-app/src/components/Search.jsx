import React, { useState, useEffect } from "react";
import searchIcon from '../assets/search.png'; 



function Search () {

const [temp, setTemp] = useState(0);
const [wind, setWind] = useState(0);
const [humidity, setHumidity]= useState(0);
const [weatherImg, setWeatherImg ] = useState("")
const [isFave, setIsFave] = useState(false)
const [ inputValue, setInputValue ] = useState("")
const [searched, setSearched] =useState(false)
const windSpeed = Math.floor(wind * 3.6)
const displayTemp = Math.floor(temp)

const handleChange = (event) => {
    setInputValue(event.target.value)
} 
const handleSubmit = (event) => {
    event.preventDefault(); 

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=Metric&appid=cc2551d6f015c0c9fc75ac14012f75dc`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setTemp(data.main.temp)
            setWind(data.wind.speed)
            setHumidity(data.main.humidity)
            setWeatherImg(data.weather[0].main.toLowerCase())
          });
      
}


    return (
    <form className="topBar" onSubmit={handleSubmit}>
        <input type="text" className="cityInput" placeholder="Search..." value={inputValue} onChange={handleChange} />
        <button className="searchIcon">
            <img src={searchIcon} alt="Search" />
        </button>
    </form>
    )
}

export default Search;