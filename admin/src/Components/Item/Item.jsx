import React from 'react'
import  './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <div className='item'>
            <div className='item-container' >
            <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} src={props.image} alt="products"  /></Link>
                <div className='item-details'>  
                    <p>{props.name}</p>
                    <p>{props.cat}</p>
                </div>
                
                <div className='item-prices'>
                    <div className='item-reserve-price'>
                        Reserve met <br/>
                        ${props.reserve_price}
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Item