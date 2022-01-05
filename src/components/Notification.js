import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../colors/Colors';
import { FontAwesome } from '@expo/vector-icons';

const Notification = ({type}) => {
    return (
        <TouchableOpacity>
            {
                type == 'tweet' ?
                <View style={styles.container}>
                    <View style={styles.iconHolder}>
                        <FontAwesome name='bell' color={Colors.primary} size={20} />
                    </View>
                    <View style={styles.notificationDetails}>
                        <View style={styles.imageHolder}>
                            <Image source={require('../../assets/images/profile.jpg')} style={styles.userImage} />
                        </View>
                        <View>
                            <Text style={styles.notificationText}>New Tweet notification for <Text style={styles.bolden}>Fabrizio Romano</Text></Text>
                        </View>
                    </View>
                </View>
                :
                null
            }
            {
                type == 'like' ?
                <View style={styles.container}>
                    <View style={styles.iconHolder}>
                        <FontAwesome name='heart' color={Colors.like} size={20} />
                    </View>
                    <View style={styles.notificationDetails}>
                        <View style={styles.imageHolder}>
                            <Image source={require('../../assets/images/profile.jpg')} style={styles.userImage} />
                        </View>
                        <View>
                            <Text style={styles.notificationText}><Text style={styles.bolden}>Fabrizio Romano</Text> liked your tweet </Text>
                            <Text style={styles.notificationTweet}>Incredible signing</Text>
                        </View>
                    </View>
                </View>
                :
                null
            }
            {
                type == 'retweet' ?
                <View style={styles.container}>
                    <View style={styles.iconHolder}>
                        <FontAwesome name='retweet' color={Colors.retweet} size={20} />
                    </View>
                    <View style={styles.notificationDetails}>
                        <View style={styles.imageHolder}>
                            <Image source={require('../../assets/images/profile.jpg')} style={styles.userImage} />
                        </View>
                        <View>
                            <Text style={styles.notificationText}><Text style={styles.bolden}>Fabrizio Romano</Text> Retweeted your tweet </Text>
                            <Text style={styles.notificationTweet}>Incredible signing</Text>
                        </View>
                    </View>
                </View>
                :
                null
            }
            {
                type == 'follow' ?
                <View style={styles.container}>
                    <View style={styles.iconHolder}>
                        <FontAwesome name='user' color={Colors.primary} size={20} />
                    </View>
                    <View style={styles.notificationDetails}>
                        <View style={styles.imageHolder}>
                            <Image source={require('../../assets/images/profile.jpg')} style={styles.userImage} />
                        </View>
                        <View>
                            <Text style={styles.notificationText}><Text style={styles.bolden}>Fabrizio Romano</Text> followed you </Text>
                        </View>
                    </View>
                </View>
                :
                null
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        borderBottomColor: Colors.offset,
        borderBottomWidth: 0.5,
        flexDirection: 'row'
    },
    iconHolder: {
        width: 69,
        alignItems: 'flex-end',
        paddingTop: 2
    },
    imageHolder: {
        paddingBottom: 10
    },
    userImage: {
        height: 28,
        width: 28,
        resizeMode: 'cover',
        borderRadius: 14
    },
    notificationDetails: {
        paddingLeft: 10
    },
    notificationText: {
        color: Colors.secondary
    },
    bolden: {
        fontFamily: 'RBold'
    },
    notificationTweet: {
        color: Colors.offset
    }
});

export default Notification;