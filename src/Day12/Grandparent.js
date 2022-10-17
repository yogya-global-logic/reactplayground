import React,{createContext} from "react";
import Parent from "./Parent";

const name = createContext(); 

function Grandparent(){

    return(
        <div className="bg-warning my-2 mx-auto p-2 w-75">
            <h1>Grandparent</h1>
            <name.Provider value={"yogya"}>
            <Parent></Parent>
            </name.Provider>
        </div>
    )
}
export default Grandparent;
export {name};