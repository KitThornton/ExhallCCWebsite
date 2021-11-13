import * as ActionTypes from '../actions/actionTypes';

const initialState = {
    players: []
}

const executeGetAllPlayersSuccess = (state, action) => {
    return {
        ...state,
        players: action.data
    }
}

const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_ALL_PLAYERS:
            return executeGetAllPlayersSuccess(state, action)
        default:
            return state;
    }
}

export default playerReducer
