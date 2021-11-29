import * as ActionTypes from '../types/Players'
import {baseURL} from "../../Store";

const submitGetAllPlayerAppearancesSuccess = (data) => {
    return {
        type: ActionTypes.GET_ALL_PLAYER_APPEARANCES,
        data: data
    }
}

export const getAllPlayerAppearances = () => {

    return (dispatch) => {

        fetch(baseURL + "/player/appearances")
            .then(res => res.json())
            .then((result) => {
                    dispatch(submitGetAllPlayerAppearancesSuccess(result))
                },
                (error) => {
                    console.log(error);
                }
            )
    }
}