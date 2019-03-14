import authReducer from "./AuthReducer"
import{combineReducers}from "redux";
import {reducer}from"redux-form";
import streamss from "./streams";
export default combineReducers({
    auth:authReducer,
    stream:streamss,
    form:reducer
});