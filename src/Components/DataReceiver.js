import React from "react";
function DataReceiver(props){
    console.log("props",props.data);
    return(
        <div>
            <h1>DataReceiver</h1>
            {
                props.data.map((item)=>(
                    <div className="bg-warning m-2 p-1">
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
export default DataReceiver;