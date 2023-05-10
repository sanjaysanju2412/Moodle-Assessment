import React from "react";
import htmlicon from '../../icons/htmlicon.svg';
import cssicon from '../../icons/cssicon.svg';
import javascripticon from '../../icons/javascripticon.svg';
import mysqlicon from '../../icons/mysqlicon.png';
import javaicon from '../../icons/javaicon.svg';
import springbooticon from '../../icons/springbooticon.svg';
import reacticon from '../../icons/reacticon.svg';
import nodeicon from '../../icons/nodeicon.svg';

export function Skills(){
    return (
        <>
            <h1 className="text-center pt-5 pb-3">Skills</h1>
            <div className="skills text-center justify-content-around container-fluid row pt-5">
                <div className="col-lg-1">  
                    <img src={htmlicon} width="75"/><br/>
                    <label><b>HTML 5</b></label>
                </div>
                <div className="col-lg-1">  
                    <img src={cssicon} width="75"/><br/>
                    <label><b>CSS 3</b></label>
                </div>
                <div className="col-lg-1">  
                    <img src={javascripticon} width="87"/><br/>
                    <label><b>JavaScript</b></label>
                </div>
                <div className="col-lg-1">  
                    <img src={mysqlicon} width="97"/><br/>
                    <label><b>MySQL</b></label>
                </div>
                <div className="col-lg-1">  
                    <img src={javaicon} width="75"/><br/>
                    <label><b>Java</b></label>
                </div>
                <div className="col-lg-1">  
                    <img src={springbooticon} width="94"/><br/>
                    <label><b>SpringBoot</b></label>
                </div>
                <div className="col-lg-1">  
                    <img src={reacticon} width="92"/><br/>
                    <label><b>ReactJS</b></label>
                </div>
                <div className="col-lg-1">  
                    <img src={nodeicon} width="80"/><br/>
                    <label><b>NodeJS</b></label>
                </div>
            </div>
        </>
    );
}
