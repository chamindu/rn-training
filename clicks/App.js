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
  Alert,
  Button,
  TouchableHighlight,
  Image,
  TouchableOpacity
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    console.log("Button clicked");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title="Button" onPress={this.onButtonClick} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight onPress={this.onButtonClick}>
            <Image source={require('./checked.png')} />
          </TouchableHighlight>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.onButtonClick} >
            <Image source={require('./checked.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   },
   buttonContainer: {
     margin: 20
   },
});
