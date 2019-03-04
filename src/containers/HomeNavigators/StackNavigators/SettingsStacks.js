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

import Settings from '../../Screens/Settings'

export const SettingsStack = createStackNavigator({
    Settings: {
        screen: Settings,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: 'Setting',
            }
        }
    },
}, {
    //headerBackTitleVisible: true,
    defaultNavigationOptions: {
        header: null,
        gesturesEnabled: false,
    }
})