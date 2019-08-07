import * as Actions from '../actions';

const initialState = {
    success: false,
    jwtToken: null,
    error: null
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
            };
        }
        case Actions.LOGIN_ERROR:
        {
            return {
                success: false,
                error  : action.payload
            };
        }

        case Actions.LOG_OUT_SUCCESS:
            return {
                ...state,
                success: false,
                jwtToken: null
            };

        default:
        {
            return state
        }
    }
};

export default login;
