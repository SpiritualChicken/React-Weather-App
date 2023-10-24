import React, { useState } from "react";
import searchIcon from '../assets/search.png'; 


function Search () {

    const [ inputValue, setInputValue ] = useState("")

const handleChange = (event) => {
    setInputValue(event.target.value)
} 
const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(`${inputValue} was searched`);
}

    const handleClick = () => { 
        console.log(`${inputValue} was searched`)
    }

    return (
    <form className="topBar" onSubmit={handleSubmit}>
        <input type="text" className="cityInput" placeholder="Search..." value={inputValue} onChange={handleChange} />
        <button className="searchIcon">
            <img src={searchIcon} alt="Search" onClick={handleClick} />
        </button>
    </form>
    )
}

export default Search;