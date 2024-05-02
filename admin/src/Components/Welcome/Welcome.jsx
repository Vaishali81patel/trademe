import React from 'react';
 import './Welcome.css';

const Welcome = () => {
  return (
    <div className='welcome'>
        <div className='welcome_title'>KIA ORA! READY TO FIND YOUR NEW?</div>
        <div className='new_search_form_header' >
            <div className='welcome_research_container'>
                <form className='welcome_research_form' noValidate=''  method='POST' role='search'>
                    <input className='welcome_text_input_for_search' type='text' placeholder='Search all of Trade Me' id='' name='search_input'></input>
                    <button className='search_form_submit_button' type="submit" value="Search">search</button>  
                </form>
            </div>     
        </div>
    </div>
  )
}
 
export default Welcome;