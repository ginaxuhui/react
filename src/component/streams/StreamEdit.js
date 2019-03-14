import React from "react";
import Streamform from "./streamform"
import {Getmyweb} from"../actions";
import {Editweb} from"../actions";
import {connect}from "react-redux";
import _ from 'lodash'
class StreamEdit extends React.Component{
    componentDidMount(){
        console.log("i am compoinet first")
        // this.props.Getweb();
        this.props.Getmyweb(this.props.match.params.id)

    }
    onSubmit=(Values)=>{

        console.log("i want submit")
        console.log(Values)
        console.log(this.props.match.params)
        this.props.Editweb(this.props.match.params,Values)
    }
    renderlist=()=>{
        console.log("render first")
        console.log("my really try")
        console.log(this.props.stream)
        if(!this.props.stream){
            return null
        }
        return (
            <div><h3>edit a Stream</h3>
            <Streamform 
            // initialValues={this.props.stream}
            initialValues={_.pick(this.props.stream,'title','description')}
            onSubmit={this.onSubmit}
            />
            </div> 
        )
    }
    render(){
        return <div>{this.renderlist()}</div>
    }
   
    
}
const mapstate=(state,ownPros)=>{
    console.log("my try")
    console.log(state)
    return {stream:state.stream[ownPros.match.params.id]}

}
  
export default connect(mapstate,{Getmyweb,Editweb})(StreamEdit )