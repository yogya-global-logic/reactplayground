import React,{useState} from "react";

function FuncThird(props){
    // const [counter,setCounter] = useState(0);
    return(
        <div>
            {/* <h1>FuncThird</h1> */}
            {/* <div className="m-2 bg-info">Functional</div> */}
            <h3>Input Value : {props.text}</h3>
            <input className="p-2 form-control w-25 m-auto" onChange={(e)=>props.handleText(e)} ></input>
            <button  onClick={()=>props.handleAdd()} className="m-2 btn btn-primary">Add</button>
            <h2>{props.counter}</h2>
            <button onClick={()=>props.handleMinus()} className="m-1 btn btn-danger">Minus</button>
            {/* <div className="m-2 bg-warning">Class</div>         */}
        </div>
    )
}

export default FuncThird;


