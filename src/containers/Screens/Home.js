import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
    ScrollView,
    StyleSheet,
    SafeAreaView,
    Image
} from 'react-native'

export default class Home extends Component {
    constructor(props) {
        super()
    }
    render() {
        return(
            <Text>
                Hello
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: '#E5E5E5'
    },
    headerText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight: 'bold'
    }
})