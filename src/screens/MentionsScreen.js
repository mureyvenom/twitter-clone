import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Tweet from '../components/Tweet';

const MentionsScreen = () => {
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
    
});

export default MentionsScreen;