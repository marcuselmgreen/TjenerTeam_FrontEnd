
import * as actionsTypes from '../actions/ActionTypes';

let initialState = {
    error: null
};

export default function corporation_user(state = initialState, action) {
    let tempState = {...state};

    switch (action.type) {

        case actionsTypes.CREATE_CORPORATION_USER_SUCCESS:
            return state;

        case actionsTypes.CREATE_CORPORATION_USER_FAILED:
            tempState.error = action.error;
            return state;

        case actionsTypes.DELETE_CORPORATION_USER_SUCCESS:
            return state;

        case actionsTypes.DELETE_CORPORATION_USER_FAILED:
            tempState.error = action.error;
            return state;

        case actionsTypes.UPDATE_CORPORATION_USER_SUCCESS:
            return state;

        case actionsTypes.UPDATE_CORPORATION_USER_FAILED:
            tempState.error = action.error;
            return state;

        case actionsTypes.CREATE_CORPORARTION_USER_AND_BOOKING_SUCCESS:
            return state;

        case actionsTypes.CREATE_CORPORARTION_USER_AND_BOOKING_FAILED:
            tempState.error = action.error;
            return state;

        default:
            return state;
    }
}
