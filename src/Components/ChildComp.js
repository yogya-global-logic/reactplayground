import React,{useState,useEffect} from "react";
function ChildComp(props){

    return(
        <div className="bg-info">
            <h1> Child</h1>
            <button onClick={props.handleTheme}>Theme Changer</button>
        </div>
    )
}
export default ChildComp;