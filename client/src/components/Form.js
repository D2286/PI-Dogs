import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Link, useHistory} from "react-router-dom";

import {Get_Temps, CreateDogs} from "../actions";
import styles from  './Form.module.css'


//bee315d18f7ac35bb32c11d522ea27109512d2de

export default function Form(){



    const estadotemp = useSelector (state=>state.temperament)
    const history = useHistory()
    const dispatch = useDispatch()
    const [input, setDoggers] = useState({

        name:"",
        height:"",
        weight:"",
        life_span:"",
        image:"",
        createInDb:true,
        temperament:[]

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
            temperament:[...input.temperament, e.target.value]//concatena en el array lo que vaya guardando

        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(input)
        dispatch(CreateDogs(input))
        alert("Perro creado")
        setDoggers({
            name:"",
            height:"",
            weight:"",
            life_span:"",
            image:"",
            createInDb:true,
            temperament:[]

        })
        history.push("/home")
        
    }


    useEffect(()=>{
        dispatch(Get_Temps());
    },[dispatch])


    return(

        <div  className={styles.contenedor}>

        <div class="d-flex justify-content-center align-items-center container ">
        <div className={styles.containerForm}>
        
        <div class="row align-items-start">

        <div class="col">  

        <label>Temperamentos</label>  
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
            <ul><li>{input.temperament.map(el=>el + " -")}</li></ul>
        </div>

        <div class="col">

    
        <button type="submit" class="btn btn-lg btn-primary" disabled>Create Dog</button>

        </div>

        <div class="col">
        <Link to= '/home' ><button type="button" class="btn btn-lg btn-primary" disabled>Volver</button></Link>    
        
        </div>
        </div>

        <form class="row" onSubmit={(e)=>handleSubmit(e)}>
        <label>Nombre</label>
            <input type="text" class="form-control" key="id" type="text" placeholder="Nombre" value={input.name} name="name" onChange={handleChange}/>
            <label>height</label>       
            <input type="number" placeholder="height" value={input.height} name="height" onChange={handleChange}/>
            <label>weight</label>
            <input type="number" placeholder="weight" value={input.weight} name="weight" onChange={handleChange}/>       
            <label>Life span</label>
            <input type="number" placeholder="life_span" value={input.life_span} name="life_span" onChange={handleChange}/>
            <label>image</label>
            <input type="text" placeholder="image" value={input.image} name="image" onChange={(e)=>handleChange(e)}/>
            

            
         </form>  

         </div> 

         </div>

         </div> 
    )
}