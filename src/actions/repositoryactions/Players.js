import * as ActionTypes from '../types/Players'
import {local} from "../../Store";

const submitGetAllPlayersSuccess = (data) => {
    return {
        type: ActionTypes.GET_ALL_PLAYERS,
        data: data
    }
}

export const getAllPlayers = () => {
    return (dispatch) => {
        fetch(local + "/Player")
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
