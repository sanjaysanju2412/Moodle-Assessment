import React from "react";
import './protmenu.css';
import { Link as ScrollLink } from 'react-scroll';
export function Protmenu(){
    return(
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top bg-dark">
            <a><h1 class="nav-brand font-weight-bold text-light"> WELCOME</h1></a>
            <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon "></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <ScrollLink activeClass="active" to="homepage" spy={true} smooth={true} duration={400} className=" nav-link active  text-light ml-5 cu-use">Home</ScrollLink>
                <ScrollLink activeClass="active" to="aboutpagehead" spy={true} smooth={true} duration={600} className=" nav-link active  text-light ml-5 cu-use">About</ScrollLink>
                <ScrollLink activeClass="active" to="certification" spy={true} smooth={true} duration={900} className=" nav-link active  text-light ml-5 cu-use">Certification</ScrollLink>
                <ScrollLink activeClass="active" to="education" spy={true} smooth={true} duration={1300} className=" nav-link active  text-light ml-5 cu-use">Education</ScrollLink>
                <ScrollLink activeClass="active" to="skills" spy={true} smooth={true} duration={1300} className=" nav-link active  text-light ml-5 cu-use">Skills</ScrollLink>
                <ScrollLink activeClass="active" to="contact" spy={true} smooth={true} duration={300} className=" nav-link active  text-light ml-5 cu-use">Contact</ScrollLink>

              </div>
            </div>
          </nav>
        
        </>
    );
}