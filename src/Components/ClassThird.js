import React from "react";
class ClassThird extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'hello',
            company:'GL'
        }
    }
    render(){
        return (
            <div>
                <h3>Input Value : {this.props.text}</h3>
                
            <input className="p-2 form-control w-25 m-auto" onChange={(e)=>this.props.handleText(e)} ></input>
            <button  onClick={()=>this.props.handleAdd()} className="m-2 btn btn-primary">Add</button>
            <h2>{this.props.counter}</h2>
            <button onClick={()=>this.props.handleMinus()} className="m-1 btn btn-danger">Minus</button>
            </div>
        )
    }
}
export default ClassThird;