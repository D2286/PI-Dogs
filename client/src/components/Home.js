import React from 'react';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import { filterOrigin, getApi, orderByName, filterByTemperament, Get_Temps} from "../actions/index.js";


//bee315d18f7ac35bb32c11d522ea27109512d2de
import Card from "./Card"
import {Link} from "react-router-dom"
//import Searchbar from "./Searchbar"
import Nav from "./Nav";
import Paginado from "./Paginado";
import style from "./Home.module.css";



export default function Home (){

  const allPerros= useSelector(state=>state.perros)
  const dispatch = useDispatch()
  const temperaments = useSelector((state) => state.temperament);
  const [currPag,setPag]= useState(1)
  const [dogsxPage]= useState(5)
  const indexLastDogs = currPag*dogsxPage
  const indexfirstDogs = indexLastDogs-dogsxPage
  const currDogs = allPerros?.slice(indexfirstDogs,indexLastDogs)
  const paginado = (pagNum)=>{
    setPag(pagNum)
  }

  useEffect(()=>{
    dispatch(getApi())
    dispatch(Get_Temps());
  },[dispatch])

  function handleFilterOrigin(e) {
    e.preventDefault();
    dispatch(filterOrigin(e.target.value))
    setPag(1);
}


  const[, setOrden] = useState("")
  function handleSort(e){
    e.preventDefault();
    dispatch(orderByName(e.target.value))
    setOrden(e.target.value)

  }

  const handleFilterTemperament = (e) => {
    console.log(e.target.value);
    dispatch(filterByTemperament(e.target.value));
    setPag(1);
  };
  

return(

    <div>

      <div >
        <Nav />
      </div>

    <div className={style.fondo}>  

    <div className={style.dogFilters}>
    <div class="input-group-prepend">
    <select type="button" class="btn btn-outline-light" onChange={e => handleFilterOrigin(e)}>
      <option value='all'>All</option>
      <option value='api'>Existent breed</option>
      <option value='created'>Created breeds</option>
    </select>
    </div>

    <div class="input-group-prepend">
    <select type="button" class="btn btn-outline-light"  onChange={e => handleSort(e)}>
      <option value="az"> ASC</option>
      <option value="za"> DESC </option>
    </select>
    </div>

    <div class="input-group-prepend">
    <select type="button" class="btn btn-outline-light"  onChange={(e) => handleFilterTemperament(e)}>
          <option value="all">Todos</option>
          {temperaments?.map((elem) => (
            <option value={elem.name} key={elem.id}>
              {elem.name}
            </option>
          ))}
        </select>

        </div>  

        </div>

        <div>

        <Paginado
        dogsxPage={dogsxPage}
        allPerros={allPerros?.length}
        paginado={paginado}
          />

        </div>

    <div className={style.dogs} >
         

      {/* <Link to= '/create'><button>Crear</button></Link> */}
  
      <div className={style.dogContainer}>
    
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
  
)

}




