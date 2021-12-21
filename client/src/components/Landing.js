import React from "react";
import {Link} from "react-router-dom";


export default function Landing(){
    return (
        <div>
            <h1>Henry Dogs</h1>
            <Link to="/Home">
            <button>Home</button>

            </Link>
        
        
        </div>
    )
}