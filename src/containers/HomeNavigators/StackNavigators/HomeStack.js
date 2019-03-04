import React, { Component } from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'

import Ionicon from 'react-native-vector-icons/Ionicons'

import {
    createStackNavigator
} from 'react-navigation'

import Home from '../../Screens/Home'

export const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'Home',
                headerLeft: (
                    <Ionicon
                        name="md-menu"
                        size={ 24 }
                        style={{ paddingLeft: 10 }}
                        onPress={ () => navigation.openDrawer() }
                    />
                )
            }
        }
    },
}, {
    //headerBackTitleVisible: true,
    defaultNavigationOptions: {
        gesturesEnabled: false,
    }
})