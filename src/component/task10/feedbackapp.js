import React from "react";
import './feedbackapp.css';
import { Link } from "react-router-dom";
import sad from './sademo.png';
import none from './noneemo.png';
import happy from './hpyemo.png';

function Feedbackapp(){
    return(
        <>
        <div className="frst-div p-5">
            <div className="sec-div bg-light container p-5">
                <div>
                    <h1 className="text-center">How satisfied are you with your customer support performance</h1>
                </div>
            <div className="text-center row">
                <div className="col-lg-4">
               <Link to='/feedbackapp/feedbacknext'><img src= {sad} className="col-lg-6 mr-3 ml-auto"/>
                <h1 className="text-dark">Sad</h1></Link>
                </div>

                <div className="col-lg-4">
                <Link to='/feedbackapp/feedbacknext'><img src= {none} className="col-lg-6 mr-3 ml-auto"/>
                <h1 className="text-dark">None</h1></Link>
                </div>
                
                <div className="col-lg-4">
                <Link to='/feedbackapp/feedbacknext'><img src= {happy} className="col-lg-6 mr-auto ml-auto"/>  
                <h1 className="text-dark">Happy</h1></Link>
                </div>
                
              
            </div>
            
            </div>
        </div>
        </>
    )
}
export default Feedbackapp;
