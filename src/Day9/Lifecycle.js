import React from "react";
import Child from "./Child";
class Lifecycle extends React.Component{

    constructor(props){
        super(props)
        this.state={
            name:'yogya',
            show:false,
            counter:0,
            data:0,
        }
    }
    static getDerivedStateFromProps(props,state){
        
        // we  can not access props or state
        // like this.props
        // 'this' is not available in static
        
        //but it can take props and state in arg
        console.log("get derived",state,props);
       
        // console.log("static");

        // we should return to avoid error
        return null;

        // we can also initialise state with return
        // return {msg:props.name}
    }
    componentDidMount(){
        // used for fetching data from backend
        console.log("Component Did Mount");
    }
    // componentWillUnmount(){
    //     // called when comp is inmount
    //     console.log('Lifecycle comp compwillunmount'); 
    // }
    // componentDidUpdate
    componentDidUpdate(prevProps,prevState,snapshot){
        // like useffect
        console.log("did update??",prevProps,prevState,snapshot);

        // console.log("comp did update");
    }
    shouldComponentUpdate(prevProps,prevState){
        // called before render
        // if return false then render will not work
        if(prevState.counter!=this.state.counter){
            return true;
        }
        return false;
    }
    render(){
        console.log("inside render");
        return(
            <div>
                <h1> Lifecycle </h1>
                <h2>componentWillUnmount()</h2>
                <button
                    className="btn btn-info"
                    onClick={(e)=>this.setState({show:!this.state.show})}>
                Show
                </button>
                {this.state.show?
                <Child></Child>
                :
                <div>HIDDEN</div>}
                <h2>Component did update</h2>
                <h3>Counter : {this.state.counter}</h3>
                <button
                className="btn btn-danger"
                onClick={(e)=>this.setState({counter:this.state.counter+1})  }
                >
                    Increase Counter 
                </button>  

                <h2>Should update Component</h2>
                    <button
                    className="btn btn-warning"
                    onClick={(e)=>this.setState({counter:this.state.counter})  }
                    >click me</button>
            </div>
        )
    }
}
export default Lifecycle;