import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Colors from '../colors/Colors';
import { MaterialCommunityIcons, EvilIcons, MaterialIcons } from '@expo/vector-icons';

const Tweet = () => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.profileImage}>
                    <TouchableOpacity>
                        <View style={styles.profileHolder}>
                            <Image source={require('../../assets/images/profile.jpg')} style={styles.profileImageE} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.tweetBody}>
                    <View style={styles.accountDetails}>
                        <View style={{flexDirection: 'row'}}><Text style={styles.name}>Nathaniel | Developer </Text><Text style={styles.accountHandle}>@the_nathanx </Text><Text style={styles.accountHandle}> * 3h</Text></View>
                        <TouchableOpacity><MaterialCommunityIcons name='dots-vertical' size={14} color='#fff' /></TouchableOpacity>
                    </View>
                    <View style={styles.tweetDetails}>
                        <Text style={styles.tweetContent}>Eduardo Camavinga has just signed his contract as new Real Madrid player. Paperworks between Real and Rennes were already signed in the night for €31m plus add ons. Here-we-go confirmed. White circleFlag of France #RealMadrid #DeadlineDay</Text>
                    </View>
                    <View style={styles.tweetActions}>
                        <TouchableOpacity style={{marginRight: 15, flexDirection: 'row'}}>
                            <EvilIcons name='comment' color={Colors.offset} size={22} /><Text style={styles.actionText}> 40</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionSpaced}>
                            <EvilIcons name='retweet' color={Colors.offset} size={24} /><Text style={styles.actionText}> 403</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionSpaced}>
                            <EvilIcons name='heart' color={Colors.offset} size={22} /><Text style={styles.actionText}> 540</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionSpaced}>
                            <EvilIcons name='share-google' color={Colors.offset} size={22} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingRight: 30,
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.offset
    },
    tweetDetails: {
        color: '#fff'
    },
    tweetActions: {

    },
    profileImage: {
        paddingHorizontal: 12
    },
    profileHolder: {
        height: 48,
        width: 48,
        borderRadius: 24,
        overflow: 'hidden'
    },
    name: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'RBold'
    },
    profileImageE: {
        width: 48,
        height:48,
        resizeMode: 'contain'
    },
    tweetContent: {
        color: '#fff',
        flexWrap: 'wrap',
        paddingRight: 50,
        fontFamily: 'RRegular'
    },
    accountDetails: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 50
    },
    accountHandle: {
        color: Colors.offset
    },
    tweetActions: {
        flexDirection: 'row',
        paddingVertical: 4,
        paddingRight: 50
    },
    actionSpaced: {
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    actionText: {
        color: Colors.offset
    }
});

export default Tweet;