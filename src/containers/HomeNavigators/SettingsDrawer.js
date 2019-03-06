import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native'

import {
    createDrawerNavigator,
    DrawerNavigator,
    StackNavigator,
    DrawerItems,
    SafeAreaView
} from 'react-navigation'

import {
    Container,
    Content,
    Icon,
    Header,
    Body
} from 'native-base'

import Ionicon from 'react-native-vector-icons/Ionicons'

import { SettingsStack } from './StackNavigators/SettingsStacks'

//const Wines = (props) => (<Tab name="Wines Page" searchValue={props.screenProps.searchValue} />);

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems:'center'
    },
    drawerHeader: {
        height: 200,
        backgroundColor: 'white',
    },
    drawerImage: {
        height: 150,
        width: 150,
        borderRadius: 75
    }
})

const SideMenu = (props) => (
    <Container>
        <Header style={ styles.drawerHeader}>
            <Body style={{ alignItems: 'center' }}>

            </Body>
        </Header>
        <Content>
            <DrawerItems {...props} />
        </Content>
    </Container>
)

export const SettingsDrawer = createDrawerNavigator({
    SettingsStack: {
        screen: SettingsStack,
        navigationOptions: ({ navigation }) => ({
            title: 'Settings',
            drawerIcon: ({ tintColor }) => (
                <Ionicon
                    name="md-settings"
                    size={ 24 }
                />
            )
        })
    },
}, {
    initialRouteName: 'SettingsStack',
    drawerPosition: 'Left',
    drawerWidth: 220,
    contentComponent: SideMenu,
})