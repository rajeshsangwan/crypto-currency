// import React from 'react'

// function Coin() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Coin
// upper line of code is obtain using 'rce'
import React from 'react'
import './Coin.css'

const Coin = ({name,image,symbol,price,volume,priceChange,marketcap})=> {
  return (
    <div className='coin_container'>
      <div className="coin_row">
        <div className="coin">
            <img src={image} alt="crypto" />
            <h1>{name}</h1>
            <p className="coin_symbol">{symbol}</p>
        </div>
        <div className="coin_data">
            <p className="coin_price">{price}INR</p>
            <p className="coin_volume">{volume.toLocaleString()}INR</p>
            {priceChange < 0 ? (
                <p className="coin_percent red">{priceChange.toFixed(2)}%</p>
            ):( <p className="coin_percent green">{priceChange.toFixed(2)}%</p>)
        }
        <p className="coin_marketcap">
            Market Cap : {marketcap.toLocaleString()} INR
        </p>
        </div>
      </div>
    </div>
  )
}

export default Coin


