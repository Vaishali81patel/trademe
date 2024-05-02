import React from 'react';
import './TopNavbar.css';

const TopNavbar = () => {
  return (
    <div className='top-nav-bar'>
      <div class="top-nav-bar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <ul className= "top-nav-menu">
              <li onClick={()=>("shop")}>Trade Me</li>
              <li onClick={()=>("watchlist")}>Trade Me Insurance</li>
              <li onClick={()=>("favourite")}>HolidayHouse</li>
              <li onClick={()=>("findSomeOne")}>FindSomeone</li>
              <li onClick={()=>("Motorweb")}>Motorweb</li>
              <li onClick={()=>("homes")}>Homes.co.nz</li>
              <li onClick={()=>("Register")}>Register</li>
              <li onClick={()=>("Login")}>Login</li>
          </ul>
       </div>
    </div>
   </div>
  )
}

export default TopNavbar;
