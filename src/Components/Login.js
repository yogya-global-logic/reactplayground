import React,{useState,useEffect} from "react";

function Login(){
    
    const [email,setEmail] = useState();
    
    const [password,setPassword]= useState();
    const [confirmPassword,setconfirmpassword] = useState();

   
    const [Dataverified,setDataVerified] = useState(false);
    
    useEffect(()=>{
        if( email && password && confirmPassword ){
            setDataVerified(true);
        }
    },[email,password,confirmPassword])

    const handleSubmit=(e)=>{
        e.preventDefault();
        let emailVerified = isEmail(email);
        let passwordVerified;
       

        if (password.match(/[a-z]/g) && password.match(/[A-Z]/g) && 
        password.match(/[0-9]/g) && password.match(/[^a-zA-Z\d]/g) && 
        password.length >= 8 && password===confirmPassword )
            {
                passwordVerified = true;
            }
            else{
                passwordVerified = false;
            }
        if(!emailVerified){
            alert('invalid email')
        }
        if(!passwordVerified){
            alert('invalid password')
        }
       
        if(emailVerified&&passwordVerified)
            alert("success")
        // console.log("submit Clicked",passwordVerified,"mobile =",mobileVerified);
    }

   
   
   
    const isEmail = (email) =>/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    const handleEmail=(e)=>{
        e.preventDefault();
        console.log("emailcheck",isEmail(e.target.value));
        setEmail(e.target.value);
    }
    const handlePassword=(e)=>{
        e.preventDefault();
        setPassword(e.target.value);
    }
    const handleConfirmPassword=(e)=>{
        e.preventDefault();
        setconfirmpassword(e.target.value);
    }
   
    return(
        // Mandatory- First firstName, Last firstName, Gender, Email I’d, Password, Confirm Password 
// Optional- Mobile Number
        <div >
            {/* <h1 className="bg-info p-2">Signup</h1> */}
        
            <form className="rounded border border-success border-3 bg-warning w-50 mx-auto p-1 my-4">
            <div className="row my-4 mx-4 ">
           
         
           
            <div className="form-group my-2">
               
                <input value={email} onChange={(e)=>handleEmail(e)} required type="email" class="form-control " placeholder="Enter email"></input>
            </div>
           
            <div className="form-group my-2">
              
                <input value={password} onChange={(e)=>handlePassword(e)} required type="password" className="form-control"  placeholder="Password"></input>
            </div>
          
            <div className="form-group my-2">
                <input value={confirmPassword} onChange={(e)=>handleConfirmPassword(e)} type="password" className="form-control"  placeholder="Confirm Password"></input>
            </div>
           
          
        


       


        <button disabled={!Dataverified} onClick={(e)=>handleSubmit(e)} className="btn btn-primary w-25 m-auto" type="submit">Submit form</button>
            {/* <NavLink to='/'>
                <button type="submit" onClick={handleSubmit} className='btn btn-primary m-2 p-3'>Submit</button>
            </NavLink> */}
            {/* <Link onClick={(e)=>handleSubmit(e)} className={flag?'btn btn-primary':'btn btn-primary disabled'} to= '/movies'> Submit</Link> */}
       
            </div>        
            </form>

        
        </div>
    )
}
export default Login;