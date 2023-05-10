import React from "react";
import './congrats.css';
import man from './profile-img.png';
import watch from './congrats-card-watch-img.png';


function Congrats(){
    return(
        <>
            
        <div className="bck">
        <h1>Congratulation</h1>

        <div className="bck1">
        <img src= {man}/>
        <h5>kiran V</h5>
        <p>vishnu institute of computer education </p>
        <img src= {watch}/>
        </div>
        </div>
        </>
        
    );
}
export default Congrats;