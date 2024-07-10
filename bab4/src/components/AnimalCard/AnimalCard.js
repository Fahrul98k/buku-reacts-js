import React  from "react";
import Animalsdetails  from "../Animaldetails/Animaldetails";
import Card  from "../card/card";


function AnimalCard({name, scientificName, size, ...props}) { 
    return ( 
        <div> 
            <Card title="the name of animal" children="this is the children"> 
            <h3>{name} </h3>
            <div>{scientificName}</div>
           
            <Animalsdetails {...props} /> 
            </Card>

            
        </div>
    )
}

export default AnimalCard  ; 

