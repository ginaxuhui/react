import React from "react";
import Model from "../../modal";
import history from "../../history";
import {Deleteweb} from"../actions";
import {connect}from "react-redux";
import {Getmyweb} from"../actions";
class Delete extends React.Component{
    componentDidMount(){
        this.props.Getmyweb(this.props.match.params.id)

    }
    admin=()=>{
        this.props.Deleteweb(this.props.match.params.id)
    }
    mycontent=()=>{
        console.log("if this process onece")
        console.log(this.props.stream)
        if(!this.props.stream){
            return 'are you sure to delete'
        }
        return `are you sure to delet ${this.props.stream.title}`

    }
    myaction=()=>{
        return (<React.Fragment>
        <button onClick={this.admin} className="ui negative button">delete</button>
        <button onClick={()=>history.push("/")} className="ui button">cancel</button>

        </React.Fragment>)
    }
    render(){
        return <div><Model
        title="Delete"
        content={this.mycontent()}
        action={this.myaction()}
        /></div>
    }
}
const mapstate=(state,ownPros)=>{
    console.log("my state")
    console.log(state)
    return {stream:state.stream[ownPros.match.params.id]}
}
export default connect(mapstate,{Getmyweb,Deleteweb})(Delete)