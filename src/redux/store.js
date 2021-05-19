import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import searchReducer from "./search-reducer";

let reducersBatch = combineReducers({
    search: searchReducer,
})

let store = createStore(reducersBatch, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;