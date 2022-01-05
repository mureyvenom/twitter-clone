import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Trend from '../components/Trend';

const DiscoverScreen = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.titleTab}>
                    <Text style={styles.titleText}>Lagos Trends</Text>
                </View>
                <ScrollView>
                    <Trend withNews={true} />
                    <Trend />
                    <Trend />
                    <Trend />
                    <Trend withNews={true} />
                    <Trend />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleTab: {
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    titleText: {
        fontSize: 20,
        fontFamily: 'RBold',
        color: '#fff'
    }
});

export default DiscoverScreen;