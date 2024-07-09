import React  from "react";

import PropsTypes from "prop-types"

function ListCoin({nameCoin, ticker, peringatan}) { 
    return ( 
        <div className="cryptoTokens"> 
        <h2>ini adalah koin {nameCoin} </h2>
        <h3>ini adalah ticker nya {ticker} </h3>
        <button onClick={()=> peringatan(nameCoin)}></button></div>
    )
} 

ListCoin.propTypes = { 
    nameCoin: PropsTypes.string.isRequired, 
    ticker : PropsTypes.string.isRequired
}

ListCoin.defaultProps = { 
    ticker : "tidak di ketahui" , 

}

export default ListCoin; 