import React, { Component } from 'react'
import {
    View,
    Text,
    Button
} from 'react-native'

import {
    createStackNavigator
} from 'react-navigation'

export default class NotificationsStack extends Component {
    constructor(props) {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <View>
                <Text>
                    Home Stack
                </Text>
            </View>
        )
    }
}