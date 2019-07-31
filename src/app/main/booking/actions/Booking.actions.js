import * as actionsTypes from './ActionTypes';
import * as bookingApi from '../../../api/BookingsApi';


export function loadAllBookingsSuccess(bookings){
    return {
        type: actionsTypes.LOAD_ALL_BOOKINGS_SUCCESS,
        bookings
    }
}

export function loadAllBookingsFailed(error) {
    return {
        type: actionsTypes.LOAD_ALL_BOOKINGS_FAILED,
        error
    }
}

export function loadAllBookings() {
    return function(dispatch) {
        return bookingApi
            .getAllBookings()
            .then(bookings => {

                dispatch(loadAllBookingsSuccess(bookings))
            })
            .catch(error => {
                dispatch(loadAllBookingsFailed(error))
            });
    }
}

export function loadCorporationBookingsFailed(error) {
    return {
        type: actionsTypes.LOAD_CORPORATION_BOOKINGS_FAILED,
        error
    }
}

export function loadCorporationBookingsSuccess(bookings, corporation) {
    return {
        type: actionsTypes.LOAD_CORPORATION_BOOKINGS_SUCCESS,
        bookings,
        corporation

    }
}


export function loadCorporationBookings(corporation) {
    return function(dispatch) {
        return bookingApi
            .getAllBookings()
            .then(bookings => {
                dispatch(loadCorporationBookingsSuccess(bookings, corporation))
            })
            .catch(error => {
                dispatch(loadCorporationBookingsFailed(error))
            });
    }
}

export function createBookingSuccess(booking) {
    return {
        type: actionsTypes.CREATE_BOOKING_SUCCESS,
        booking
    }
}

export function createBookingFailed(error) {
    return {
        type: actionsTypes.CREATE_BOOKING_FAILED,
        error
    }
}

export function createBooking(bookings) {
    return function(dispatch) {
        return bookingApi
            .createBooking(bookings)
            .then(booking => {
                dispatch(createBookingSuccess(booking))
            })
            .catch(error => {
                dispatch(createBookingFailed(error))
            });
    }
}


export function deleteBookingSuccess(booking) {
    return {
        type: actionsTypes.DELETE_BOOKING_SUCCESS,
        booking
    }
}

export function deleteBookingFailed(error) {
    return {
        type: actionsTypes.DELETE_BOOKING_FAILED,
        error
    }
}

export function deleteBooking(booking) {
    return function(dispatch) {
        return bookingApi
            .deleteBooking(booking)
            .then(
                dispatch(deleteBookingSuccess(booking))
            )
            .catch(error => {
                dispatch(deleteBookingFailed(error))
            })
    }
}

export function selectBooking(booking) {
   return function(dispatch) {
       dispatch({
           type: actionsTypes.SELECT_BOOKING_SUCCESS,
           booking
       })
   }
}




export function updateBookingSuccess(booking) {
    return {
        type: actionsTypes.UPDATE_BOOKING_SUCCESS,
        booking
    }
}

export function updateBookingFailed(error) {
    return {
        type: actionsTypes.UPDATE_BOOKING_FAILED,
        error
    }
}

export function updateBooking(booking) {
    return function(dispatch) {
        return bookingApi
            .updateBooking(booking)
            .then(
                dispatch(updateBookingSuccess(booking))
            )
            .catch(error => {
                dispatch(updateBookingFailed(error))
            })
    }
}


export function showFullCreateBookingPage() {
    return function(dispatch) {
        dispatch({
            type: actionsTypes.SHOW_FULL_CREATE_BOOKING_PAGE
        })
    }
}
