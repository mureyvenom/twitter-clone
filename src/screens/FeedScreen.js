import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Tweet from '../components/Tweet';

const FeedScreen = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 1}}>
                <ScrollView>
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                    <Tweet />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default FeedScreen;