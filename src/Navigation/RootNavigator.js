import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchList from '../Components/LandingPage';
import ListItemDetail from '../Components/ListItemDetail'

const RootNavigator = createStackNavigator({
    List: {
        screen: SearchList,
        navigationOptions: () => ({
            title: 'Search List',
            headerTintColor: '#fff',
        }),
    },
    ListItemDetail: {
        screen: ListItemDetail,
        navigationOptions: () => ({
            title: 'Item details',
            headerTintColor: '#fff',
        }),
    }
},
    {
        initialRouteName: 'List'
    });

export default createAppContainer(RootNavigator);
