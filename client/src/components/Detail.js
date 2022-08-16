import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import {deleteDetails, getDetail} from "../actions"
import { Link} from "react-router-dom";
import styles from './Detail.module.css'

//bee315d18f7ac35bb32c11d522ea27109512d2de


export const Detail = ({match}) =>{
  const detail = useSelector((state) => state.perro);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetail(match.params.id));
    //return () => dispatch(deleteDetails());
  }, [match.params.id,dispatch]);
  
    return (

  <div className={styles.fondo}>

      {detail ? ( 

    <div className={styles.home}>
      

      <div className={styles.box}> 

             
          <div className={styles.data}>
          <Link to="/home">
                    <h2>Volver</h2>
            </Link>
            <h3 className={styles.name}>{detail[0]?.name}</h3>
            <img src={detail[0]?.image} className={styles.image} alt={detail.name} width="200px" height="250px"/> 
          <div className={styles.columnas} >
            <div >  
                <h4 className={styles.titletemp}>Temperaments </h4>
              
                <ul className={styles.allTemps}>{detail[0]?.temperament
                      ? detail[0].temperament?.map((elem) => elem + ", " + elem + " ")
                      : detail[0]?.temperaments?.map(
                          (elem) => elem.name + ", "
                        )}  </ul>
            </div>

            
                <div className={styles.sizedog}>
                  <p></p>
                  <p></p>
                <h4 className={styles.sizetitle}>Size </h4>
                

                <h3 className={styles.caracts}>Weight:    {detail[0]?.weight} </h3>           
                <h3 className={styles.caracts}>Height:    {detail[0]?.height}</h3>
                
                <h3 className={styles.caracts}>Life span:    {detail[0]?.life_span}</h3>
                </div> 
                </div>
              <div>
            </div>
          </div>        
        </div> 
      </div>

      ):(

        <h2>Loading ...</h2>

        )}

  </div> 
            
      );
    };

