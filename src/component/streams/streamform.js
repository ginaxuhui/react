import React from "react";
import {Field, reduxForm} from "redux-form";

class Streamform extends React.Component{
    renderror=({error,touched})=>{
        if(touched&&error){
            return <div>{error}</div>
        }

    } 
    renderInput=({label,input,meta})=>{
       
        return (
            <div className="field">
            <label>{label}</label>
        <input {...input}/>
        <div>{this.renderror(meta)}</div>
        </div>)
    }
  
    onsubmit=(Values)=>{
        console.log("i sumbit")
        console.log(Values)
        
        this.props.onSubmit(Values)

    }
    renderlist(){
        
        return (
            <div>
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onsubmit)}>
                
                <Field name="title" component={this.renderInput} label="input tile"></Field>
                <Field name="description" component={this.renderInput} label="input description"></Field>

               <button className="ui button primary">submit</button>
               
            </form>
            </div>
        )

    }
    render(){
        console.log("my initialhhh value")
        console.log(this.props.initialValues)
        return <div>{this.renderlist()}</div>
    }
    
}
const validate=(fromValues)=>{
    
    const errors={};
    if(!fromValues.title){
        
        errors.title="you need title";

    }
    if(!fromValues.description){
        
        errors.description="you need decription";
    }
    
    return errors
};
export default reduxForm({
    form: 'simple' ,// a unique identifier for this form
    validate:validate
  })(Streamform)
  
