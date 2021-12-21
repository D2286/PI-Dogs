import './App.css';
import React, { useEffect } from "react";
//import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Landing from './components/Landing';
import { Route, Switch } from "react-router-dom";


function App(){
  
  return (
    <div className="App">
    <Switch>
    <Route exact path="/" component={Landing}/>
    <Route exact path="/Home" component={Home}/>
    </Switch>
    </div>
  );
}

export default App; 
