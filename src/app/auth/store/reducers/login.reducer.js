import * as Actions from '../actions';

const initialState = {
    success: false,
    jwtToken: null,
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
        default:
        {
            return state
        }
    }
};

export default login;
