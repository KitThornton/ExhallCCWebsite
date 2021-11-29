import * as PlayersActionTypes from '../actions/types/Players';

const initialState = {
    players: []
}

const executeGetAllPlayersSuccess = (state, action) => {
    return {
        ...state,
        players: action.data
    }
}

export const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case PlayersActionTypes.GET_ALL_PLAYER_APPEARANCES:
            return executeGetAllPlayersSuccess(state, action)
        default:
            return state;
    }
}

export default playerReducer