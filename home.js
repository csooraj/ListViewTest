/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

export default class HomeScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  handleListView(){
    const{ navigate } = this.props.navigation;
    navigate('ListView');
  }

  goToGridView(){
    const{ navigate } = this.props.navigation;
    navigate('GridView');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonListView} onPress={this.handleListView.bind(this)}>
          <Text style={styles.label}>Show ListView</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGridView} onPress={this.goToGridView.bind(this)}>
          <Text style={styles.label}>Show GridView</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  buttonListView: {
    backgroundColor: 'black',
    padding: 20,
  },
  buttonGridView: {
    backgroundColor: 'black',
    marginTop: 10,
    padding: 20,
  },
  label: {
    color: 'white',
    fontSize: 18,
  },
});
