/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { name: ''};
    this.onNameChange = this.onNameChange.bind(this);
  }

  onNameChange(text) {
    this.setState({ name: text})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello { this.state.name }
        </Text>
        <TextInput style={styles.name}
          placeholder="Please enter name"
          onChangeText={this.onNameChange}
        />
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
  name : {
    width: 150
  }  
});
