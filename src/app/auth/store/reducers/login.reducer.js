import * as Actions from '../actions';

const initialState = {
    success: false,
    jwtToken: null,
    error: null,
    spinner: false
};

const login = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.LOGIN_SUCCESS:
        {
            return {
                ...state,
                success: true,
                jwtToken: action.jwtToken,
                spinner: false
            };
        }

        case Actions.LOGIN_ERROR:
        {
            return {
                success: false,
                error  : action.payload,
                spinner: false
            };
        }

        case Actions.LOG_OUT_SUCCESS:
            return {
                ...state,
                success: false,
                jwtToken: null
            };

        case Actions.SHOW_SPINNER:
            return {
                ...state,
                spinner: true
            };

        default:
        {
            return state
        }
    }
};

export default login;
