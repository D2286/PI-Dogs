import React from 'react';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { getApi } from "../store/actions";
import Card from "./Card"
import {Link} from "react-router-dom"
import Searchbar from "./Searchbar"
import Paginado from "./Paginado";



export default function Home (){

  const allPerros= useSelector(state=>state.perros)
  const [currPag,setPag]= useState(1)
  const [dogsxPage]= useState(5)
  const indexLastDogs = currPag*dogsxPage
  const indexfirstDogs = indexLastDogs-dogsxPage
  const currDogs = allPerros?.slice(indexfirstDogs,indexLastDogs)

  const paginado = (pagNum)=>{
    setPag(pagNum)
  }


  
  const dispatch = useDispatch()

    useEffect(()=>{
    dispatch(getApi())
  },[dispatch])
 

return(

    <div>

  <Searchbar/>
  
    <div>  

    <Paginado
      dogsxPage={dogsxPage}
      allPerros={allPerros.length}
      paginado={paginado}
      
    />

    

    <div>
      <h1>Home</h1>    

      <Link to= '/create'><button>Crear</button></Link>
  
      <div className="contenedorcartas">
    
      {currDogs.map(e=>{
        return(
        <Link to={"/detail/"} key={e.id}>
           <Card id={e.id} name={e.name} image={e.image} temperament={e.temperament} temperaments={e.temperaments}/>
        </Link>
      
        )
      })}

    
      
    </div>

    
    </div>
    
    </div>
    </div>
)

}




