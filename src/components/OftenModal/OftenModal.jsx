
import React from 'react';

export default function OftenModal ({setOpenModal2}){
    return(
        <>
        <h1>Interactive Settings</h1>
        <h4>Your settings have now been saved to buddy!</h4>
        <h5>How Often Would You Like Buddy to Interact with you?</h5>
        <form>
            <label>Every Hour</label>
            <input type="radio" />
            <label>Every 3 Hours</label>
            <input type="radio" />
            <label>Every 6 Hours</label>
            <input type="radio" />
            <label>Once a Day</label>
            <input type="radio" />
        </form>
        <button onClick={()=> setOpenModal2(false)}>Finish</button>
        </>
    )
}