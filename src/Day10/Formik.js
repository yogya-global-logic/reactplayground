import React from "react";
import {useFormik} from 'formik';
import {signUpSchema} from '../Schemas'
// formik - to handle data
// yup - for validation


const initialValues= {
    name:'',
    email:'',
    password:'',
    confirm_password:''
}


function Formik(){
    // useFormik hook has various values/fn
    // so we destruct it for easy to use
    const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues:initialValues,
        validationSchema:signUpSchema,
        onSubmit:(values,action)=>{
            console.log("formic submit",values);
            action.resetForm();
        },
    });
    // console.log("formic = ",values);
    console.log("formic = ",errors);
    
   
    return(
       
        <div >
            <h1 className="bg-info p-2">Signup</h1>
        
            <form 
            onSubmit={handleSubmit}
            className="rounded border border-success border-3 bg-dark text-light w-50 mx-auto p-1 my-4">
            <div className="row my-4 mx-4 ">
           
         
           
            <div className="form-group my-2">
                name
                 <input 
                // value={password} 
                // onChange={(e)=>handlePassword(e)} 
                // required
                name='name' 
                type="text" 
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"  
                placeholder="Name"></input>
                { errors.name&& touched.name? 
                <p className="text-danger" >{errors.name}</p>:<div></div>}
            </div>
            <div className="form-group my-2">
                
                email<input 
                // value={email} 
                // onChange={(e)=>handleEmail(e)} 
                // required 
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                type="email" 
                class="form-control " 
                placeholder="Enter email"></input>
                 { errors.email&& touched.email? 
                 <p  className="text-danger">{errors.email}</p>:<div></div>}
            </div>
           
            <div className="form-group my-2">
              password
                <input 
                // value={password} 
                // onChange={(e)=>handlePassword(e)} 
                // required 
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                type="password" 
                className="form-control"  
                placeholder="Password"></input>
                 { errors.password&& touched.password? <p  className="text-danger">{errors.password}</p>:<div></div>}
            </div>
          
            <div className="form-group my-2">
                confirm_password
                <input 
                // value={confirmPassword} 
                // onChange={(e)=>handleConfirmPassword(e)} 
                type="password"
                name="confirm_password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur} 
                className="form-control"  
                placeholder="Confirm Password"></input>
                 { errors.confirm_password&& touched.confirm_password? <p  className="text-danger">{errors.confirm_password}</p>:<div></div>}
            </div>
           
          
        


       


        <button  className="btn btn-primary w-50 m-auto" type="submit">Submit form</button>
            {/* <NavLink to='/'>
                <button type="submit" onClick={handleSubmit} className='btn btn-primary m-2 p-3'>Submit</button>
            </NavLink> */}
            {/* <Link onClick={(e)=>handleSubmit(e)} className={flag?'btn btn-primary':'btn btn-primary disabled'} to= '/movies'> Submit</Link> */}
       
            </div>        
            </form>

        
        </div>
    )
}
export default Formik;