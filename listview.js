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
  ActivityIndicator,
  ListView,
  Text,
  Image,
  View
} from 'react-native';

export default class List extends Component {

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2']),
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
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({ dataSource: ds.cloneWithRows(responseJson), dataObtained: true });
      })
      .catch((error) => {
        console.error(error);
      });
  }


  render() {
    if (this.state.dataObtained) {
      return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <View style={styles.itemContainer}>
              <View style={styles.imageContainer}>
                <Image resizeMode="contain" source={{ uri: rowData.image }} style={styles.image} />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{rowData.title}</Text>
                <Text style={styles.company}>{rowData.vendor}</Text>
                <Text style={styles.price}>{rowData.price}</Text>
              </View>
            </View>
          }
        />
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
  itemContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  imageContainer: {
    flex: 0.4,
  },
  image: {
    width: 150,
    height: 150,
  },
  textContainer: {
    flex: 0.6,
    justifyContent: 'center',
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
