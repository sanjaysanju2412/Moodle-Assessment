import React from "react";
import './cricket.css';
import rcb from './rcb-img.png';
import csk from './csk-img.png';


function Cricket(){
    return(
        <>
     <div className="mat ">
    <h1>Super Over League</h1>
    <img src= {rcb}/>
    <img src= {csk}/>
    </div>
    </>

)}
    export default Cricket;