import React, { Component } from 'react'
import {

} from 'react-native'

import Ionicon from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import {
    createMaterialBottomTabNavigator
} from 'react-navigation-material-bottom-tabs'


import { HomeDrawer } from './HomeDrawer'
//import NotificationsStack from './StackNavigators/NotificationsStack'
//import { SettingsDrawer } from './SettingsDrawer';
import { SettingsStack } from './StackNavigators/SettingsStacks'

export const MaterialBottomNavigator = createMaterialBottomTabNavigator({
    HomeDrawer: {
        screen: HomeDrawer,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            tabBarColor: '#FF1188',
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                let fontColor = (focused) ? '#FFF' : '#111'
                let iconName = 'ios-home'
                return(
                    <Ionicon
                        name={ iconName } 
                        size={ 24 }
                        style={{ color: fontColor }}
                    />
                ) 
            }
        })
    },/*
    Notifications: {
        screen: NotificationsStack,
        navigationOptions: ({ navigation }) => ({
            title: 'Notifications',
            tabBarColor: '#FF6666',
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                let iconName = `bell${(focused) ? '-o' : ''}`
                let fontColor = (focused) ? '#111111' : '#FFF'
                return (
                    <FontAwesome
                        name={ iconName }
                        size={ 18 }
                        style={{ color: fontColor }}
                    />
                )
            }
        })
    },*/
    Settings: {
        screen: SettingsStack,
        navigationOptions: ({ navigation }) => ({
            title: 'Settings',
            tabBarColor: '#764ABC',
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                let iconName = `cog${focused ? 's' : ''}`
                let fontColor = (focused) ? '#FFF' : '#111'
                return (
                    <FontAwesome5
                        name={ iconName }
                        size={ 18 }
                        style={{ color: fontColor }}
                    />
                )
            }
        })
    }
}, {
    initialRouteName: 'HomeDrawer',
    shifting: true,
    activeTintColor: '#FFFFFF',
    backBehavior: true
})