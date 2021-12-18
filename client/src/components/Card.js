import React from "react";


export default function Card({ id, name, image, temperament}){
    return(
        <div key={id}>
            <h3>{name}</h3>
            <img src={image} alt="No encontrado" width="200px" height="250px"/>
            <h5>{temperament}</h5>
            

        </div>
    )
}