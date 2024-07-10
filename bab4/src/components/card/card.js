import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";
import React  from "react";
import "./Card.css"

function Card({title , children}) { 
    return ( 
        
        <div className="card"> 
            <div className="card-details"> 
                <h1>{title}</h1>
                <h2>{children}</h2> 
            </div>

        </div>
    )
}


export default Card ; 