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

import ListView from './listview.js';
import GridView from './gridview.js';

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {showList: true};
  }

  static navigationOptions = {
    header: null,
  };

  handleListView(){
    this.setState({ showList: true });
  }

  goToGridView(){
    this.setState({ showList: false });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonListView} onPress={this.handleListView.bind(this)}>
            <Text style={styles.label}>Show ListView</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonGridView} onPress={this.goToGridView.bind(this)}>
            <Text style={styles.label}>Show GridView</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.itemContainer}>
          {
            this.state.showList ?
            <ListView/>
                :
            <GridView/>
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  buttonContainer: {
    flex: 0.1,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  itemContainer: {
    flex: 0.9,
    backgroundColor: 'white',
  },
  buttonListView: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.5,
  },
  buttonGridView: {
    backgroundColor: '#01579B',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.5,
    padding: 10,
  },
  label: {
    color: 'white',
    fontSize: 18,
  },
});
