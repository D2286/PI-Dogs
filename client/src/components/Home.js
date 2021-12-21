import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getApi } from "../store/actions";
import Card from "./Card"


export default function Home (){

  const allPerros= useSelector((state)=>state.perros)  // me traigo todo los paises
  const dispatch = useDispatch()

    useEffect(()=>{
    dispatch(getApi())
  },[dispatch])


return(
    <div>
      <h1>home</h1>

      <div className="contenedorcartas">
      {allPerros.map((e)=>{
        return <Card key={e.id} id={e.id} name={e.name} image={e.image} temperament={e.temperament}/>
      })}
    </div>
    </div>
)

}




