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

import { HomeStack } from './StackNavigators/HomeStack'

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

export const HomeDrawer = createDrawerNavigator({
    HomeStack: {
        screen: HomeStack,
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            drawerIcon: ({ tintColor }) => (
                <Ionicon
                    name="ios-home"
                    size={ 24 }
                />
            )
        })
    },
}, {
    initialRouteName: 'HomeStack',
    drawerPosition: 'Left',
    drawerWidth: 220,
    contentComponent: SideMenu,
})