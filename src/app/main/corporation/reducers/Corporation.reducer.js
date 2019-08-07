
import * as actionsTypes from '../actions/ActionTypes';

let initialState = {
};

export default function corporation_user(state = initialState, action) {
    switch (action.type) {

        case actionsTypes.CREATE_CORPORATION_USER_SUCCESS:
            return state;

        case actionsTypes.CREATE_CORPORATION_USER_FAILED:
            return state;

        case actionsTypes.DELETE_CORPORATION_USER_SUCCESS:
            return state;

        case actionsTypes.DELETE_CORPORATION_USER_FAILED:
            return state;

        case actionsTypes.CREATE_CORPORARTION_USER_AND_BOOKING_SUCCESS:
            return state;

        case actionsTypes.CREATE_CORPORARTION_USER_AND_BOOKING_FAILED:
            return state;

        default:
            return state;
    }
}
