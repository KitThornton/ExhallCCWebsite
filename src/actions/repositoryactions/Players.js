import * as ActionTypes from '../types/Players'
const baseUrl = 'http://localhost:5001/';

const submitGetAllPlayersSuccess = (data) => {
    return {
        type: ActionTypes.GET_ALL_PLAYERS,
        data: data
    }
}

export const getAllPlayers = () => {
    return (dispatch) => {
        fetch(baseUrl + "players/details")
            .then(res => res.json())
            .then((result) => {
                    dispatch(submitGetAllPlayersSuccess(result))
                },
                (error) => {
                    console.log(error);
                }
            )
    }
}
