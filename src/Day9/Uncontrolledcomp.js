import React from "react";

class Uncontrolledcomp extends React.Component{
   constructor(props){
    super(props)
    this.firstname = React.createRef('hello2');
    this.state={
        temp:''
    }
   }
   handleSubmit=(e)=>{
    e.preventDefault();
    console.log(this.firstname);
    console.log(this.firstname.current);
    console.log(this.firstname.current.value);
    this.setState({temp:this.firstname.current.value})
   }
   componentDidMount(){
    console.log("hello",this.state.temp);
   }
    render(){
        // console.log("render",this.firstname.current);
    return(
        <div>
            <h1>Uncontrolledcomp {this.state.temp} </h1>
            <input  ref={this.firstname} type="text"></input>
            <br></br>
            <button onClick={(e)=>this.handleSubmit(e)} className="m-2 btn btn-primary">
                Submit
            </button>
        </div>
    )
    }
}
export default Uncontrolledcomp;