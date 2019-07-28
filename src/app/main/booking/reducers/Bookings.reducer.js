/*
 src/reducers/Bookings.reducer.js
*/

import * as actionsTypes from '../actions/ActionTypes';

let initialState = {
    bookings: []
};

export default function bookings(state = initialState.bookings, action) {
    switch (action.type) {

        case actionsTypes.CREATE_BOOKING_SUCCESS:
            let tempState = [...state];
            tempState.push(action.booking);
            return tempState;

        case actionsTypes.CREATE_BOOKING_FAILED:
            return state;

        case actionsTypes.DELETE_BOOKING_SUCCESS:
            return state.filter(booking => booking !== action.booking);

        case actionsTypes.DELETE_BOOKING_FAILED:
            return state;

        case actionsTypes.LOAD_ALL_BOOKINGS_SUCCESS:
            return action.bookings;

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
