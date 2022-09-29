import React from "react";
import ClassThird from "./ClassThird";
class ClassComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            counter:0,
            text:'',
            myCounter:0
        }
    }
    // const [counter,setCounter] = useState(0);
    // const [text,setText] = useState('');
    handleAdd=()=>{
        this.setState({counter:this.state.counter + 1})
    }
    handleMinus=()=>{
        this.setState({counter:this.state.counter - 1})
    }
    handleText=(props)=>{
        // setText(props.target.value)
        this.setState({text:props.target.value})
    }
    render(){
        return (
            <div>
                <h1 className="bg-warning m-2 p-2">Class Comp</h1>
                <div className=" d-flex">
                <div className="w-50">
                <ClassThird  text={this.state.text} handleText={this.handleText} handleAdd = {this.handleAdd} handleMinus={this.handleMinus} counter={this.state.counter}></ClassThird>
                </div>
                <div className="d-grid w-50">
                    <button onClick={()=>this.setState({myCounter:this.state.myCounter+1})} className="m-auto w-25 btn btn-success">Plus</button>
                    <div className="m-auto">{this.state.myCounter}</div>
                    <button  onClick={()=>this.setState({myCounter:this.state.myCounter-1})} className="m-auto w-25 btn btn-warning">Minus</button>
                </div>
            </div>
            </div>
        )
    }
}
export default ClassComp;