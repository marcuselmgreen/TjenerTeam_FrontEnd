import jwtService from 'app/services/jwtService';
import {setUserData} from './user.actions';
import axios from 'axios';

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';


export function submitLogin(email, password, rememberUser) {
    return function(dispatch) {
        jwtService.signInWithEmailAndPassword(email, password)
            .then((data) => {
                dispatch(setUserData(data.user));
                // setBearerTokenOnAxis(data.access_token);
                console.log(data)
                storeTokenLocally(rememberUser, data.access_token);
                return dispatch({type: LOGIN_SUCCESS, jwtToken: data.access_token},);
            })
            .catch(error => {
                return {
                    type: LOGIN_ERROR,
                    payload: error
                }
            })
    }
}


function setBearerTokenOnAxis(accessToken){
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
}


function storeTokenLocally(rememberUser, tokenResponse) {
    if (rememberUser === true) {
        localStorage.setItem('jwt_access_token', tokenResponse)
    }
}

