import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Notification from '../components/Notification';

const NotificationsScreen = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <Notification type='tweet' />
                <Notification type='like' />
                <Notification type='retweet' />
                <Notification type='follow' />
                <Notification type='tweet' />
                <Notification type='like' />
                <Notification type='retweet' />
                <Notification type='follow' />
                <Notification type='tweet' />
                <Notification type='like' />
                <Notification type='retweet' />
                <Notification type='follow' />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
});

export default NotificationsScreen;