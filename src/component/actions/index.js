import streams from "../../api";
import history from "../../history";
export const signin=()=>{
    console.log("myid")
    
    return {
        type:"SIGN_OUT",
       
       

    }
}
export const signout=(userid)=>{
    
    return {
        type:"SIGN_IN",
        payload:  userid
        

    }
}
export const Createweb=(formvaule)=>async (dispath,getState)=>{
    console.log("hicdceedce")
    const {UserId}=getState().auth;
    console.log(UserId)
    const response =await streams.post("/streams",{...formvaule,UserId});
    console.log("hicdceedce")
    
    dispath({type:"CREATE_STREAM",payload:response.data})
    history.push("/")
}
export const Getweb=()=>async dispath=>{
    const response =await streams.get("/streams");
    console.log("finalllllll")
    console.log(response.data)
    dispath({type:"GET_STREAMS",payload:response.data})
}

export const Getmyweb=(id)=>async dispath=>{
    console.log("fok?")
    console.log(id)
    const response =await streams.get(`/streams/${id}`);
    console.log("fok?")
    
    dispath({type:"GET_STREAM",payload:response.data})
}
export const Editweb=(id,formvaule)=>async dispath=>{
    console.log("figfgf ")
    console.log(id.id)
    console.log(formvaule)
    const response =await streams.patch(`/streams/${id.id}`,formvaule);
    console.log("figfgf ")
    console.log(response.data)
    dispath({type:"EDIT_STREAMS",payload:response.data})
    history.push("/")
}
export const Deleteweb=(id)=>async dispath=>{
    console.log("delete me")
    await streams.delete(`/streams/${id}`);
    dispath({type:"DELETE_STREAMS",payload:id})
    history.push("/")
    
}
  