import React from "react"
import {useState} from "react";
import {useDispatch} from "react-redux";
import Name_Detail from  "./Searchbar";


export default function Searchbar(){
    const dispatch = useDispatch()
    const [name, setName]= useState("")


function handleInputChange (e){
e.preventDefault()
    setName(e.target.value)
    console.log(name)

}

function handleSubmit(e){
    e.preventDefault()
    dispatch(Name_Detail(name))
    
}


return (

    <div>
        <input
        type = "text"
        placeholder = "Buscar"
        onChange = {(e) => handleInputChange(e)}
        
        />
        <button type="submit" onClick={(e)=> handleSubmit(e)}>Buscar</button>



    </div>
)

}