import { useEffect, useState } from "react";

function Localjson(){
    const[detail,setDetail]=useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/data.json")
        .then(res=>res.json())
        .then(data=>setDetail(data))
    })
    return(
        <>
            <div className="row">
            {detail.map((value,index)=>(
                <>
                <div class="card" >
                <div class="card-body">
                    <h1 class="card-title">First Name: {value.firstname}</h1>
                    <h1 class="card-title">Last Name: {value.lastname}</h1>
                    <h3 class="card-text">Phone: {value.phone}</h3>
                </div>
                </div>
                </>
            ))}
            </div>
        </>
    )
}
export default Localjson;