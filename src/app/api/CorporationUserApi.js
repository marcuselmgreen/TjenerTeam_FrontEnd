import axios from 'axios';
import {handleError, handleResponse} from './ApiUtils';
import setup from "../config/setup";

export function createCorporationUser(user){
    return axios.post(setup.apiEndPoint + '/corporation_users', user)
        .then(handleResponse)
        .catch(handleError)
}

export function deleteCorporationUser(user){
    let id = user.id;
    return axios.delete(setup.apiEndPoint + '/corporation_users' + id)
        .then(handleResponse)
        .catch(handleError)
}

