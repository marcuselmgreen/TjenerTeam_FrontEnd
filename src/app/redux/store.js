import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';


export default function configureStore(initialState) {
    const composeEnchancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


    return createStore(
        rootReducer,
        initialState,
        composeEnchancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
    );
};
