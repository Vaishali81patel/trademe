import React from 'react'
import './Footer.css'

import logo from '../Assets/trademe-logo-no-tagline.png'

const Footer = () => {
     return (
        <div className='footer'>
            <div className="footer_logo">
                <img src={logo} alt="Trademe" />
            </div>
            <div className='footer_navbar'>
                <div class="footer navbar-expand-lg bg-body-tertiary">
                    <div class="container">
                        <ul className= "footer_menu">
                            <li onClick={()=>("List_New_Item")}>List an Item</li>
                            <li onClick={()=>("Watchlist")}>Watchlist</li>
                            <li onClick={()=>("Favourites")}>Favouritesm</li>
                            <li onClick={()=>("My_Trade_Me")}>My Trade Me</li>
                            <li onClick={()=>("Logout")}>Log out</li>
                        </ul>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Footer
