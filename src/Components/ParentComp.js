import React,{useState,useEffect} from "react";
import ChildComp from "./ChildComp";
function ParentComp(){
    const [theme,setTheme] = useState(true);
    const handleTheme=()=>{
        setTheme(!theme)
    }
    return(
        <div >
            <h1 className={theme?"bg-dark text-light":"bg-light text-dark"}> Parent </h1>
            <ChildComp handleTheme = {handleTheme}></ChildComp>
        </div>
    )
}
export default ParentComp;