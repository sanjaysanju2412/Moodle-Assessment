import React from "react";
import './social.css';

function Social(){
    return(
        <>
        <div className="imb main"> 
        <h1 className="text-center">Social Buttons</h1> 
        <div className="container-fluid row">

        <div className="col-lg-4">

        </div>

        <div className="col-lg-4">
        <a className="btn btn-warning text-light ml-5 m-4">Like</a>
        <a className="btn bg-light m-4">Comment</a>
        <a className="btn bg-primary text-light m-4">Share</a>
        </div>

        <div className="col-lg-4">

        </div>
        </div>
        </div>
        </>
    )
}
export default Social;