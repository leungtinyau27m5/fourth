import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    Image,
    AsyncStorage
} from 'react-native'

export default class Settings extends Component {
    constructor(props) {
        super()
        this.state = {
            loggedIn: false
        }
        const loggedIn = AsyncStorage.getItem("@username")
        if (loggedIn !== null) {
            this.setState = ({
                loggedIn: true
            })
        }
        console.error(props)
    }
    render() {
        return(
            <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <Text>{ (this.state.loggedIn) ? AsyncStorage.getItem("@username") : 'Click To Log in'}</Text>
                <Text>{ this.props.navigation.getParam('wantedText') }</Text>
                </View>
            </SafeAreaView>
        )
    }
}