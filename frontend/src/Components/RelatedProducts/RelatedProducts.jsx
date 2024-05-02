import React from 'react'
import './RelatedProducts.css'
import Item from '../Item/Item'
import data_product from '../Assets/data'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {data_product.map((item)=>{
            return <Item id={item.id} name={item.name} image={item.image} buy_now_price={item.buy_now_price} reserve_price={item.reserve_price}/>
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
