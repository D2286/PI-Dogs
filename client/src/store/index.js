import {createStore, applyMiddleware, compose} from 'redux';
//import {composeWhithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import rootReducer from '../reducer';

//const store = createStore(rootReducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

//export const store = createStore(rootReducer, composeWhithDevTools(applyMiddleware(thunk)))

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)))

export default store;