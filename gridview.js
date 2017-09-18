/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import GridView from 'react-native-grid-view';

import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ListView,
  Dimensions,
  Text,
  View
} from 'react-native';

const {height, width} = Dimensions.get('window');

export default class Grid extends Component {

  constructor() {
    super();
    this.state = {
      dataSource: '',
      dataObtained: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData(){
    fetch('https://raw.githubusercontent.com/wrg-mujeeb/WRGProgressTracker/master/test/generated.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ dataSource: responseJson, dataObtained: true });
        console.log("The data from server is---->", responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  renderItem(rowData){
    return(<View style={styles.itemContainer}>
      <Image resizeMode="contain" source={{ uri: rowData.image }} style={styles.image} />
      <Text style={styles.title}>{rowData.title}</Text>
      <Text style={styles.vendorName}>{rowData.vendor}</Text>
      <Text style={styles.price}>{rowData.price}</Text>
    </View>);
  }

  render() {
    if (this.state.dataObtained) {
      return (
        <View style={styles.container}>
          <GridView
            items={this.state.dataSource}
            itemsPerRow={2}
            renderItem={this.renderItem}
            style={styles.listView}
          />
        </View>
      );
    } else{
      return(
        <View style={styles.loaderContainer}>
          <ActivityIndicator  size='large' color='black' />
        </View>
      );
    }

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  title: {
    color: '#FF9100',
    fontSize: 18,
    marginBottom: 5,
  },
  company: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5,
  },
  price: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loaderContainer: {
    flex: 1 ,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 0.438 * height,
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center',
    borderWidth:1,
    borderColor: '#EEEEEE',
    backgroundColor: 'white',
  },
  image: {
    width: 150,
    height: 150,
  },
});
