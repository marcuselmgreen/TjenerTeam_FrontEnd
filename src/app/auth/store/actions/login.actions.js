import jwtService from 'app/services/jwtService';
import {setUserData} from './user.actions';
import axios from 'axios';
import snackbarConfig from "../../../config/snackbarConfig";
import {showMessage} from "../../../store/actions/fuse";

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const SHOW_SPINNER = 'SHOW_SPINNER';

export function submitLogin(email, password, rememberUser) {
    return function (dispatch) {
        jwtService.signInWithEmailAndPassword(email, password)
            .then((data) => {
                dispatch(setUserData(data.user));
                setBearerTokenOnAxis(data.access_token);
                storeTokenLocally(rememberUser, data.access_token);
                return dispatch({type: LOGIN_SUCCESS, jwtToken: data.access_token},);
            })
            .catch(function(error) {
                dispatch(showMessage({
                    message: 'Brugernavn eller adgangskode er forkert',
                    ...snackbarConfig.errorMessage
                }));

                return dispatch({
                    type: LOGIN_ERROR,
                    payload: error
                })
            })
    }
}

export function logout() {
    return function (dispatch) {
        return dispatch({type: LOG_OUT_SUCCESS})
    }
}

export function setSpinner() {
    return function (dispatch) {
        return dispatch({type: SHOW_SPINNER})
    }
}


export function setBearerTokenOnAxis(accessToken) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
}


export function storeTokenLocally(rememberUser, tokenResponse) {
    if (rememberUser === true) {
        localStorage.setItem('jwt_access_token', tokenResponse)
    }
}

