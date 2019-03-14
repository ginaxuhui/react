
import _ from 'lodash';
export default (state={},action)=>{
    console.log("reducer2")
    switch(action.type){
        case "CREATE_STREAM":
            console.log("if works")
            console.log(_.mapKeys(action.payload))
        
        return {...state,[action.payload.id]:action.payload}
        case "GET_STREAMS":
          
            return {...state,..._.mapKeys(action.payload,"id")}
        case "GET_STREAM":
            console.log("reducer proble")
            
            
            return {...state,[action.payload.id]:action.payload}
        case "EDIT_STREAMS":
            console.log("reducer proble")
            
            
            return {...state,[action.payload.id]:action.payload}
        case "DELETE_STREAMS":
            console.log("reducer proble")
            
            
            return {}
        default:
            return state
    }
};