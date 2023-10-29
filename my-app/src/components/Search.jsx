import React, { useState, useEffect } from "react";
import searchIcon from '../assets/search.png'; 
import { useHistory } from "react-router-dom";



function Search () {
const [ inputValue, setInputValue ] = useState("")
//const [searchDisplay, setSearchDisplay] = useState(false)
 const history = useHistory()


const handleChange = (event) => {
    setInputValue(event.target.value)
} 
const handleSubmit = (event) => {
    event.preventDefault(); 
    //setSearchDisplay(true);
    //history.push(`/city/${inputValue}`)

    

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=Metric&appid=cc2551d6f015c0c9fc75ac14012f75dc`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
           history.push(`/city/${inputValue}`, { data })
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