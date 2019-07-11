import { combineReducers } from 'redux';
import bookings from '../main/booking/reducers/BookingReducer';

const rootReducer = combineReducers({
    bookings: bookings
});

export default rootReducer;