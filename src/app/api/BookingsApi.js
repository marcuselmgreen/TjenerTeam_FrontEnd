import axios from 'axios';
import {handleError, handleResponse} from './ApiUtils';

const baseUrl = "http://localhost:3000/api";

export function getBookingsById(userName) {
    return axios(baseUrl + '/bookings/?userName=' + userName)
        .then(handleResponse)
        .catch(handleError)
}

export function getAllBookings() {
    return axios(baseUrl + '/bookings')
        .then(handleResponse)
        .catch(handleError)
}

// NOW IT WILL MAKE SEVERAL HTTP CALLS
// BECAUSE THE API CAN'T HANDLE THE DATA CORRECT.
// THIS WILL CHANGE WHEN BACKEND IS DEVELOPED!!
export function createBooking(booking) {
    return axios.post(baseUrl + '/bookings', booking)
        .then(handleResponse)
        .catch(handleError)
}

export function deleteBooking(booking) {
    let id = booking.id;
    return axios.delete(baseUrl + '/bookings/' + id)
        .then(handleResponse)
        .catch(handleError)
}

export function updateBooking(booking) {
    let id = booking.id;
    return axios.put(baseUrl+'/bookings/'+ id, booking)
        .then(handleResponse)
        .catch(handleError)
}
