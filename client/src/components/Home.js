import React from 'react';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { filterOrigin, getApi, orderByName } from "../store/actions";
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

  function handleFilterOrigin(e) {
    e.preventDefault();
    dispatch(filterOrigin(e.target.value))
}

 
  const dispatch = useDispatch()

    useEffect(()=>{
    dispatch(getApi())
  },[dispatch])


  const[, setOrden] = useState("")
  function handleSort(e){
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setOrden(e.target.value)

  }
 

return(

    <div>

  <Searchbar/>
  
    <div>

    <select onChange={e => handleFilterOrigin(e)}>
      <option value='all'>All</option>
      <option value='api'>Existent breed</option>
      <option value='created'>Created breeds</option>
    </select>


    <select onChange={e => handleSort(e)}>
      <option value="az"> ASC</option>
      <option value="za"> DESC </option>
    </select>

    <div> 

    <Paginado
        dogsxPage={dogsxPage}
        allDogs={allPerros?.length}
        paginado={paginado}
    />

    

    <div>
      <h1>Home</h1>    

      <Link to= '/create'><button>Crear</button></Link>
  
      <div className="contenedorcartas">
    
      {currDogs?.map(e=>{
        return(

       <div key={e.id}>   
        <Link to={"/detail/"} key={e.id}>
           <Card id={e.id} name={e.name} image={e.image} temperament={e.temperament} temperaments={e.temperaments}/>
        </Link>
      </div>
        )
      })}

    
      
    </div>

    </div> 
    
    </div>
    
    </div>
    </div>
)

}




