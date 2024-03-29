import * as actionsTypes from './ActionTypes';
import * as corporationApi from '../../../../services/api/CorporationUserApi';
import * as bookingApi from '../../../../services/api/BookingsApi'
import {showMessage} from "../../../../store/actions/fuse";
import snackbarConfig from "../../../../config/snackbarConfig";
import {setUserData, logoutUser, logout} from "../../../../auth/store/actions";
import jwtService from 'app/services/jwtService';

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
        return corporationApi.createCorporationUser(user)
            .then(user => {
                dispatch(showMessage({
                    message: 'Virksomhedsprofil oprettet',
                    ...snackbarConfig.successMessage
                }));
                dispatch(createCorporationUserSuccess(user))
            })
            .catch(error => {
                dispatch(showMessage({
                    message: 'Noget gik galt ved oprettelsen af en ny virksomhed',
                    ...snackbarConfig.errorMessage
                }));
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

export function deleteCorporationUser(user, userInput) {
    if (userInput === "slet") {
        return function (dispatch) {
            return corporationApi.deleteCorporationUser(user)

                .then(user => {

                    dispatch(deleteCorporationSuccess(user));
                    dispatch(logoutUser(user));
                    dispatch(logout(user));
                    dispatch(showMessage({
                        message: 'Virksomhedsprofil slettet',
                        ...snackbarConfig.successMessage
                    }));

                })
                .catch(error => {
                    dispatch(showMessage({
                        message: 'Virksomhedsprofilen kunne ikke slettes',
                        ...snackbarConfig.errorMessage
                    }));
                    dispatch(deleteCorporationFailed(error));
                })
        }
    }
    return function (dispatch) {
        dispatch(showMessage({
            message: 'Tast slet for at bekræfte',
            ...snackbarConfig.errorMessage
        }));
    }
    
}


export function updateCorporationSuccess(user) {
    return {
        type: actionsTypes.UPDATE_CORPORATION_USER_SUCCESS,
        user
    }
}

export function updateCorporationFailed(error) {
    return {
        type: actionsTypes.UPDATE_CORPORATION_USER_FAILED,
        error
    }
}

export function updateCorporationUser(user) {
    return function(dispatch){
        return corporationApi.updateCorporationUser(user)
            .then(user => {
                dispatch(setUserData(user));
                dispatch(updateCorporationSuccess(user));
                dispatch(showMessage({
                    message: 'Virksomhedsprofil updateret',
                    ...snackbarConfig.successMessage
                }));
            })
            .catch(error => {
                dispatch(showMessage({
                    message: 'Noget gik galt ved updateringen af en profilen',
                    ...snackbarConfig.errorMessage
                }));
                dispatch(updateCorporationFailed(error))
            })
    }
}



export function createCorporationAndBookingFailed(error) {
    return {
        type: actionsTypes.CREATE_CORPORARTION_USER_AND_BOOKING_FAILED,
        error
    }
}


export function createCorporationAndBookingSuccess(successMessage) {
    return {
        type: actionsTypes.CREATE_CORPORARTION_USER_AND_BOOKING_SUCCESS,
        successMessage
    }
}


export function createCorporationAndBooking(Corporation, bookings){
    return function(dispatch){
        return corporationApi.createCorporationUser(Corporation)
            .then(user => {
                debugger;

                bookings.forEach(b => b.createdByCorporation_user = user.user._id);

                bookingApi.createBooking(bookings)
                    .then(bookings => {
                        dispatch(createCorporationAndBookingSuccess(bookings))
                        dispatch(showMessage({
                            message: 'Ny booking og bruger opret',
                            ...snackbarConfig.successMessage
                        }));

                    })
                    .catch(error => {
                        dispatch(createCorporationAndBookingFailed(error));
                        dispatch(showMessage({
                            message: 'Noget gik galt ved oprettelsen',
                            ...snackbarConfig.errorMessage
                        }));
                    })
            })
            .catch(error => {
                dispatch(createCorporationAndBookingFailed(error))
            })
    }
}

export function changePassword(user, password) {
    return function (dispatch) {
        if (password.newPassword === password.confirmNewPassword) {
        return corporationApi.updateCorporationUserPassword(user, password)
            .then(user => {
                dispatch(setUserData(user));
                dispatch(updateCorporationSuccess(user));
                dispatch(showMessage({
                    message: 'Adgangskode opdateret',
                    ...snackbarConfig.successMessage
                }));
            })
            .catch(error => {
                dispatch(showMessage({
                    message: 'Noget gik galt ved opdateringen af kodeordet',
                    ...snackbarConfig.errorMessage
                }));
                dispatch(updateCorporationFailed(error))
            })
        } else {
            dispatch(showMessage({
                message: 'Kodeordene stemmer ikke overens',
                ...snackbarConfig.errorMessage
            }));
        }
    }
}


