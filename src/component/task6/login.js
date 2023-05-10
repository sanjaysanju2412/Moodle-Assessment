import React from "react";
import './login.css';
import computer from './download.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

function Login(){
    return(
        <>
        <div className=" container-fluid p-5 bg-danger dh">
        <div className="container row bg-light">
        <div className="col-lg-6 p-5"> 
        <img src ={computer} className="col-lg-8 d-flex mr-auto ml-auto"/> 
        </div>
        <div className="col-lg-6">
            <h3>Member Login</h3><br/>
            <div>
            <FontAwesomeIcon icon={faUser}/>
            <input type="email" placeholder="Email" className="fic"/>
            </div><br/>
            <div>
            <FontAwesomeIcon icon={faLock}/>
            <input type="email" placeholder="Password" className="fic1"/>
            </div><br/>
            <button type="button" className="bg-success text-light btn rounded-pill">LOGIN</button><br/>
            <p className="text-success"><span className="text-dark">Forgot</span> Username / Password ?</p><br/>
            <label className="text-success">Create your account</label>
        </div>
        </div>
        </div>
        </>
    )
}
export default Login;
