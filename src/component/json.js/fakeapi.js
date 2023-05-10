import { useEffect, useState } from "react";

function Fakeapi(){
    const[detail,setDetail]=useState([])
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>setDetail(data))
    })
    return(
        <>
            <div className="row mr-0">
            {detail.map((value,index)=>(
                <>
                    <div class="card col-lg-4">
                    <img src={value.image}class="card-img-top"/>
                    <div class="card-body">
                        <h1 class="card-title">{value.title}</h1>
                        <h3 class="card-text">{value.description}</h3>
                    
                    </div>
                    </div>
                </>
            ))}
            </div>
        </>
    )
}
export default Fakeapi;