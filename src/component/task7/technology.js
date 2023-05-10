import React from "react";
import './technology.css';
import img1 from './images1.png';
import img2 from './images2.jpg';
import img3 from './images3.jpg';
import img4 from './images4.jpg';

function Technology(){
    return(
        <>
        <div className="bg-primary container-fluid">
        <div className="text-center">
        <h1>Learn 4.0 Technologies </h1>
        <p>Get trained by alumni of IITS and top companines like Amazon,Microsoft etc.Learn directly from proffessional invloved in product Development</p>
        </div>
        <div className="justify-content-around row mr-0">
        <div className="col-lg-5 bg-light mt-4  adiv">
            <h2>Data Scientist</h2>
            <p>A data scientist uses data to understand and explain the phenomena around them, and help organizations make better decisions</p>
            <img src= {img1} className="d-flex mr-5 ml-auto "/>
        </div>
        <div className="col-lg-5 bg-light mt-4 bdiv">
            <h2>IOT Developer</h2>
            <p>Developers are professionals who can develop,manage,and monitor IoT devices and systems by combining components data, technology, and research.</p>
            <img src= {img2} className="d-flex mr-5 ml-auto"/>
        </div>
        <div className="col-lg-5 bg-light mt-4 cdiv">
            <h2>VR Developer</h2>
            <p>A VR developer will likely need to work with a 3D system like 3DS Max and a 3D software development system like a game engine.</p>
            <img src= {img3} className="d-flex mr-5 ml-auto"/>
        </div>

        <div className="col-lg-5 bg-light mt-4 ddiv">
            <h2>ML Engineer</h2>
            <p>Focuses on researching, building and designing self-running artificial intelligence (AI) systems to automate predictive models.</p>
            <img src= {img4} className="d-flex mr-5 ml-auto"/>
        </div>
        
        </div>
        </div>
        </>
    )
}
export default Technology;