import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
import { getDetail} from "../store/actions";
import { Link} from "react-router-dom";
=======
import { getDetail} from "../actions";
import { Link, useParams} from "react-router-dom";
>>>>>>> bee315d18f7ac35bb32c11d522ea27109512d2de



export default function Detail(props){
    
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, [dispatch]);
  const detail = useSelector((state) => state.perro);

    return (
        <div>

            <div>

                <Link className="home" to="/home">
                    <h2>Volver</h2>
                </Link>
            </div>
    
                <div >
                <h3>{detail[0]?.name}</h3>
                <img src={detail[0]?.image} alt="No encontrado" width="200px" height="250px"/>
                
                <h3>Temperamentos<p>{detail[0]?.temperament
                      ? detail[0].temperament?.map((elem) => elem + ", ")
                      : detail[0]?.temperaments?.map(
                          (elem) => elem.name + ", "
                        )}  </p></h3>
                <h3>{detail[0]?.weight}</h3>
                <h3>{detail[0]?.height}</h3>
                <h3>{detail[0]?.life_span}</h3>
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