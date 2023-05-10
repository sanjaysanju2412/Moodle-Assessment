import React from "react";
import './about.css';
import sanjay from './nxt.jpeg'


export function About(){
    return(
        <>
        <div className="br-div" id="aboutpagehead">
            <div className="container-fluid row">
        <div className="col-lg-6">
            <div className="col-lg-8 mr-auto ml-auto aboutimgdiv">
                <img className="col-lg-10 mr-auto ml-auto d-flex mt-5" src= {sanjay}/>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="">
            <h2 className="about-h">About Me</h2>
            <h4 className="text-light">Hi, I am Sanjay. I am Certified Full Stack Developer. I can create a responsive website. And I can handle the both front end and back end as well as Alone. Comparitively other languages I have more known about HTML, CSS, JavaScript, Spring Boot, ReactJS and NodeJS.</h4>
            <button className="butn bg-success mt-2">
                <a className="ar-butn text-light" href="https://drive.google.com/file/d/1ZsOdEh9R7J6q5DWXGE3-lK1C64iOVKd5/view?usp=sharing" download target="_blank"> Download CV <br/>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cloud-arrow-down" class="svg-inline--fa fa-cloud-arrow-down " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39V184c0-13.3-10.7-24-24-24s-24 10.7-24 24V318.1l-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"></path></svg></a>
            </button>
            </div>
        </div>
        </div>
        </div>
        </>
    );
}