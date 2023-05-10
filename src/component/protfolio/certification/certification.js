import React from "react";
import './certification.css';
import depth from './HTML CSS D_page-0001.jpg';
import tech from './Tech foundation Certificate_page-0001.jpg';
import fend from'./Meta Front End Certificate_page-0001.jpg';
import bend from './Meta Back End Certificate_page-0001.jpg';
import java from './Java Certificate_page-0001.jpg';
import jscript from './JAVA SCRIPT Certificate_page-0001.jpg';
import sql from './SQL Certificated_page-0001 (1).jpg';
import ibm from './IBM Certificate_page-0001.jpg';

import Typewriter from 'typewriter-effect';


export function Certification(){
    return(
        <>
        <div id="certification" className="cer-div">
           <div className="text-center">
            <h1 className="font-weight-bold text-primary "><Typewriter options= {{strings: ['CERTIFICATION' ],autoStart: true,loop: true, }}/></h1>
            </div>
            <div className="row mr-0">
                <div className="col-lg-6 ">
                 <img src= {tech} className="col-lg-10 mr-auto ml-auto d-flex mt-5"/>
                 <div className="text-center common-div mt-2">
                 <h3>TECH-FOUNDATION</h3>
                 <h5>Certificate in KGISL Micro College</h5>
                 </div>
                </div>
                <div className="col-lg-6">
                <img src= {depth} className="col-lg-10 mr-auto ml-auto d-flex mt-5"/>
                 <div className="text-center common-div mt-2">
                 <h3>HTML&CSS Depth</h3>
                 <h5>HTML & CSS Depth Certificate in Meta</h5>
                 </div>
                </div>

                <div className="col-lg-6">
                <img src= {fend} className="col-lg-10 mr-auto ml-auto d-flex mt-5"/>
                 <div className="text-center common-div mt-2">
                 <h3>META FRON-END DEVELOPER</h3>
                 <h5>Certificate in Meta</h5>
                 </div>
                </div>

                <div className="col-lg-6">
                <img src= {bend} className="col-lg-10 mr-auto ml-auto d-flex mt-5"/>
                 <div className="text-center common-div mt-2">
                 <h3>META BACK-END DEVELOPER</h3>
                 <h5>Certificate in Meta</h5>
                 </div>
                </div>

                <div className="col-lg-6">
                <img src= {java} className="col-lg-10 mr-auto ml-auto d-flex mt-5"/>
                 <div className="text-center common-div mt-2">
                 <h3>JAVA Basic</h3>
                 <h5>Certificate in KGISL Micro College</h5>
                 </div>
                </div>

                <div className="col-lg-6">
                <img src= {jscript} className="col-lg-10 mr-auto ml-auto d-flex mt-5"/>
                 <div className="text-center common-div mt-2">
                 <h3>JAVASCRIPT</h3>
                 <h5>Certificate in Meta</h5>
                 </div>
                </div>

                <div className="col-lg-6">
                <img src= {sql} className="col-lg-10 mr-auto ml-auto d-flex mt-5"/>
                 <div className="text-center common-div mt-2">
                 <h3>SQL</h3>
                 <h5>Certificate in IBM</h5>
                 </div>
                </div>

                <div className="col-lg-6">
                 <img src= {ibm} className="col-lg-10 mr-auto ml-auto d-flex mt-5"/>
                 <div className="text-center common-div mt-2">
                 <h3>IBM </h3>
                 <h5>Full Stack Developement Assessment Certificate in IBM</h5>
                 </div>   
                </div>
                
            </div>
        </div>
        </>
    );
}