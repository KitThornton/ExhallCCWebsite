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

        fetch("https://localhost:5001/Player")
            .then(res => res.json())
            .then((result) => {
                    // let res;
                    // res.data = dummyPlayers;
                    dispatch(submitGetAllPlayersSuccess(result))
                },
                (error) => {
                    console.log(error);
                }
            )
    }
}

const dummyPlayers = [
    {
        name: "Kit T",
        Id: 1
    },
    {
        name: "Kit T",
        Id: 2
    }
]