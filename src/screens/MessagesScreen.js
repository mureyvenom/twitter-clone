import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../colors/Colors';

const MessagesScreen = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <TouchableOpacity>
                    <View style={styles.titleTab}>
                        <FontAwesome name='envelope-o' size={20} color={Colors.offset} style={{marginRight: 10}} /><Text style={styles.titleText}>Message Requests</Text>
                    </View>
                </TouchableOpacity>
                <ScrollView>
                    
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
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 14,
        fontFamily: 'RRegular',
        color: '#fff'
    }    
});

export default MessagesScreen;