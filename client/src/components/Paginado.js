import React from "react";

export default function Paginado ({DogsxPage,allPerros,paginado}){
    const pagNumbers = []

    for (let i = 0; i<=Math.ceil(allPerros/DogsxPage); i++) {
        pagNumbers.push(i)
        
    }
    return (
        <nav>
            <ul className="pag">
            { pagNumbers?.map(n =>(
                
                <li key={n}>
                    <div onClick={()=>paginado(n)}>{n}
                    
                    
                    </div>
                    </li>
                
                
            
            
            ))}

            </ul>
        </nav>
    
    )
}