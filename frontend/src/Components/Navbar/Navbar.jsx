import React, { useState } from 'react'
import './Navbar.css'

import logo from '../Assets/trademe-logo-no-tagline.png'
import person_icon from '../Assets/person_account.png'

import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu,setmenu] = useState("shop")

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="Trademe" />
            </div>
            <div class="dropdown">Browse
                <div class="dropdown-content">
                    <div class="header">
                         <h2>Browse Marketplace</h2>
                    </div>
                    <div class="row">
                        <div class="column">
                            <h3>Category1</h3>
                            <Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<h/>:<></>}
                            <Link style={{ textDecoration: 'none'}} to='/compareList'>Compare here</Link>{menu==="compare"?<h/>:<></>}
                            <Link style={{ textDecoration: 'none'}} to='/watchList'>Watchlist</Link>{menu==="watchList"?<h/>:<></>}
                            <Link style={{ textDecoration: 'none'}} to='/favourites'>Favourites</Link>{menu==="favourites"?<h/>:<></>}
                            <Link style={{ textDecoration: 'none'}} to='/startAListing'>Start a listing</Link>{menu==="startAListing"?<h/>:<></>}
                            <Link style={{ textDecoration: 'none'}} to='/myTradeMe'>My Trade Me</Link>{menu==="myTrademe"?<h/>:<></>}    
                        </div>
                        <div class="column">
                            <h3>Category 2</h3>
                            <Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<h/>:<></>}
                            <Link style={{ textDecoration: 'none'}} to='/compareList'>Compare here</Link>{menu==="compare"?<h/>:<></>}
                            <Link style={{ textDecoration: 'none'}} to='/watchList'>Watchlist</Link>{menu==="watchList"?<h/>:<></>}
                            <Link style={{ textDecoration: 'none'}} to='/favourites'>Favourites</Link>{menu==="favourites"?<h/>:<></>}
                            <Link style={{ textDecoration: 'none'}} to='/startAListing'>Start a listing</Link>{menu==="startAListing"?<h/>:<></>}
                            <Link style={{ textDecoration: 'none'}} to='/myTradeMe'>My Trade Me</Link>{menu==="myTrademe"?<h/>:<></>}    
                        </div>
                        <div class="column">
                        <h3>Category 3</h3>
                            <Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<h/>:<></>}
                            <Link style={{ textDecoration: 'none'}} to='/compareList'>Compare here</Link>{menu==="compare"?<h/>:<></>}
                            <Link style={{ textDecoration: 'none'}} to='/watchList'>Watchlist</Link>{menu==="watchList"?<h/>:<></>}
                            <Link style={{ textDecoration: 'none'}} to='/favourites'>Favourites</Link>{menu==="favourites"?<h/>:<></>}
                            <Link style={{ textDecoration: 'none'}} to='/startAListing'>Start a listing</Link>{menu==="startAListing"?<h/>:<></>}
                            <Link style={{ textDecoration: 'none'}} to='/myTradeMe'>My Trade Me</Link>{menu==="myTrademe"?<h/>:<></>}    
                        </div>
                        <div class="column">
                        <h3>Category 4</h3>
                            <Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<h/>:<></>}
                            <Link style={{ textDecoration: 'none'}} to='/compareList'>Compare here</Link>{menu==="compare"?<h/>:<></>}
                            <Link style={{ textDecoration: 'none'}} to='/watchList'>Watchlist</Link>{menu==="watchList"?<h/>:<></>}
                            <Link style={{ textDecoration: 'none'}} to='/favourites'>Favourites</Link>{menu==="favourites"?<h/>:<></>}
                            <Link style={{ textDecoration: 'none'}} to='/startAListing'>Start a listing</Link>{menu==="startAListing"?<h/>:<></>}
                            <Link style={{ textDecoration: 'none'}} to='/myTradeMe'>My Trade Me</Link>{menu==="myTrademe"?<h/>:<></>}    
                        </div>
                        <div class="column">
                        <h3>Category 5</h3>
                            <Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<h/>:<></>}
                            <Link style={{ textDecoration: 'none'}} to='/compareList'>Compare here</Link>{menu==="compare"?<h/>:<></>}
                            <Link style={{ textDecoration: 'none'}} to='/watchList'>Watchlist</Link>{menu==="watchList"?<h/>:<></>}
                            <Link style={{ textDecoration: 'none'}} to='/favourites'>Favourites</Link>{menu==="favourites"?<h/>:<></>}
                            <Link style={{ textDecoration: 'none'}} to='/startAListing'>Start a listing</Link>{menu==="startAListing"?<h/>:<></>}
                            <Link style={{ textDecoration: 'none'}} to='/myTradeMe'>My Trade Me</Link>{menu==="myTrademe"?<h/>:<></>}    
                        </div>
                     </div>
                </div>
            </div>
        
                <ul className="nav-menu">
                    <li onClick={()=>("shop")}><Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<h/>:<></>}</li>
                    <li onClick={()=>{setmenu("compareList")}}><Link style={{ textDecoration: 'none'}} to='/compareList'>Compare here</Link>{menu==="compare"?<h/>:<></>}</li>
                    <li onClick={()=>{setmenu("watchList")}}><Link style={{ textDecoration: 'none'}} to='/watchList'>Watchlist</Link>{menu==="watchList"?<h/>:<></>}</li>
                    <li onClick={()=>{setmenu("favourites")}}><Link style={{ textDecoration: 'none'}} to='/favourites'>Favourites</Link>{menu==="favourites"?<h/>:<></>}</li>
                    <li onClick={()=>{setmenu("startAListing")}}><Link style={{ textDecoration: 'none'}} to='/startAListing'>Start a listing</Link>{menu==="startAListing"?<h/>:<></>}</li>
                    <li onClick={()=>{setmenu("myTradeMe")}}><Link style={{ textDecoration: 'none'}} to='/myTradeMe'>My Trade Me</Link>{menu==="myTrademe"?<h/>:<></>}</li>
                </ul>
            <div className="nav-login-cart">
                <Link to='/cart'><img src={person_icon} alt="" /></Link>
             </div>
        </div>
    )
}
export default Navbar
