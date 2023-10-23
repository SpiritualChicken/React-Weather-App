import React from "react";
import WeatherItem from "./WeatherItem";

function Home ({ majorCities }) {
    return(
       <div> 
            <h1>Weather at a glance</h1>
            <ul>
                {majorCities.map(city => (
                    <WeatherItem key={city.id} city={city}/>
                ))}
            </ul>
       </div> 

    )
}

export default Home;