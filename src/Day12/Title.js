import React from "react";
import useHeader from "./useHeader";

function Title(){
    const msg = useHeader();
    return(
        <div className="bg-light">
            <h1>Title : {msg}</h1>
        </div>
    )
}
export default Title;






