import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Colors from '../colors/Colors';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NotificationsScreen from '../screens/NotificationsScreen';
import MentionsScreen from '../screens/MentionsScreen';

const TopTabs = createMaterialTopTabNavigator();

const NotificationTabs = () => {
    const tabWidth = Dimensions.get('window').width/2;
    const whatsLeft = tabWidth - 65;
    const goLeft = whatsLeft/2;
    return (
        <TopTabs.Navigator
        screenOptions={{
            tabBarLabelStyle: {
                textTransform: 'capitalize',
                fontFamily: 'RBold',
                fontSize: 16
            },
            // tabBarIndicator: () => <View style={{height: 2, width: 20, backgroundColor: Colors.primary, marginLeft: 'auto', marginRight: 'auto'}}></View>,
            tabBarIndicatorStyle: {
                width: 65,
                backgroundColor: Colors.primary,
                alignContent: 'center',
                alignItems: 'center',
                alignSelf: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                flex: 1,
                marginLeft: goLeft
            },
            tabBarIndicatorContainerStyle: {
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            },
            tabBarStyle: {
                borderBottomWidth: 0.5,
                borderBottomColor: Colors.offset
            }
        }}
        >
            <TopTabs.Screen 
            name='all'
            component={NotificationsScreen}
            options={{
                title: 'All'
            }}
            />
            <TopTabs.Screen 
            name='mentions'
            component={MentionsScreen}
            options={{
                title: 'Mentions'
            }}
            />
        </TopTabs.Navigator>
    )
}

const styles = StyleSheet.create({
    
});

export default NotificationTabs;