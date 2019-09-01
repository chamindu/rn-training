
import './index.css';

import { createStore } from 'redux';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

const increment = () => ( { type: 'INCREMENT' });
const decrement = () => ( { type: 'DECREMENT' });


const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => console.log(store.getState()));


class Counter extends Component {
    constructor(props) {
        super(props);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        
    }
    onIncrement() {
        this.props.increment();
    }

    onDecrement() {
        this.props.decrement();
    }

    render() {
        return (
            <div>
                <div>{"Counter = " + this.props.counter} </div>
                <div>
                    <button  onClick={this.onIncrement}>Increment</button>
                    <button onClick={this.onDecrement}>Decrement</button>
                </div>
            </div>);
    }
}


const ConnectedCounter = connect(
    state => ({ counter: state}),
    { increment, decrement}
 )(Counter);

const App = () => (
    <Provider store={store}>
        <ConnectedCounter />
    </Provider>
)


ReactDOM.render(<App />, document.getElementById('root'));