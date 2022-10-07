import React from "react"
const FRinput = React.forwardRef((props,ref)=>{
    return(
        <div>
            <h1> FR input</h1>
            <input type="text" ref = {ref}></input>
        </div>
    )
})
export default FRinput;