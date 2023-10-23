import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import WeatherApp from './components/WeatherApp';
import Favourites from './components/Favourites';

function App() {

  const [page, setPage] = useState("/")

  return (
    <div> 
    <NavBar onChangePage={setPage} />
    <Switch>
      <Route exact path="/"> 
        <div className="App">
          <WeatherApp />
        </div>
      </Route>
      <Route path="/favourites"> 
          <Favourites />
      </Route>
    </Switch>
      
    </div>
  );
}


export default App;
