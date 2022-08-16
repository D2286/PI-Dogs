import React from "react";
import {Link} from "react-router-dom"
import style from "./Card.module.css"


export default function Card({ name, image, temperament, temperaments, id}){
    return(
        <div key={id} className={style.card}>
            <Link to={`/detail/${id}`}>
            <h3 className={style.title} >{name} </h3>
            <img src={image} className={style.image} alt="No encontrado" width="200px" height="250px"/>
            <div className={style.title}>Temperament:</div> <br/>
            <p className={style.title}>{temperament
          ? temperament.map((el) => el + " ")
          : temperaments?.map((el) => el.name + ",")}
            </p>
         </Link>

        </div>
    )
}