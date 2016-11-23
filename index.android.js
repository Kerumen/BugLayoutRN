/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';

export default class TestLayout extends Component {
  state = { height: 100 };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.red} />
        <View style={styles.blue}>
          <View style={[styles.green, { height: this.state.height }]} />
          <TouchableHighlight style={styles.button} onPress={() => this.setState({ height: 200 })}>
            <Text>CLICK</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  red: {
    flex: 1,
    backgroundColor: 'red',
  },
  blue: {
    padding: 10,
    backgroundColor: 'blue',
  },
  green: {
    backgroundColor: 'green',
  },
  button: {
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('TestLayout', () => TestLayout);
