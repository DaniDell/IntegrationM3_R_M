import {createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta lina es para conectar con ReduxDevTools

const store = createStore (
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))// hace llamadas asincónicas(peticiones a servidor)
)

export default store;