import * as actionsTypes from './ActionTypes';
import * as corporationApi from '../../../api/CorporationUserApi';
import * as bookingApi from '../../../api/BookingsApi'
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
        return corporationApi.deleteCorporationUser(user)
            .then(user => {
                dispatch(deleteCorporationSuccess(user))
            })
            .catch(error => {
                dispatch(deleteCorporationFailed(error))
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
                console.log(bookings);

                bookingApi.createBooking(bookings)
                    .then(bookings => {
                        dispatch(createCorporationAndBookingSuccess(bookings))
                    })
                    .catch(error => {
                        dispatch(createCorporationAndBookingFailed(error))
                    })
            })
            .catch(error => {
                dispatch(createCorporationAndBookingFailed(error))
            })
    }
}
