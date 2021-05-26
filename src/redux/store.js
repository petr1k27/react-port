import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk";
import searchReducer from "./search-reducer";
import { reducer as formReducer } from 'redux-form'

let reducersBatch = combineReducers({
    search: searchReducer,
    form: formReducer,
})

let store = createStore(reducersBatch, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;