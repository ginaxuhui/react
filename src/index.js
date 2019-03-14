import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import {Provider} from"react-redux";
import {createStore,applyMiddleware,compose}from "redux";
import reducers from "./reducers";
import reducer from"redux-thunk"
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
const store=createStore(
    reducers,
    composeEnhancers(applyMiddleware(reducer))
    )
ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>,
document.querySelector("#root"));
 