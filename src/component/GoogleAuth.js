import React from "react";
import {connect}from "react-redux"
import {signin,signout}from "./actions"

class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:"612870517593-lbpklseelr5lms0knuh7pblg7ocrmg2m.apps.googleusercontent.com",
                scope:"email"
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance();
                this.OnAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.OnAuthChange)
            });
        })
    }
    OnAuthChange=(isSignedIn)=>{
        if(isSignedIn){
          
            this.props.signout(this.auth.currentUser.get().getId());
        }
        else{
           
            this.props.signin(this.auth.currentUser.get().getId());
        }

    }
    OnSignIn=()=>{
        this.auth.signOut()
    }
    OnSignOut=()=>{
        this.auth.signIn()
        
    }
    renderAuthButton(){
        if(this.props.isSignedIn===null){
            return null
        }else if (this.props.isSignedIn){
            return <button onClick={this.OnSignIn} className="ui red google button"> <i className="google icon"/>sign out</button>
        }else{
            return <button onClick={this.OnSignOut} className="ui red google button"> <i className="google icon"/>sign in</button>
        }
    }
    render(){
        return <div>{this.renderAuthButton()}</div>
    }
}
const mapState=(state)=>{
    return {isSignedIn:state.auth.isSignedIn}
}
export default connect(mapState,{signin,signout})(GoogleAuth);