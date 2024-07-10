import React  from 'react';
import './App.css';
import data from "./data" 
import showAnimal  from '../components/instructions';
import Animalcard from '../components/AnimalCard/AnimalCard';


function App() { 
  return ( 
    <div className='wrapper'> 
      <ul> 
        {
          data.map(hewan => ( 
            <Animalcard key={hewan.name} {...hewan} ></Animalcard>
          ))
        }
      </ul>
    </div>
  )
}

export default App ; 