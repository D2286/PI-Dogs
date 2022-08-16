import React from "react";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";
import  SearchBar  from "./SearchBar";

export default function Nav() {
    return (
      <nav class={style.navbary} >
          <div >
              <Link
              to="/home">
              <h1 >Henry Dogs </h1>
              </Link>
          </div>       
          
          <div class={style.search} >
              <SearchBar />

          </div>  

          <div >
              <Link to="/create">
                  <h2 >Create Dog</h2>
              </Link>
          
          </div>
        
      </nav>
    );
  };