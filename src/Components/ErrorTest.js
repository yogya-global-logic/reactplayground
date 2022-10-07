import React from "react";
function ErrorTest({name}){
    if(name!='yogya'){
        throw new Error("Not Admin")
    }
    return(
        <div className="text-primary fs-3">
            Name: {name}
        </div>
    )
}
export default ErrorTest;