import React from "react";
class Child extends React.Component{
    constructor(props){
        super(props)
    }
    componentWillUnmount(){
        // called when comp is inmount
        console.log("Child unmount"); 
    }
    render(){
        return(
            <div>
                <h1> Child </h1>
            </div>
        )
    }
}
export default Child;