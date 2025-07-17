import React,{ Component } from "react";

class Greeting extends Component{
    constructor(props){
        super(props);
        this.state ={value:""};

    }
    onChangeText = (event)=>{
        const newvalue=event.target.value;
        this.setState({value:newvalue});
    }

    render(){
        return(
            <div>
                <label htmlFor="input">Enter Your Name: </label>
                <input id="input" value={this.state.value} onChange={this.onChangeText}   />
                {this.state.value ? <p> Hello {this.state.value} </p> : null}
            </div>
        )
    }
}
export default Greeting;