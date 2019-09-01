import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showNotification, hideNotification, showNotificationWithTimeout } from './actions';

class App extends Component {
  displayTime() {
    const time = new Date();
    this.props.dispatch(showNotificationWithTimeout(time.getTime(), 'Time is ' + time));
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
)(App);
