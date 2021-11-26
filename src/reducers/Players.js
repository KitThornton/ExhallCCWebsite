import * as ActionTypes from '../actions/types/Players';

const initialState = {
    players: []
}

const executeGetAllPlayersSuccess = (state, action) => {
    return {
        ...state,
        players: action.data
    }
}

const playerRepository = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.GET_ALL_PLAYERS:
            return executeGetAllPlayersSuccess(state, action)
        default:
            return state;
    }
}

export default playerRepository
