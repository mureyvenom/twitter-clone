import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeedScreen from '../screens/FeedScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../colors/Colors';
import NotificationTabs from './notificationtabs.stack';


const BottomTabs = createBottomTabNavigator();

const MainTabsStack = ({navigation}) => {
    return (
        <BottomTabs.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                height: 60
            }
        }}
        >
            <BottomTabs.Screen 
            name='feed'
            component={FeedScreen}
            options={{
                tabBarIcon: ({focused, color, size}) => <AntDesign name='home' size={24} color={focused ? Colors.primary : '#fff'} />,
                headerLeft: () => <TouchableOpacity onPress={() => navigation.openDrawer()}><Image source={require('../../assets/images/profile.jpg')} style={{height: 28, width: 28, marginLeft: 15, borderRadius: 14}} /></TouchableOpacity>,
                headerRight: () => <TouchableOpacity><MaterialCommunityIcons name='star-four-points-outline' size={25} color='#fff' style={{marginRight: 15}} /></TouchableOpacity>,
                headerTitle: () => (<AntDesign name='twitter' size={25} color={Colors.primary} />),
                title: '',
                headerTitleAlign: 'center',
                headerStyle: {
                    borderBottomWidth: 1
                }
            }}
            />
            <BottomTabs.Screen 
            name='discover'
            component={DiscoverScreen}
            options={{
                tabBarIcon: ({focused, color, size}) => <Feather name='search' size={24} color={focused ? Colors.primary : '#fff'} />,
                headerLeft: () => <TouchableOpacity onPress={() => navigation.openDrawer()}><Image source={require('../../assets/images/profile.jpg')} style={{height: 28, width: 28, marginLeft: 15, borderRadius: 14}} /></TouchableOpacity>,
                headerRight: () => <TouchableOpacity><AntDesign name='setting' size={25} color='#fff' style={{marginRight: 15}} /></TouchableOpacity>,
                headerTitle: () => (<TouchableOpacity>
                    <View style={{
                        height: 38, 
                        width: 250, 
                        borderRadius: 19, 
                        backgroundColor: 'rgba(110, 118, 125, 0.5)',
                        justifyContent: 'center',
                        paddingHorizontal: 15
                    }}>
                        <Text style={{color: Colors.offset}}>Search</Text>
                    </View>
                    </TouchableOpacity>),
                title: '',
                headerTitleAlign: 'center',
                headerStyle: {
                    borderBottomWidth: 1
                },
                headerTitleStyle: {
                    width: '100%'
                }
            }}
            />
            <BottomTabs.Screen 
            name='notifications'
            component={NotificationTabs}
            options={{
                tabBarIcon: ({focused, color, size}) => <Feather name='bell' size={24} color={focused ? Colors.primary : '#fff'} />,
                headerLeft: () => <TouchableOpacity onPress={() => navigation.openDrawer()}><Image source={require('../../assets/images/profile.jpg')} style={{height: 28, width: 28, marginLeft: 15, borderRadius: 14}} /></TouchableOpacity>,
                headerRight: () => <TouchableOpacity><AntDesign name='setting' size={25} color='#fff' style={{marginRight: 15}} /></TouchableOpacity>,
                title: 'Notifications',
                headerTitleStyle: {
                    marginLeft: 20
                }
            }}
            />
            <BottomTabs.Screen 
            name='messages'
            component={MessagesScreen}
            options={{
                tabBarIcon: ({focused, color, size}) => <FontAwesome name='envelope-o' size={24} color={focused ? Colors.primary : '#fff'} />,
                headerLeft: () => <TouchableOpacity onPress={() => navigation.openDrawer()}><Image source={require('../../assets/images/profile.jpg')} style={{height: 28, width: 28, marginLeft: 15, borderRadius: 14}} /></TouchableOpacity>,
                headerRight: () => <TouchableOpacity><AntDesign name='setting' size={25} color='#fff' style={{marginRight: 15}} /></TouchableOpacity>,
                headerTitle: () => (<TouchableOpacity>
                    <View style={{
                        height: 38, 
                        width: 250, 
                        borderRadius: 19, 
                        backgroundColor: 'rgba(110, 118, 125, 0.5)',
                        justifyContent: 'center',
                        paddingHorizontal: 15
                    }}>
                        <Text style={{color: Colors.offset}}>Search for people and groups</Text>
                    </View>
                    </TouchableOpacity>),
                title: '',
                headerTitleAlign: 'center',
                headerStyle: {
                    borderBottomWidth: 1
                },
                headerTitleStyle: {
                    width: '100%'
                }
            }}
            />
        </BottomTabs.Navigator>
    )
}

export default MainTabsStack;