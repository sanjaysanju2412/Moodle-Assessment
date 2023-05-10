import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck,faBell} from "@fortawesome/free-regular-svg-icons";
import './notification.css';
function Notification(){
    return(
        <>
        <h1 className="text-center">Notification</h1>
        <div className="bg-primary text-light sub row">
            <FontAwesomeIcon icon={faCircleCheck} className="fnt"/>
            <h5>information Message</h5>
        </div>
        <div className="bg-success text-light sub row">
            <FontAwesomeIcon icon={faCircleCheck} className="fnt"/>
            <h5>Success Message</h5>
        </div>
        <div className="bg-warning text-light sub row">
            <FontAwesomeIcon icon={faBell} className="fnt"/>
            <h5>Warning Message</h5>
        </div>
        <div className="bg-danger text-light sub row">
            <FontAwesomeIcon icon={faBell} className="fnt"/>
            <h5>Error Message</h5>
        </div>
        </>
    )
}
export default Notification;