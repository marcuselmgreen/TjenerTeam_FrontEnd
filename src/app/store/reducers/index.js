import {combineReducers} from 'redux';
import fuse from './fuse';
import auth from 'app/auth/store/reducers';
import quickPanel from 'app/fuse-layouts/shared-components/quickPanel/store/reducers';
import bookings from '../../main/corporation/booking/reducers/Bookings.reducer';
import corporation_user from "../../main/corporation/corporationPage/reducers/Corporation.reducer";
import employees from "../../main/employee/reducers/Employee.reducer";

const createReducer = (asyncReducers) =>
    combineReducers({
            auth,
            bookings,
            fuse,
            employees,
            ...asyncReducers
    });

export default createReducer;
