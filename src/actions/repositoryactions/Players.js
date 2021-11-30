import * as ActionTypes from '../types/Players'
import {baseURL} from "../../Store";

const submitGetAllPlayerAppearancesSuccess = (data) => {
    return {
        type: ActionTypes.GET_ALL_PLAYER_APPEARANCES,
        data: data
    }
}

export const getAllPlayerAppearances = (count) => {

    const base = baseURL + "/player/appearances/"
    const url = count ? `${count}` : "";

    console.log(url);

    return (dispatch) => {

        fetch(base + url)
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