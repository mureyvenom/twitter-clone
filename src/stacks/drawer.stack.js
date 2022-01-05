import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabsStack from './maintabs.stack';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
    return(
        <Drawer.Navigator
        screenOptions={{
            headerShown: false
        }}
        >
            <Drawer.Screen 
            name='main'
            component={MainTabsStack}
            />
        </Drawer.Navigator>
    )
}

export default DrawerStack;