import { useEffect, useState } from "react";

function Database(){
    const[database,setDetail]=useState([])
    useEffect(()=>{
        fetch("http://localhost:130/userList")
        .then(res=>res.json())
        .then(data=>setDetail(data))
    })
    return(
        <>
            <div className="row mr-0">
            {database.map((value,index)=>(
                <>
                    <div class="card col-lg-4">
                    <img src=""class="card-img-top"/>
                    <div class="card-body">
                        <h1 class="card-title">{value.name}</h1>
                        <h3 class="card-text">{value.age}</h3>
                    
                    </div>
                    </div>
                </>
            ))}
            </div>
        </>
    )
}
export default Database;