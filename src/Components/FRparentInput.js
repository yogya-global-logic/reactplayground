import React from "react";
import FRinput from "./FRinput";
// import FRinput2 from "./FRinput2";
class FRparentInput extends React.Component{
    constructor(props){
        super(props)
        this.inputRef = React.createRef() 
        this.test = React.createRef()
    }
    handleClick=()=>{
        this.inputRef.current.focus()
        // this.test.current.value = this.inputRef.current.value;
        console.log("handleclick ",this.inputRef.current.value);
    }
    render(){
        return(
        <div>
            {/* <h1>hello</h1> */}
            <FRinput ref={this.inputRef} ></FRinput>
            {/* <FRinput2 ref={{
                inputRef:this.inputRef,
                test:this.test
                }} ></FRinput2> */}
            <button onClick={this.handleClick} className="btn btn-primary"> Click Me To Focus</button>
        </div>
        )
    }
}
export default FRparentInput;