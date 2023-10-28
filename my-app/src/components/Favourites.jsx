import React, { useEffect, useState } from "react";
import Search from "./Search";
import WeatherItem from "./WeatherItem";

function Favourites () {
    const [isFave, setIsFave] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/favourites`)
        .then(resp => resp.json())
        .then(data => setIsFave(data)
        )
        
      }, []) 

      //console.log(isFave)

  

    return(
        <div> 
            <Search />
            <h1 className="pageTitle">The Favourite page</h1>
            {isFave.map((fave) => ( 
                    <WeatherItem key={fave.id} city={fave}/>
                ))}
        

        </div>
    )
}

export default Favourites; 