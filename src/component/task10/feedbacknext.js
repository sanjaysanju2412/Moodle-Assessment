import React from "react";
import './feedbacknext.css';
import heart from './heart.png';

function Feedbacknext(){
    return(
        <>
        <div className="frst-div p-5">
            <div className="sec-div bg-light container p-5">
            <div className="text-center">
                <img src= {heart}/>
                <h1>Thank You..!</h1>
                <h2>We will use your feedback to improve out customer support performance</h2>
            </div>

            </div>
        </div>
        </>
    )
}
export default Feedbacknext;