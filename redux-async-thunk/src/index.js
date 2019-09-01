import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import './index.css';
import App from './app';


function reducer(state = [], action) {
    switch(action.type) {
        case 'SHOW_NOTIFICATION':
            return [
                ...state,
                action.payload,
            ]
        case 'HIDE_NOTIFICATION':
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(ReduxThunk)
  ));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
