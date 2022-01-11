import React from "react";
import {Link} from "react-router-dom"


export default function Card({ name, image, temperament, id}){
    return(
        <div key={id}>
            <Link to={`/detail/${id}`}>
            <h3>{name}</h3>
            <img src={image} alt="No encontrado" width="200px" height="250px"/>
            <div>Temperament:</div> <br/>
            {temperament?.map((el) => "  " + el + ",")
            
         }
         </Link>

        </div>
    )
}