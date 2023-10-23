
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
      <Route path="/favourties"> 
          <Favourites />
      </Route>
      <Route exact path="/"> 
        <div className="App">
          <WeatherApp />
        </div>
      </Route>
    </Switch>
      
    </div>
  );
}


export default App;
