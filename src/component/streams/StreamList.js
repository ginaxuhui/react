import React from "react";
import {Getweb} from"../actions";
import {connect}from "react-redux";
import{Link}from"react-router-dom";
class List extends React.Component{
    componentDidMount(){
        
        
        this.props.Getweb();

    }
    admin=(stream)=>{
        if(stream.UserId===this.props.current){
            return<div className="right floated content">
            <Link to={`/streams/${stream.id}`}>
            <button className="ui button primary">edit</button>
            </Link >
            <Link to={`/streams/delete/${stream.id}`}><button className="ui button negative">delet</button></Link></div>
        }

    }
    loginin=()=>{
        if(this.props.login){
            return<div style={{textAlign:"right"}}><Link to="/steams/new" className="ui button primary">create</Link ></div>
        }
    }
    renderlist(){
       
        return this.props.streams.map(stream=>{
            return <div className="item" key={stream.id}>
            {this.admin(stream)}
                   <i className="large middle aligned icon camera"/>
                <div className="content"> <Link to={`/streams/show/${stream.id}`} className="header">{stream.title}</Link>
               <div className="description">{stream.description}</div>
               </div>
                
                
                

            </div>
        })}
    render(){
        console.log("catch again")
        return <div className="ui celled list">{this.renderlist()}
        {this.loginin()}</div>
    }
}
const mapstate=(state)=>{
    console.log("catch")
    console.log(state.stream)
    return {streams:Object.values(state.stream),
    current:state.auth.UserId,
    login:state.auth.isSignedIn}
    
}

export default connect(mapstate,{Getweb})(List)