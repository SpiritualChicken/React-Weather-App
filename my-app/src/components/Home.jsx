import React from "react";
import WeatherItem from "./WeatherItem";
import Search from "./Search";

function Home ({ majorCities }) {

    return(
       <div className="container"> 
        <Search />
            <h1 className="pageTitle">Weather At A Glance</h1>
            <div className="indexContainer">
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