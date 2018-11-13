/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Button from '@kiwicom/orbit-components/src/Button';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
 onClick = () => {
    console.log("clicked");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button size="small" type="primary" onClick={this.onClick}>Small</Button>
        <Button size="normal" type="secondary" onClick={this.onClick}>Normal</Button>
        <Button size="large" type="info" onClick={this.onClick}>Large</Button>
        <Button size="small" type="success" onClick={this.onClick} icon={<Text>I</Text>}>Left Icon</Button>
        <Button size="small" type="warning" onClick={this.onClick} iconRight={<Text>R</Text>}>Right Icon</Button>
        <Button size="small" type="critical" onClick={this.onClick} icon={<Text>I</Text>} iconRight={<Text>R</Text>}>Left and right icons</Button>
        <Button size="small" type="facebook" onClick={this.onClick} circled >Circled</Button>
        <Button size="small" type="google" onClick={this.onClick}>Hello people</Button>
        <Button size="small" type="white" onClick={this.onClick}>Hello people</Button>
        <Button size="small" type="primary" bordered onClick={this.onClick}>Small bordered</Button>
        <Button size="normal" type="secondary" bordered onClick={this.onClick}>Normal bordered</Button>
        <Button size="large" type="info" bordered onClick={this.onClick}>Large bordered</Button>
        <Button size="large" type="info" bordered block onClick={this.onClick}>Large info bordered block</Button>
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
