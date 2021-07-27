import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import dashReducer from './reducers/dashboard';
import informationReducer from './reducers/information';

let middleware
// apply logger only in development and staging
if (process.env.NODE_ENV !== 'production')
    middleware = applyMiddleware(promise, thunk, logger);
else middleware = applyMiddleware(promise, thunk);

const initialState = {
    dash: undefined,
    info: undefined
};

const allReducers = combineReducers({
    dash: dashReducer,
    info: informationReducer
})

const store = createStore(allReducers, initialState, middleware)

export default store;