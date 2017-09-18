/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './home.js';
import List from './listview.js';
import Grid from './gridview.js';

const App = StackNavigator({
  Home: {screen: HomeScreen},
  ListView: {screen: List},
  GridView: {screen: Grid}
});


AppRegistry.registerComponent('WhiteRabbit', () => App);
