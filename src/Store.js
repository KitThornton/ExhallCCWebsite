// Combine reducers to form one store
import {createStore, applyMiddleware} from "redux";
// import battingReducer from "./reducers/battingReducer";
// import bowlingReducer from "./reducers/bowlingReducer";
// import fieldingReducer from "./reducers/fieldingReducer";
import playerReducer from "./reducers/playerReducer";
import thunk from 'redux-thunk';

const store = createStore(playerReducer, applyMiddleware(thunk))

export default store;
