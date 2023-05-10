import React,{useState} from "react";
import mango from './mango1.png';
import banana from './banana1.png';
import './fruitcounter.css';

function Fruitcounter(){
    const[count,setCount]=useState(0)
    const[zero,setZero]=useState(0)


    return(
        <>
        <div className="bg-warning container-fluid p-5 hi">
            <div className="text-center bg-light rond">
            <h1>Bob ate <span className="text-warning">{count}</span> mangoes <span className="text-warning">{zero}</span> bananas</h1>
                <div className="container row p-5">
                <div className="col-lg-6">
                <img src= {mango} className="mag "/><br/><br/>
                <button className=" btn btn-primary"onClick={()=>{setCount(count+1)}}>Eat Mango</button>

                </div>
                <div className="col-lg-6">
                <img src= {banana} className="ban"/><br/>
                <button className=" btn btn-primary mt-2"onClick={()=>{setZero(zero+1)}}>Eat Banaba</button>

                </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Fruitcounter;