import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail} from "../actions";
import { Link, useParams} from "react-router-dom";



export default function Detail(){
    
    const detail=useSelector((state)=>state.perro[0])
	const dispatch=useDispatch()
    console.log(detail)
	let {id}=useParams();
	useEffect(()=>{
		dispatch(getDetail(id))
	},[dispatch])
    
    
    return (

        <div>

            <div>

                <Link className="home" to="/home">
                    <h2>Volver</h2>
                </Link>
            </div>
    
                <div key={id}>
                <h3>{detail?.name}</h3>
                <img src={detail?.image} alt="No encontrado" width="200px" height="250px"/>
                <h3>{detail?.temperament}</h3>
                <h3>{detail?.weight}</h3>
                <h3>{detail?.height}</h3>
                <h3>{detail?.life_span}</h3>
                </div>
        </div>       
      );
    };


/* export const Detail=()=>{
      
    const dispatch = useDispatch()
    const detail= useSelector((state)=>state.perro)
    const {id}=useParams();

    useEffect(()=>{
    dispatch(getDetail(id))
  },[id]) */