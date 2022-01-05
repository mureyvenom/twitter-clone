import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../colors/Colors';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar style='light' />
            <AntDesign name='twitter' color={Colors.secondary} size={60} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary
    }
});

export default SplashScreen;