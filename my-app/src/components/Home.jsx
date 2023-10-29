import React from "react";
import WeatherItem from "./WeatherItem";
import Search from "./Search";

function Home ({ majorCities }) {

    return(
       <div className="container"> 
        <Search />
            <h1 className="pageTitle">Weather at a glance</h1>
            <div>
                <ul className="weatherIndex">
                {majorCities.map(city => (
                    <WeatherItem key={city.id} city={city}/>
                ))}
                </ul>
            </div>
       </div> 

    )
}

export default Home;