import React from "react"
import './Popular.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
    return (
        <div className='popular'>
            <p> Cool Auction </p>
                <div className='popular-item'>
                {data_product.map((item,i)=> {
                    return <Item id={item.id} key={i} name={item.name} image={item.image} desc={item.description} reserve_price={item.reserve_price} />
                })}
            </div>
        </div>
    )
}

export default Popular