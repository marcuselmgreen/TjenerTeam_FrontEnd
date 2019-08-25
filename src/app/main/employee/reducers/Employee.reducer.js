import * as actionType from '../actions/ActionTypes';

let initialState = {
    employeeExist: null
};

export default function employees(state = initialState, action) {
    let tempState = {...state};

    switch (action.type) {

        case actionType.LOGIN_EMPLOYEE_SUCCESS:
            tempState.employeeExist = action.userExist;
            return tempState;

        case actionType.LOGIN_EMPLOYEE_FAILED:
            tempState.error = action.error;
            return tempState;

        case actionType.UPDATE_EMPLOYEE_SUCCESS:
            return state;

        case actionType.UPDATE_EMPLOYEE_FAILED:
            tempState.error = action.error;
            return tempState;

        case actionType.DELETE_EMPLOYEE_SUCCESS:
            return state;

        case actionType.DELETE_EMPLOYEE_FAILED:
            tempState.error = action.error;
            return tempState;

        default:
            return state;
    }
}
