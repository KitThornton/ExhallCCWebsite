// Combine reducers to form one store
import {createStore, applyMiddleware} from "redux";
// import battingReducer from "./reducers/battingReducer";
// import bowlingReducer from "./reducers/bowlingReducer";
// import fieldingReducer from "./reducers/fieldingReducer";
import playerReducer from "./reducers/Players";
import thunk from 'redux-thunk';

export const store = createStore(playerReducer, applyMiddleware(thunk))

export const local = "https://localhost:5001";
