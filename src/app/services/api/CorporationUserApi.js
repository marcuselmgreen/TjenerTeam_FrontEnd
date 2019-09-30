import axios from 'axios';
import {handleError, handleResponse} from './ApiUtils';
import setup from "../../config/setup";
import jwtService from 'app/services/jwtService';

export function createCorporationUser(user){
    return axios.post(setup.apiEndPoint + '/corporation_users', user)
        .then(handleResponse)
        .catch(handleError)
}

export function deleteCorporationUser(user){
    let id = user._id;
    return axios.delete(setup.apiEndPoint + '/corporation_users/' + id, user)
        .then(handleResponse)
        .catch(handleError)
}

export function updateCorporationUser(user){
    let id = user._id;
    return axios.put(setup.apiEndPoint + '/corporation_users/' + id, user)
        .then(handleResponse)
        .catch(handleError)
}

export function updateCorporationUserPassword(user){
    let id = user._id;
    return axios.put(setup.apiEndPoint + '/corporation_users/' + id, user)
        .then(handleResponse)
        .catch(handleError)
}
