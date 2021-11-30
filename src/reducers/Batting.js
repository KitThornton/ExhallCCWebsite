import * as ActionTypes from '../actions/types/Batting';

const initialState = {
    careerBattingChartData: [{}]
}

const executeGetCareerRunsSuccess = (state, action) => {
    return {
        ...state,
        careerBattingChartData: action.data
    }
}

export const battingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_CAREER_BATTING_CHART:
            return executeGetCareerRunsSuccess(state, action)
        default:
            return state;
    }
}

export default battingReducer