import React from "react";
import Child from "./Child";
function Parent(){
    return(
        <div className="bg-primary m-2 p-2">
            <h1>Parent</h1>
            <Child></Child>
        </div>
    )
}
export default Parent;