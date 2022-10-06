import React from "react";
function DataReceiver2(props){
    
    let arr;
    const sortFunction=()=>{
        arr = [...props.data];
        arr.sort((a,b)=>a.phoneNumber-b.phoneNumber)
    }
    sortFunction();
    return(
        <div>
            <h1>Sorted (Phone) DataReceiver2</h1>
            {
                arr.map((item)=>(
                    <div className="bg-info m-auto w-75">
                        {/* <h1>fff{item}</h1> */}
                    <h1>Name : {item.firstName} {item.lastName}</h1>
                    <h2>Phone: {item.phoneNumber} </h2>
                    <h2>Email: {item.emailAddress}</h2>
                    </div>
                ))
            }
        </div>
    )
}
export default DataReceiver2;