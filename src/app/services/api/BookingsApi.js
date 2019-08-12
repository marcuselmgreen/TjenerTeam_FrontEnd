import axios from 'axios';
import {handleError, handleResponse} from './ApiUtils';
import setup from "../../config/setup";

export function getBookingsById(userName) {
    return axios(setup.apiEndPoint + '/bookings/?userName=' + userName)
        .then(handleResponse)
        .catch(handleError)
}

export function getAllBookings() {
    return axios(setup.apiEndPoint + '/bookings')
        .then(handleResponse)
        .catch(handleError)
}

// NOW IT WILL MAKE SEVERAL HTTP CALLS
// BECAUSE THE API CAN'T HANDLE THE DATA CORRECT.
// THIS WILL CHANGE WHEN BACKEND IS DEVELOPED!!
export function createBooking(bookings) {
    return axios.post(setup.apiEndPoint + '/bookings', bookings)
        .then(handleResponse)
        .catch(handleError)
}

export function deleteBooking(booking) {
    let id = booking._id;
    return axios.delete(setup.apiEndPoint + '/bookings/' + id)
        .then(handleResponse)
        .catch(handleError)
}

export function updateBooking(booking) {
    let id = booking._id;
    return axios.put(setup.apiEndPoint + '/bookings/'+ id, booking)
        .then(handleResponse)
        .catch(handleError)
}
