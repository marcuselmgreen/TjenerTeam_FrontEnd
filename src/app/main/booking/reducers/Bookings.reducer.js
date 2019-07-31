import * as actionsTypes from '../actions/ActionTypes';

let initialState = {
    allBookings: [],
    booking: null,
    error: null
};


export default function bookings(state = initialState, action) {
    let tempState = {...state};

    switch (action.type) {

        case actionsTypes.CREATE_BOOKING_SUCCESS:
            tempState.allBookings.push(action.allBookings);
            return tempState;

        case actionsTypes.CREATE_BOOKING_FAILED:
            console.log(action.error);
            tempState.error = action.error;
            return tempState;



        case actionsTypes.DELETE_BOOKING_SUCCESS:
            tempState.allBookings = tempState.allBookings.filter(booking => booking._id !== action.booking._id);
            return tempState;

        case actionsTypes.DELETE_BOOKING_FAILED:
            console.log(action.error);
            tempState.error = action.error;
            return tempState;



        case actionsTypes.LOAD_ALL_BOOKINGS_SUCCESS:
            tempState.allBookings = action.bookings;
            return tempState;

        case actionsTypes.LOAD_ALL_BOOKINGS_FAILED:
            console.log(action.error);
            tempState.error = action.error;
            return tempState;


        case actionsTypes.LOAD_CORPORATION_BOOKINGS_SUCCESS:
            console.log(action.corporation._id)
            let myBookings = action.bookings.filter(b => b.createdByCorporation_user === action.corporation._id);
            tempState.allBookings = myBookings;
            return tempState;

        case actionsTypes.LOAD_CORPORATION_BOOKINGS_FAILED:
            console.log(action.error);
            tempState.error = action.error;
            return tempState;



        case actionsTypes.UPDATE_BOOKING_SUCCESS:
            return state;

        case actionsTypes.UPDATE_BOOKING_FAILED:
            console.log(action.error);
            tempState.error = action.error;
            return tempState;



        case actionsTypes.SELECT_BOOKING_SUCCESS:
            tempState.booking = action.booking;
            return tempState;

        default:
            return state
    }
}
