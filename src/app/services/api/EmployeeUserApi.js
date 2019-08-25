import axios from 'axios';
import {handleError, handleResponse} from './ApiUtils';
import setup from "../../config/setup";

export function loginEmployee(user){
    return axios.post(setup.apiEndPoint + '/employee_users', user)
        .then(handleResponse)
        .catch(handleError)
}

export function deleteEmployeeUser(user){
    let id = user.id;
    return axios.delete(setup.apiEndPoint + '/employee_users' + id)
        .then(handleResponse)
        .catch(handleError)
}

export function updateEmployeeUser(user){
    let id = user._id;
    return axios.put(setup.apiEndPoint + '/employee_users/' + id, user)
        .then(handleResponse)
        .catch(handleError)
}
