

const INITIAL_STATE={
    isSignedIn:null,
    userId:null
};
export default (state=INITIAL_STATE,action)=>{
    console.log("reducer1")
    
    switch(action.type){
        case "SIGN_OUT":
           
            return {...state,isSignedIn:false,UserId:action.payload}
        case "SIGN_IN":
        console.log("isaif")
            
        console.log(action.payload)
            return {...state,isSignedIn:true,UserId:action.payload}
            
        default:
            return state;
    }
};