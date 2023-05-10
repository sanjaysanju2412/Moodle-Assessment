import React from "react";
import './education.css'
import school from './school.png';
import brain from './brain.png';
import college from './clg.jpg';

export function Education(){
    return(
        <>
        <div id="education" className="edu-back p-5">
            <div className=" row mr-0">
            <div className="col-lg-4 mt-4">
                <div className="edu-div mt-5 div-mo">
                <img src= {school} className="col-lg-7 mr-auto ml-auto d-flex"/>
                 <div className=" mt-2 text-white ml-2 ">
                 <h5>Bishop Ubagaraswamy Higher Secondary School</h5>
                 <h5>TIRUPPUR-641602</h5>
                 <h2>SSCL - 2016-2017</h2>
                 <h2>61%</h2>
                 </div>
                </div>
                </div>

                
                <div className="col-lg-4 mt-4 div-mo">
                <div className="edu-div mt-5">
                <img src= {school} className="col-lg-7 mr-auto ml-auto d-flex"/>
                 <div className=" mt-2 text-white">
                 <h5>Bishop Ubagaraswamy Higher Secondary School</h5>
                 <h5>TIRUPPUR-641602</h5>
                 <h2>HSC - 2018-2019</h2>
                 <h2>63%</h2>
                 </div>
                </div>
                </div>
                
                <div className="col-lg-4 mt-5 div-mo">
                <div className="edu-div mt-4">
                <img src= {college} className="col-lg-7 mr-auto ml-auto d-flex mt-3"/>
                 <div className="mt-2 text-white ml-2">
                 <h5>Terf's Academy College Of Arts & Science</h5>
                 <h5>AvinashiPalayam TIRUPPUR-641602</h5>
                 <h2>2019-2022</h2>
                 <h2>73%</h2>
                 </div>
                </div>
                </div>
            </div>
        </div>
        </>
    );
}
