import React,{useState} from "react";
function ControlledComp (){
    const [firstName,setFirstname] = useState();
    const [temp,setTemp] = useState();
    const handleSubmit=(e)=>{

    }
    return(
        <div>
            <h1>Controlled comp {firstName}</h1>
            <input onChange={(e)=>setTemp(e.target.value)} type="text"></input>
            <br></br>
            <button onClick={(e)=>setFirstname(temp)} className="m-2 btn btn-success">
                Submit
            </button>
        </div>
    )
}
export default ControlledComp;