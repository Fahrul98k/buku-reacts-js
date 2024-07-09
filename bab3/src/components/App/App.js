
import './App.css';
import data from "./data" ; 
import ListCoin  from "../instructions/cryptoToken"


function App() {
  const peringatan = (tokenName) => { 
    alert("ini adlaah token" + tokenName)
  }
  return (
    <div className='ListCrypto'> 
    
     <ul> 
      
    { 
      data.map(token => (
        <li key={token.nameCoin}>
        <h1>{token.nameCoin} </h1> 
        < ListCoin nameCoin={token.nameCoin} ticker={token.ticker} peringatan= {peringatan} /> </li> // semmua parameter yang mau di berikan ke instructions di masukkan di sini 
        
      ))
    }
    </ul>








    </div>
  );
}

export default App;
