import * as employeeApi from '../../../services/api/EmployeeUserApi';
import * as actionsTypes from './ActionTypes';
import snackbarConfig from "../../../config/snackbarConfig";
import {showMessage} from "../../../store/actions/fuse";
import {setBearerTokenOnAxis, storeTokenLocally} from "../../../auth/store/actions";
import {setUserData} from '../../../auth/store/actions/user.actions'

export function employeeLoginSuccess(userExist) {
    return {
        type: actionsTypes.LOGIN_EMPLOYEE_SUCCESS,
        userExist
    }
}

export function employeeLoginFailed(error) {
    return {
        type: actionsTypes.LOGIN_EMPLOYEE_FAILED,
        error
    }
}

export function employeeLogin(facebookAccessToken) {
    return function (dispatch) {
        return employeeApi
            .loginEmployee(facebookAccessToken)
            .then(response => {

                setBearerTokenOnAxis(response.jwt);
                storeTokenLocally(response, response.jwt);
                dispatch(setUserData(response.user));
                dispatch(employeeLoginSuccess(response.user.userExists))

            })
            .catch(error => {
                dispatch(showMessage({
                    message: 'Noget galt gik ved login',
                    ...snackbarConfig.errorMessage
                }));
                dispatch(employeeLoginFailed(error))
            })
    }
}


export function updateEmployeeSuccess(employee) {
    return {
        type: actionsTypes.UPDATE_EMPLOYEE_SUCCESS,
        employee
    }
}

export function updateEmployeeFailed(error) {
    return {
        type: actionsTypes.UPDATE_EMPLOYEE_FAILED,
        error
    }
}

export function updateEmployee(employee) {
    return function (dispatch) {
        return employeeApi
            .updateEmployeeUser(employee)
            .then(response => {
                dispatch(setUserData(response.user));
                dispatch(updateEmployeeSuccess(response.user.userExist))
            })
            .catch(error => {
                dispatch(showMessage({
                    message: 'Noget gik galt ved updateringen',
                    ...snackbarConfig.errorMessage
                }));
                dispatch(updateEmployeeFailed(error))
            })
    }
}

