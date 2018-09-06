import React, { Component } from 'react';
import {  AppRegistry,  StyleSheet,  View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import store from './storeRafa.js';
import TextResultContainer from './TextResultContainer.js';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text style={styles.header}>Welcome to Rafael's App</Text>
          <View style={styles.trcontainer}>
            <TextResultContainer/>
          </View>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,       
    alignItems: 'center',    

  },
  header: {
      color: '#07600f',
      fontSize: 30,
      marginBottom: 100    
  },
  trcontainer: {
    justifyContent: 'center'

  }
});