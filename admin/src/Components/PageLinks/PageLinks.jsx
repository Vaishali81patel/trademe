import React, { useState } from 'react'
import './PageLinks.css'
import { Link } from 'react-router-dom'

const PageLinks = () => {
    const [menu] = useState("shop")
    return (
        <div className='pageLinks'>
            <div class="row">
                <div class="column">
                    <Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<h/>:<></>}
                    <Link style={{ textDecoration: 'none'}} to='/compareList'>Compare here</Link>{menu==="compare"?<h/>:<></>}
                    <Link style={{ textDecoration: 'none'}} to='/watchList'>Watchlist</Link>{menu==="watchList"?<h/>:<></>}
                    <Link style={{ textDecoration: 'none'}} to='/favourites'>Favourites</Link>{menu==="favourites"?<h/>:<></>}
                    <Link style={{ textDecoration: 'none'}} to='/startAListing'>Start a listing</Link>{menu==="startAListing"?<h/>:<></>}
                    <Link style={{ textDecoration: 'none'}} to='/myTradeMe'>My Trade Me</Link>{menu==="myTrademe"?<h/>:<></>}    
                </div>
                <div class="column">
                <Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<h/>:<></>}
                    <Link style={{ textDecoration: 'none'}} to='/compareList'>Compare here</Link>{menu==="compare"?<h/>:<></>}
                    <Link style={{ textDecoration: 'none'}} to='/watchList'>Watchlist</Link>{menu==="watchList"?<h/>:<></>}
                    <Link style={{ textDecoration: 'none'}} to='/favourites'>Favourites</Link>{menu==="favourites"?<h/>:<></>}
                    <Link style={{ textDecoration: 'none'}} to='/startAListing'>Start a listing</Link>{menu==="startAListing"?<h/>:<></>}
                    <Link style={{ textDecoration: 'none'}} to='/myTradeMe'>My Trade Me</Link>{menu==="myTrademe"?<h/>:<></>}    
            </div>
            <div class="column">
                    <Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<h/>:<></>}
                    <Link style={{ textDecoration: 'none'}} to='/compareList'>Compare here</Link>{menu==="compare"?<h/>:<></>}
                    <Link style={{ textDecoration: 'none'}} to='/watchList'>Watchlist</Link>{menu==="watchList"?<h/>:<></>}
                    <Link style={{ textDecoration: 'none'}} to='/favourites'>Favourites</Link>{menu==="favourites"?<h/>:<></>}
                    <Link style={{ textDecoration: 'none'}} to='/startAListing'>Start a listing</Link>{menu==="startAListing"?<h/>:<></>}
                    <Link style={{ textDecoration: 'none'}} to='/myTradeMe'>My Trade Me</Link>{menu==="myTrademe"?<h/>:<></>}    
            </div>
            <div class="column">
            <Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<h/>:<></>}
                    <Link style={{ textDecoration: 'none'}} to='/compareList'>Compare here</Link>{menu==="compare"?<h/>:<></>}
                    <Link style={{ textDecoration: 'none'}} to='/watchList'>Watchlist</Link>{menu==="watchList"?<h/>:<></>}
                    <Link style={{ textDecoration: 'none'}} to='/favourites'>Favourites</Link>{menu==="favourites"?<h/>:<></>}
                    <Link style={{ textDecoration: 'none'}} to='/startAListing'>Start a listing</Link>{menu==="startAListing"?<h/>:<></>}
                    <Link style={{ textDecoration: 'none'}} to='/myTradeMe'>My Trade Me</Link>{menu==="myTrademe"?<h/>:<></>}    
            </div>
            <div class="column">
            <Link style={{ textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<h/>:<></>}
                    <Link style={{ textDecoration: 'none'}} to='/compareList'>Compare here</Link>{menu==="compare"?<h/>:<></>}
                    <Link style={{ textDecoration: 'none'}} to='/watchList'>Watchlist</Link>{menu==="watchList"?<h/>:<></>}
                    <Link style={{ textDecoration: 'none'}} to='/favourites'>Favourites</Link>{menu==="favourites"?<h/>:<></>}
                    <Link style={{ textDecoration: 'none'}} to='/startAListing'>Start a listing</Link>{menu==="startAListing"?<h/>:<></>}
                    <Link style={{ textDecoration: 'none'}} to='/myTradeMe'>My Trade Me</Link>{menu==="myTrademe"?<h/>:<></>}    
            </div>
         </div>
    </div>
    )
}

export default PageLinks