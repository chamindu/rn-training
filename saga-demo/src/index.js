import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { connect } from 'react-redux';
import Timer  from './timer';
import * as actions from './actions';
import reducer from './reducer';
import timerSaga from './saga';

const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  }) : compose
  
const sagaMiddleware = createSagaMiddleware()

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware)
)



const store = createStore(
    reducer,
    enhancer
  )

sagaMiddleware.run(timerSaga);


const View = connect(
  state => ({
    time: state.seconds,
    status: state.status,
  }),
  actions
)(Timer)

const App = () => <Provider store={store}><View /></Provider>;

ReactDOM.render(<App />, document.getElementById('root'));

