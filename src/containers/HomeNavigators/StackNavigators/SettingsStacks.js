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

const Stack = createStackNavigator({
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

export class SettingsStack extends Component {
    static router = Stack.router;
    constructor(props) {
        super()
    }
    render() {
        const { navigation } = this.props
        //console.error(navigation.getParam('unwantedText'))
        return (
            <Stack 
                navigation={ navigation } 
                screenProps={{
                    unwantedText: navigation.getParam('unwantedText')
                }}

            />
        )
    }
}