import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Products from './pages/Products';
import Homepage from './pages/Homepage';

import './App.css';


import NavMenu from './components/NavMenu'

function App() {
  return (
    <div className="App">
      <Router>
        <NavMenu />
        <Switch>
          <Route path="/products"><Products/></Route>
          <Route path="/"><Homepage/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
