import React,{useState} from "react";

function Hooks(){
    const[count,setCount]=useState(0)
    return(
        <>
        <div className="text-center p-3">
        <h1>{count}</h1>
        <button className=" btn btn-success mr-3"onClick={()=>{setCount(count+1)}}>INCREASE</button>
        <button className="btn btn-primary mr-3"onClick={()=>{setCount(0)}}>RESET</button>
        <button className="btn btn-danger"onClick={()=>{setCount(count-1)}}>DECREASE</button>

        </div>
        </>
    )
}
export default Hooks;