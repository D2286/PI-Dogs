import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Get_Temps, CreateDogs} from "../store/actions";
import {Link, useHistory} from "react-router-dom";




export default function Form(){



    const estadotemp = useSelector (state=>state.temperamentos)
    const history = useHistory()
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
            temperamentos:[]

        })
        history.push("/home")
        
    }


    useEffect(()=>{
        dispatch(Get_Temps());
    },[dispatch])


    return(
        <div>
            Formulario

        <Link to= '/home'><button>Volver</button></Link>    
        <h1>Create Dog</h1>

        <form onSubmit={(e)=>handleSubmit(e)}>
        <label>Nombre</label>
            <input key="id" type="text" placeholder="Nombre" value={input.name} name="name" onChange={handleChange}/>
            <label>height</label>       
            <input type="number" placeholder="height" value={input.height} name="height" onChange={handleChange}/>
            <label>weight</label>
            <input type="number" placeholder="weight" value={input.weight} name="weight" onChange={handleChange}/>       
            <label>Life span</label>
            <input type="number" placeholder="life_span" value={input.life_span} name="life_span" onChange={handleChange}/>
            <label>image</label>
            <input type="text" placeholder="image" value={input.image} name="image" onChange={(e)=>handleChange(e)}/>
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
            <ul><li>{input.temperamentos.map(el=>el + " -")}</li></ul>
            <button type="submit">Create Dog</button>

            </div>
         </form>   

        </div>
    )
}