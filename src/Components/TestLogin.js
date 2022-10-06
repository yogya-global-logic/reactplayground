import React,{useEffect,useState} from "react";
function TestLogin(){
    const [name,setname] = useState('');
    const [warning,setwarning] = useState();
    useEffect(()=>{
        if(name.length==0){
            setwarning();
        }
        else if(name.length<6){
            setwarning('Minimum 6 required')
        }
        else{
            setwarning();
        }
    },[name])
    const handleName=(e)=>{
        e.preventDefault()
        setname(e.target.value);
    }
    const handleNameBlur=(e)=>{
        e.preventDefault();
        console.log("blue");
        // if(name.length<4){
        //     setwarning("minimum 4 char required")
        // }
        // else{
        //     setwarning();
        // }
    }
    return(
        <div>
            <h1>Test Login</h1>
            {/* {name} */}
            <form>
                {/* <label> name</label> */}
                <input onBlur={(e)=>handleNameBlur(e)} className="form-control w-25 m-auto" value= {name} onChange={(e)=>handleName(e)} type="text"></input>
                <p className="bg-danger text-warning w-25 mx-auto my-2 rounded">
                    {warning}
                </p>
               
            </form>
        </div>
    )
}
export default TestLogin;