import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  AsyncStorage,
  ToastAndroid
} from 'react-native';

import {
    createAppContainer
} from 'react-navigation'

import { HomeBottomNavigator } from './containers/HomeNavigators/HomeBottomNavigator'

export default class App extends Component {
  constructor(props) {
    super()
    this.state = {
      userGroup: null,
      username: null,
    }

    try {
      AsyncStorage.getItem("@username")
      .then((value) => {
        this.setState({
          username: value
        })
      })
      AsyncStorage.getItem("@userGroup")
      .then((value) => {
        this.setState({
          userGroup: value
        })
      })
    } catch (error) {
      ToastAndroid.show('Login!')
    }
  }
  render() {
    if (this.state.username !== null) {
      if (this.state.userGroup == 0) {
        return <Text>Consumers</Text>
      } else if(this.state.userGroup == 1) {
        return <Text>Shop Keeper</Text>
      }
    } 
    const AppContainer = createAppContainer(HomeBottomNavigator)
    return (
      <AppContainer username={ this.state.username }/>
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
