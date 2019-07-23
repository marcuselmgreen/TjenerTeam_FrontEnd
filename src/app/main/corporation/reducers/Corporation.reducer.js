
import * as actionsTypes from '../actions/ActionTypes';

let initialState = {
    corporation_user: null
};

export default function corporation_user(state = initialState.corporation_user, action) {
    switch (action.type) {

        case actionsTypes.CREATE_CORPORATION_USER_SUCCESS:
            return action.user;

        case actionsTypes.CREATE_CORPORATION_USER_FAILED:
            return state;

        case actionsTypes.DELETE_CORPORATION_USER_SUCCESS:
            return state;

        case actionsTypes.DELETE_CORPORATION_USER_FAILED:
            return state;

        default:
            return state;
    }
}
