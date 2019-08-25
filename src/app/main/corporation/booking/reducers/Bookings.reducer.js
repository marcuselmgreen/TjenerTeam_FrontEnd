import * as actionTypes from '../actions/ActionTypes';

let initialState = {
    allBookings: [],
    booking: null,
    error: null,
    showFullCreateBookingPage: false,
};


export default function bookings(state = initialState, action) {
    let tempState = {...state};

    switch (action.type) {

        case actionTypes.CREATE_BOOKING_SUCCESS:
            action.bookings.forEach(b => {
                tempState.allBookings.push(b);
            });
            return tempState;

        case actionTypes.CREATE_BOOKING_FAILED:
            tempState.error = action.error;
            return tempState;



        case actionTypes.DELETE_BOOKING_SUCCESS:
            tempState.allBookings = tempState.allBookings.filter(booking => booking._id !== action.booking._id);
            return tempState;

        case actionTypes.DELETE_BOOKING_FAILED:
            tempState.error = action.error;
            return tempState;



        case actionTypes.LOAD_ALL_BOOKINGS_SUCCESS:
            tempState.allBookings = action.bookings;
            return tempState;

        case actionTypes.LOAD_ALL_BOOKINGS_FAILED:
            tempState.error = action.error;
            return tempState;


        case actionTypes.LOAD_CORPORATION_BOOKINGS_SUCCESS:
            let myBookings = action.bookings.filter(b => b.createdByCorporation_user === action.corporation._id);
            tempState.allBookings = myBookings;
            return tempState;

        case actionTypes.LOAD_CORPORATION_BOOKINGS_FAILED:
            tempState.error = action.error;
            return tempState;


        case actionTypes.UPDATE_BOOKING_SUCCESS:
            return state;

        case actionTypes.UPDATE_BOOKING_FAILED:
            tempState.error = action.error;
            return tempState;


        case actionTypes.SELECT_BOOKING_SUCCESS:
            tempState.booking = action.booking;
            return tempState;


        case actionTypes.SHOW_FULL_CREATE_BOOKING_PAGE:
            tempState.showFullCreateBookingPage = true;
            return tempState;


        case actionTypes.HIDE_FULL_CREATE_BOOKING_PAGE:
            tempState.showFullCreateBookingPage = false;
            return tempState;

        default:
            return state
    }
}
