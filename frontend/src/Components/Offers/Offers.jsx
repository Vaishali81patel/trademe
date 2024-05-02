import React from 'react'
import './Offers.css'
import offer_image1 from '../Assets/Advertise-One.png'
import offer_image2 from '../Assets/Advertise-Two.png'
import offer_image3 from '../Assets/Advertise-Three.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers_row'>
            <div className='offers_column'>
                <img src= {offer_image1} alt='advertisement-One'  />
            </div>
            <div className='offers_column'>
                <img src= {offer_image2} alt='advertisement-Two' />
            </div>
            <div className='offers_column'>
                <img src= {offer_image3} alt='advertisement-Three' />
            </div>
        </div>
    </div>
  )
}

export default Offers