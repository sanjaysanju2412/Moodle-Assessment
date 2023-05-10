import React from "react";
import './home.css';
import Typewriter from 'typewriter-effect';
import 'bootstrap/dist/css/bootstrap.min.css';
export function Home(){
    return(
        <>
            <div className="back-div" id="homepage">

            <div className="text-white text-center">
            <h1 className="am-name"><Typewriter options= {{strings: ['I Am ' ],autoStart: true,loop: true, }}/></h1>
            </div>
            <div className="text-warning text-center">
            <h1 className="r-name"><Typewriter options= {{strings: ['SANJAY' ],autoStart: true,loop: true, }}/></h1>
            </div>
            </div>
        
        </>
    );
}