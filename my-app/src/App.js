
import './App.css';
import NavBar from './components/NavBar';
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home';
import Favourites from './components/Favourites';

// API call to city
//https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key} 



function App() {

  const [page, setPage] = useState("/")
  const apiKey = "cc2551d6f015c0c9fc75ac14012f75dc";
  const majorCities = [
    { id: 1, name: 'New York' },
    { id: 2, name: 'Tokyo' },
    { id: 3, name: 'Shanghai' },
    { id: 4, name: 'São Paulo' },
    { id: 5, name: 'Mumbai' },
    { id: 6, name: 'Beijing' },
    { id: 7, name: 'Sydney' },
    { id: 8, name: 'London' },
    { id: 9, name: 'Los Angeles' },
    { id: 10, name: 'Istanbul' },
  ];

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div> 
    <NavBar onChangePage={setPage} />
    <Switch>
      <Route path="/favourties"> 
          <Favourites />
      </Route>
      <Route exact path="/"> 
        <div className="App">
          <Home majorCities={majorCities} />
        </div>
      </Route>
    </Switch>
      
    </div>
  );
}


export default App;
