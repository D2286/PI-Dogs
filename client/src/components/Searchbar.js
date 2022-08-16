import React from "react"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {nameDetail} from "../actions";
//import orderByName from "../store/actions";



export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName]= useState("")


function handleInputChange (e){
e.preventDefault()
    setName(e.target.value) 
    //console.log(setName)
}

function handleSubmit(e){
    e.preventDefault()
    dispatch(nameDetail(name))
        
}


return (

    <div>
        <input
        type = "text"
        placeholder = "Buscar"
        onChange = {(e) => handleInputChange(e)}
        value={name}
        onKeyPress={e => e.key === 'Enter' && handleSubmit(e)}
        
        />
        <button type="submit" onClick={(e)=> handleSubmit(e)}>Buscar</button>



    </div>
)

}