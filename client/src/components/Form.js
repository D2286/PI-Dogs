import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Get_Temps, CreateDogs} from "../actions";
import {Link} from "react-router-dom";




export default function Form(){



    const estadotemp = useSelector (state=>state.temperamentos)

    const dispatch = useDispatch()
    const [input, setDoggers] = useState({

        name:"",
        height:"",
        weight:"",
        life_span:"",
        image:"",
        createInDb:true,
        temperamentos:[]

    })

    const handleChange =(e)=>{
        e.preventDefault()
        setDoggers({
            ...input,
            [e.target.name]: e.target.value
            
        })
      console.log(input)
    }

    function handleSelector(e){
        e.preventDefault()
        setDoggers({
            ...input,
            temperamentos:[...input.temperamentos, e.target.value]//concatena en el array lo que vaya guardando

        })
    }

    useEffect(()=>{
        dispatch(Get_Temps());
    },[dispatch])


    return(
        <div>
            Formulario

        <Link to= '/home'><button>Volver</button></Link>    
        <h1>Create Dog</h1>

        <form>
            <input key="id" type="text" placeholder="Nombre" value={input.name} name="name" onChange={handleChange}/>
    
            <input type="number" placeholder="height" value={input.height} name="height" onChange={handleChange}/>
            
            <input type="number" placeholder="weight" value={input.weight} name="weight" onChange={handleChange}/>       
            
            <input type="number" placeholder="life_span" value={input.life_span} name="life_span" onChange={handleChange}/>
            <label>image</label>
            <label>Temperamentos</label>

            <div>
            <select onChange={(e) => handleSelector(e)}>
            {estadotemp?.sort(function (a, b) {
                            if (a.name < b.name) return -1;
                            if (a.name > b.name) return 1;
                            return 0;
                        })
                
                .map((el) =>(
                <option key={el.id} name={el.name}>{el.name}</option>   
                ))}
            </select>
            </div>
         </form>   

        </div>
    )
}