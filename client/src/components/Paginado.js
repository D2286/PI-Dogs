import React from "react";
import style from './Paginado.module.css';


export default function Paginado ({dogsxPage,allPerros,paginado}){
    const pagNumbers = []

    for (let i = 1; i<=Math.ceil(allPerros/dogsxPage); i++) {
        pagNumbers.push(i)
        
    }
    return (
        <div class="pagination justify-content-center">
    <nav className={style.error} >
      <ul class="pagination pagination-sm">
        {
          pagNumbers?.map(number => (
            <li key={number}
            className={style.list}>
              <a class="page-link" href="#" onClick={() => paginado(number)} >{number}</a>
            </li>
          ))}
      </ul>
    </nav>
    </div>
    
    )
}