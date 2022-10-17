import React,{useState,useEffect,useContext} from "react";


function Hooks(){
    const [counter,setCounter] = useState(0);
    const [flag,setFlag] = useState(true);
    useEffect(()=>{
        console.log("useffect only on counter",counter);
    },[counter])

    useEffect(()=>{
        console.log("useffect only once");
    },[])
    useEffect(()=>{
        console.log("useffect everytime");
    })
    return(
        <div>
            <h1>Hooks </h1>
            <div className="d-flex m-2 p-2 justify-content-center">
            <h2>Flag: {String(flag)}</h2>
            <button onClick={()=>setFlag(!flag)} className="mx-2 btn btn-success">Change Flag</button>
            </div>
            <button className="btn btn-primary" onClick={()=>setCounter(counter+1)}>Add</button>
            <h2>{counter}</h2>
            <button className="btn btn-danger" onClick={()=>setCounter(counter-1)}>Minus</button>
        </div>
    )
}
export default Hooks;