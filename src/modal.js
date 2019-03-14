import React from "react"
import ReactDOM from "react-dom";
import history from "./history";
const Model=(props)=>{
    console.log(props)
    return ReactDOM.createPortal(
    <div onClick={()=>history.push("/")}  className="ui dimmer modals visible active">
        <div onClick={(e)=> e.stopPropagation()} className="ui standard modal visible active">
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">
        {props.action}
        </div>
        
       
        </div>
        </div>
        ,document.querySelector("#model"));
};
export default Model