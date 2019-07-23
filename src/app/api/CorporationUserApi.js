import axios from 'axios';
import {handleError, handleResponse} from './ApiUtils';

const baseUrl = "http://localhost:3000/api";

export function createCorporationUser(user){
    return axios.post(baseUrl + '/corporation_users', user)
        .then(handleResponse)
        .catch(handleError)
}

export function deleteCorporationUser(user){
    let id = user.id;
    return axios.delete(baseUrl + '/corporation_users' + id)
        .then(handleResponse)
        .catch(handleError)
}

