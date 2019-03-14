import React from "react";
import Streamform from "./streamform"
import {Createweb} from"../actions";
import {connect}from "react-redux";
class StreamCreate extends React.Component{
    onSubmit=(Values)=>{
        this.props.Createweb(Values)
    }
    render(){
        return (
            <div><h3>Create a Stream</h3>
            <Streamform onSubmit={this.onSubmit}/></div>
        )
    }
   
    
}
  
export default connect(null,{Createweb})(StreamCreate )