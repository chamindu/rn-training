import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
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

const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
