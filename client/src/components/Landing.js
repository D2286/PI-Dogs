import React from "react";
import {Link} from "react-router-dom";
import styles from "./Landing.module.css"

export default function Landing(){
    return (
        
    <div className={styles.title}>
        
        <div class="row align-items-center">
            <div class="col">
               <h1> Bienvenidos</h1>
            </div>  
            <div class="col"> 
            <Link to="/Home">
            <button type="button" class="btn btn-lg btn-primary" disabled>Home</button>
            </Link>
            </div>
        </div>
        
    </div>
    )
}