import React,{useState,useEffect} from "react";
// import { Route } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
function Day3(){
    const [login,setLogin] = useState(false);
    const [signup,setSignup] = useState(false);
    const handleLogin=()=>{
       console.log("Button CLicked");
       setLogin(true);
       setSignup(false);
    }
    const handleSignup=()=>{
        console.log("Button CLicked");
        setLogin(false);
        setSignup(true);
     }
    
    return(
        <div>
            {/* <h1>Day3</h1> */}
            {/* <NavLink to='/login'> */}
                <button onClick={handleLogin} className='btn btn-primary m-3 p-3'>Login</button>
            {/* </NavLink> */}
            {/* <NavLink to='/signup'> */}
                <button onClick={handleSignup} className='btn btn-success m-3 p-3'>Singup</button>
            {/* </NavLink> */}
            {/* <button onClick={handleLogin} className="btn btn-primary">LOGIN</button> */}
            {
                login?<Login></Login>:<div></div>
            }
            {
                signup?<Signup></Signup>:<div></div>
            }
        </div>
    )
}
export default Day3;