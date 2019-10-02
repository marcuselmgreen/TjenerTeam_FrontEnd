import axios from 'axios';
import {handleError, handleResponse} from './ApiUtils';
import setup from "../../config/setup";

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

export function updateCorporationUserPassword(user, password){
    let id = user._id;
    let oldPassword = password.oldPassword;
    let confirmNewPassword = password.confirmNewPassword;
    /*
    Meningen med denne metode var at jeg skulle sende det gamle password
    og det nye fra input felterne til backend hvor jeg sammenligner det
    gamle password med det fra databasen og opdaterer med det nye hvis det
    stemmer overens. Jeg prøver at bruge /corporation_users/ fordi når jeg bruger
    /corporation_users/changePassword så giver den en 404 fejl
    */
    return axios.put(setup.apiEndPoint + '/corporation_users/' + id, user, oldPassword, confirmNewPassword)
        .then(handleResponse)
        .catch(handleError)
}
