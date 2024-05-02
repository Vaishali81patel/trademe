import React, { createContext, useState, useEffect } from 'react'
import data_product from '../Components/Assets/data'

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

  const [setProducts] = useState([]);

  const contextValue = {data_product};

  useEffect(() => {
    fetch('http://localhost:4000/allproducts') 
          .then((res) => res.json()) 
          .then((data) => setProducts(data))
        
    }, [])

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
};
export default ShopContextProvider;
  
 

   
