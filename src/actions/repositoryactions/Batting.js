import {baseURL} from "../../Store";
import * as ActionTypes from "../types/Batting";

const submitUpdateCareerBattingChartData = (data) => {
    return {
        type: ActionTypes.UPDATE_CAREER_BATTING_CHART,
        data: data
    }
}

export const updateCareerBattingChartData = (stat, count) => {

    let data = [{}];

    switch (stat) {
        case "runs":
            data = getCareerRuns(count);
            break;
        case "hundreds":
            data = getCareerHundreds(count);
            break;
        case "average":
            data = getCareerAverage(count);
            break;
        case "highScore":
            data = getCareerHighScore(count);
            break;
        default:
            break;
    }

    return (dispatch) => {
        dispatch(submitUpdateCareerBattingChartData(data))
    }
}

const getCareerRuns = (count) => {

    return fetch(baseURL + `/batting/careerruns/${count}`)
        .then(res => res.json());
}

export const getCareerHundreds = (count) => {

    return fetch(baseURL + `/batting/careerhundreds/${count}`)
        .then(res => res.json());
}

export const getCareerAverage = (count) => {

    return fetch(baseURL + `/batting/careeraverage/${count}`)
        .then(res => res.json());
}

export const getCareerHighScore = (count) => {

    return fetch(baseURL + `/batting/careerhighscore/${count}`)
        .then(res => res.json());
}