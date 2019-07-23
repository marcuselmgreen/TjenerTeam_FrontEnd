import {combineReducers} from 'redux';
import fuse from './fuse';
import auth from 'app/auth/store/reducers';
import quickPanel from 'app/fuse-layouts/shared-components/quickPanel/store/reducers';
import bookings from '../../main/booking/reducers/Bookings.reducer';
import corporation_user from "../../main/corporation/reducers/Corporation.reducer";

const createReducer = (asyncReducers) =>
    combineReducers({
            auth,
            bookings,
            corporation_user,
            fuse,
            quickPanel,
            ...asyncReducers
    });

export default createReducer;
