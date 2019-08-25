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
            .then(user => {

                setBearerTokenOnAxis(user.jwt);
                storeTokenLocally(user, user.jwt);
                dispatch(setUserData(user.user)) ;
                dispatch(employeeLoginSuccess(user.exist))

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

