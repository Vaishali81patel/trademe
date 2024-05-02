import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero/Hero'
import Offers from '../Components/Offers/Offers'
import Popular from '../Components/Popular/Popular'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'

const Shop = () => {

  const [popular, setPopular] = useState([]);
  
  const fetchInfo = () => { 
    fetch('http://localhost:3000/popular') 
            .then((res) => res.json()) 
            .then((data) => setPopular(data))
    }

    useEffect(() => {
      fetchInfo();
    }, [])

    return (
      <div>
        <Hero/>
        <Offers/>
        <Popular data={popular}/>
        <ProductDisplay />
      </div>
    )
  }
  
  export default Shop
  