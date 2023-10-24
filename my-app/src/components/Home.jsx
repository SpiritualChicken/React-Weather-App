import React from "react";
import WeatherItem from "./WeatherItem";
import Search from "./Search";

function Home ({ majorCities }) {
    return(
       <div> 
        <Search />
            <h1 className="pageTitle">Weather at a glance</h1>
            <ul className="weatherIndex">
                {majorCities.map(city => (
                    <WeatherItem key={city.id} city={city}/>
                ))}
            </ul>
       </div> 

    )
}

export default Home;