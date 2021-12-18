import './App.css';
import React, { useEffect } from "react";
//import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
//import Landing from './components/Landing';
import  {getApi}  from './actions';
import { useDispatch } from 'react-redux';


function App(){

const dispatch = useDispatch();

useEffect (()=>{
  dispatch(getApi())

},[dispatch]);

  
  return (
    
    <div className="App">
    <Home />
      
    </div>
    
  );
}

export default App; 
