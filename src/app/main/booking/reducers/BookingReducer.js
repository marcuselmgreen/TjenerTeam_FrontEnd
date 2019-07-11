/*
 src/reducers/BookingReducer.js
*/

import initialState from '../../../redux/initialState';

import * as actionsTypes from '../actions/ActionTypes';

export default (state = initialState.bookings, action) => {
    switch (action.type) {

        case actionsTypes.CREATE_BOOKING_SUCCESS:
            let tempState = [...state];
            tempState.push(action.booking);
            return tempState;

        case actionsTypes.CREATE_BOOKING_FAILED:
            return state;

        case actionsTypes.DELETE_BOOKING_SUCCESS:
            return state;

        case actionsTypes.DELETE_BOOKING_FAILED:
            return state;

        case actionsTypes.LOAD_ALL_BOOKINGS_SUCCESS:
            return state;

        case actionsTypes.LOAD_ALL_BOOKINGS_FAILED:
            return state;

        case actionsTypes.UPDATE_BOOKING_SUCCESS:
            return state;

        case actionsTypes.UPDATE_BOOKING_FAILED:
            return state;

        default:
            return state
    }
}
