import {applyMiddleware, combineReducers, createStore} from "redux";
import {playerReducer} from "./reducers/Players";
import {battingReducer} from "./reducers/Batting";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    players: playerReducer,
    batting: battingReducer
})

// export const store = createStore(rootReducer, applyMiddleware(thunk))
export const store = createStore(playerReducer, applyMiddleware(thunk))
export const baseURL = "https://localhost:5001";
