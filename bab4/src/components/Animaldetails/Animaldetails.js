import React  from "react";

function convertFood(food) {
    switch(food) {
    case 'insects':
    return '🐜';
    case 'meat':
    return '🍖';
    case 'plants':
    default:
    return '🌱';
    }
    }


function Animalsdetails({diet}){ 
    return ( 
        <div> 
            Diet: {diet.map(food => convertFood(food)).join(',')} 
        </div>
    )
}


export default Animalsdetails ; 