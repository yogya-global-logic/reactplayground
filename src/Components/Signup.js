import React,{useState,useEffect} from "react";
// import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
function Signup(){
    const [firstName,setfirstname] = useState();
    const [secondName,setsecondname] = useState();
    const [email,setEmail] = useState();
    
    const [password,setPassword]= useState();
    const [confirmPassword,setconfirmpassword] = useState();

    const[mobile,setMobile] = useState();
    const [Dataverified,setDataVerified] = useState(false);
    const [gender,setGender] = useState();
    useEffect(()=>{
        if(firstName && secondName && email && password && confirmPassword && gender){
            setDataVerified(true);
        }
    },[firstName,secondName,email,password,confirmPassword,gender])

    // const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        let emailVerified = isEmail(email);
        let passwordVerified;
        let mobileVerified = false;

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
        if(mobile){
            if(mobile.length==10 || mobile.length==0)
                mobileVerified=true;
            else
                mobileVerified=false;
        }
        else{
            mobileVerified = true;
        }
        if(!mobileVerified){
            alert('invalid phone')
        }
        if(mobileVerified&&emailVerified&&passwordVerified)
        alert("Success")
            // navigate('/');
        // console.log("submit Clicked",passwordVerified,"mobile =",mobileVerified);
    }

    function capitalizeFirstLetter(string) {
        // return string.charAt(0).toUpperCase() + string.slice(1);
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }
    const handleFirstName =(e)=>{
        e.preventDefault();
        var a = capitalizeFirstLetter(e.target.value);
        setfirstname(a);
    }
    const handleSecondName =(e)=>{
        e.preventDefault();
        var a = capitalizeFirstLetter(e.target.value);
        setsecondname(a);
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
    const handleRadio=(e)=>{
        e.preventDefault();
        setGender(e.target.value);
    }
    return(
        // Mandatory- First firstName, Last firstName, Gender, Email I’d, Password, Confirm Password 
// Optional- Mobile Number
        <div >
            {/* <h1 className="bg-info p-2">Signup</h1> */}
        
            <form className="rounded border border-success border-3 bg-warning w-50 mx-auto p-1 my-4">
            <div className="row my-4 mx-4 ">
            <div className="col-6 form-group my-2">
                <input value={firstName} onChange={(e)=>handleFirstName(e)} required type="text" className="form-control"  placeholder="First Name"></input>
               
                {/* <p className="text-danger" >Required</p> */}
            </div>
            <div className="col-6 form-group my-2">
              
              <input value={secondName} onChange={(e)=>handleSecondName(e)} required type="text" className="form-control"  placeholder="Last Name"></input>
              {/* <p className="text-danger" >Required</p> */}
          </div>
         
           
            <div className="form-group my-2">
               
                <input value={email} onChange={(e)=>handleEmail(e)} required type="email" class="form-control " placeholder="Enter email"></input>
            </div>
            {/* <p className="text-danger">Required</p> */}
            <div className="form-group my-2">
              
                <input value={password} onChange={(e)=>handlePassword(e)} required type="password" className="form-control"  placeholder="Password"></input>
            </div>
            {/* <p className="text-danger">
                Required
              
            </p> */}
            <div className="form-group my-2">
                <input value={confirmPassword} onChange={(e)=>handleConfirmPassword(e)} type="password" className="form-control"  placeholder="Confirm Password"></input>
            </div>
            {/* <p className="text-danger">
                Required
              
            </p> */}

            <div className="form-group my-2">
                <input value={mobile} onChange={(e)=>setMobile(e.target.value)} type="number" className="form-control"  placeholder="Mobile"></input>
            </div>
            {/* <p className="text-danger">
                Not Required
               
            </p> */}
            <div className="m-auto fs-5 p-1">Gender</div>
            <div className="m-auto p-2" >
                
        <div className="form-check form-check-inline">
          <input onChange={(e)=>handleRadio(e)} className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="Male"></input>
          <label className="form-check-label" for="gridRadios1">
            Male
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input onChange={(e)=>handleRadio(e)} className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="Female"></input>
          <label className="form-check-label" for="gridRadios2">
            Female
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input onChange={(e)=>handleRadio(e)} className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="Others"></input>
          <label className="form-check-label" for="gridRadios2">
            Others
          </label>
        </div>
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
export default Signup;