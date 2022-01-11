import './App.css';
import React from "react";
//import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Landing from './components/Landing';
import { Route, Switch } from "react-router-dom";
import  Detail  from './components/Detail';
import Form from './components/Form';



function App(){
  
  return (
    <div className="App">

      <h1>Henry Dogs</h1>
    <Switch>
    <Route exact path="/" component={Landing}/>
    <Route exact path="/Home" component={Home}/>
    <Route exact path="/detail/:id" component={Detail}/>
    <Route path="/create" component={Form}/>
    </Switch>
    </div>
  );
}

export default App; 
