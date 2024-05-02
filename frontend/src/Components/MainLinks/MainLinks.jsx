import React from 'react';
import './MainLinks.css';

const MainLinks = () => {
   return (
    <div className='mainLinks'>
        <div class="container">
          <input class="btn" type='button' value= 'Marketplace' />
          <input class='btn button2' value='Jobs'/>
          <input class='btn button3' value='Motors' />
          <input class='btn button4' value='Property' />
          <input class='btn button5' value='Services' />
      </div>
    
    <div class="mainLink_container">
      <h2>We have 2 new features available, 
        a bid & buy now filter and an add to compare, its like watchlist but you get to see the full
        page details side by side. Click on icon or <button class="button">Add to compare</button> when searching for items.
      </h2>
    </div>
  </div>
    )
}

export default MainLinks;