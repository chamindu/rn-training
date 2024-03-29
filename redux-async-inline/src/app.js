import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showNotification, hideNotification } from './actions';

class App extends Component {
  displayTime() {
    const time = new Date();
    this.props.showNotification(time.getTime(), 'Time is ' + time);
    setTimeout(() => this.props.hideNotification(time.getTime()), 3000);
  }
  render() {
    return (
      <div>
        <ul>
          { this.props.messages.map(message => <li key={message.id}>{message.text}</li>)}
        </ul>
        <button onClick={() => this.displayTime()}>Show Time</button>
      </div>
    );
  }
}

export default connect(
  state => ({ messages: state}),
  dispatch => ({ 
    showNotification : (id, text) => dispatch(showNotification(id, text)),
    hideNotification: (id) => dispatch(hideNotification(id))
  })
)(App);
