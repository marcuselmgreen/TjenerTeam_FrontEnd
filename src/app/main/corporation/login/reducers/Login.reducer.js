import * as actionTypes from '../actions/ActionTypes';

let initialState = {
    loggedIn: false,
};

export default function login(state = initialState, action) {

    let tempState = {...state};

    switch (action.type) {

        case actionTypes.LOGIN_CORPORATION_SUCCESS:
            tempState.loggedIn = true;
            return tempState;

        case actionTypes.LOGIN_CORPORATION_FAILED:
            return state;

        case actionTypes.LOGOUT_CORPORATION_SUCCESS:
            tempState.loggedIn = false;
            return tempState;

        case actionTypes.LOGOUT_CORPORATION_FAILED:
            return state;

        default:
            return state;
    }

}
