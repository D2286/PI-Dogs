import React from "react";

export default function Paginado ({DogsxPage,allPerros,paginado}){
    const pagNumbers = []

    for (let i = 0; i<=Math.ceil(allPerros/DogsxPage); i++) {
        pagNumbers.push(i)
        
    }
    return (
        <nav>
            <ul className="pag">
<<<<<<< HEAD
            { pagNumbers?.map(n =>(
                
                <li key={n}>
                    <div onClick={()=>paginado(n)}>{n}
                    
                    
                    </div>
                    </li>
                
                
=======
            { pagNumbers.map((n) =>(
                // <li key={n}>
                // <a key={n} onClick={()=>paginado(n)}>{n}</a>
                // </li>
                <button key={n} onClick={()=>paginado(n)}>{n}</button>
            
>>>>>>> bee315d18f7ac35bb32c11d522ea27109512d2de
            
            
            ))}

            </ul>
        </nav>
    
    )
}