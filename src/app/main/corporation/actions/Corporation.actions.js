import * as actionsTypes from './ActionTypes';
import * as bookingApi from '../../../api/CorporationUserApi';

export function createCorporationUserSuccess(user) {
    return {
        type: actionsTypes.CREATE_CORPORATION_USER_SUCCESS,
        user
    }
}

export function createCorporationUserFailed(error) {
    return {
        type: actionsTypes.CREATE_CORPORATION_USER_FAILED,
        error
    }
}

export function createCorporationUser(user){
    return function(dispatch){
        return bookingApi.createCorporationUser(user)
            .then(user => {
                dispatch(createCorporationUserSuccess(user))
            })
            .catch(error => {
                dispatch(createCorporationUserFailed(error))
            })
    }
}


export function deleteCorporationSuccess(user) {
    return {
        type: actionsTypes.DELETE_CORPORATION_USER_SUCCESS,
        user
    }
}

export function deleteCorporationFailed(error) {
    return {
        type: actionsTypes.DELETE_CORPORATION_USER_FAILED,
        error
    }
}

export function deleteCorporationUser(user) {
    return function(dispatch){
        return bookingApi.deleteCorporationUser(user)
            .then(user => {
                dispatch(deleteCorporationSuccess(user))
            })
            .catch(error => {
                dispatch(deleteCorporationFailed(error))
            })
    }
}
