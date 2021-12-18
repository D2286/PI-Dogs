import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import Card from "./Card"


export default function Home (){


const allDogs = useSelector ((state)=> state.perros)



return(
    <div>
      <div>
          {allDogs?.map((c)=>
            <Link to= {"/home/"}key={c.id}>
    
            <Card id={c.id} name={c.name} image={c.image} temperament={c.temperament} key={c.id}/>


        
            </Link>
          )

          }
      </div>
    </div>
)

}




