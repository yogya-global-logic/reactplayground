import React,{useState} from "react";
import FuncThird from "./FuncThird";
function FuncComp(){
    const [counter,setCounter] = useState(0);
    const [myCounter,setMycounter] = useState(0);
    const [text,setText] = useState('');
    const handleAdd=()=>{
        setCounter(counter+1);
    }
    const handleMinus=()=>{
        setCounter(counter-1);
    }
    const handleText=(props)=>{
        setText(props.target.value)
    }
    return(
        <div>
            <h1 className="bg-info m-2 p-2">FuncComp {counter} </h1>
            <div className=" d-flex">
                <div className="w-50">
                    <FuncThird text={text} handleText={handleText} handleAdd = {handleAdd} handleMinus={handleMinus} counter={counter} ></FuncThird>
                </div>
                <div className="d-grid w-50">
                    <button onClick={()=>setMycounter(myCounter+1)} className="m-auto w-25 btn btn-success">Plus</button>
                    <div className="m-auto">{myCounter}</div>
                    <button onClick={()=>setMycounter(myCounter-1)} className="m-auto w-25 btn btn-warning">Minus</button>
                </div>
            </div>
        
        </div>
    )
}

export default FuncComp;


