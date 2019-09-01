/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NetInfo
} from 'react-native';

export default class App extends Component {
  handleNetChange(connectionInfo) {
    console.log('connection change');
    this.setState({netInfo: connectionInfo});
  }

  constructor(props) {
    super(props)
    this.state = {netInfo : { type :'none', effectiveType: 'unknown' }};
    this.handleNetChange = this.handleNetChange.bind(this);
  }

  componentDidMount() {
    console.log(NetInfo);
    NetInfo.addEventListener(
      'connectionChange',
      this.handleNetChange
    );
    NetInfo.isConnected.addEventListener(this.handleIsConnected);
  }

  componentWillUnmount() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Connection Type: {this.state.netInfo.type}
        </Text>
        <Text style={styles.welcome}>
          Effective Type: {this.state.netInfo.effectiveType}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
