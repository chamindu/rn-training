import { AppRegistry } from 'react-native';
import App from './App';

import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue'
MessageQueue.spy((info)=>console.log("event!", info))

AppRegistry.registerComponent('hello', () => App);
