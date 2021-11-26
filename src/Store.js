import {applyMiddleware, createStore} from "redux";
import {playerReducer} from "./reducers/Players";
import thunk from 'redux-thunk';

export const store = createStore(playerReducer, applyMiddleware(thunk))
export const local = "https://localhost:5001";
