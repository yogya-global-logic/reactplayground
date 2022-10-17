import React,{useContext} from "react";
import {name} from './Grandparent';
function Child(){
    const myName = useContext(name);
    return(
        <div className="bg-info m-2 p-2">
            <name.Consumer>
                {
                    (nameFromGrandparent)=>{
                        return <h1>Child {nameFromGrandparent}</h1>
                    }
                }
            </name.Consumer>
            {/* alternative and fast way */}
            {/* using usecontext */}
            <h1> Child (useContext) {myName}</h1>
        </div>
    )
}
export default Child;