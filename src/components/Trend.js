import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../colors/Colors';

const Trend = ({withNews}) => {
    return (
        <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.container}>
                <View style={styles.mainLine}>
                    <Text style={styles.trendDetails}>1 . Topic . Trending</Text>
                    <TouchableOpacity><MaterialCommunityIcons name='dots-vertical' size={14} color={Colors.offset} /></TouchableOpacity>
                </View>
                <View style={styles.mainTrend}>
                    <Text style={styles.trendText}>Trend Here</Text>
                    {
                        withNews ?
                        <View style={styles.newsHolder}>
                            <View style={styles.newsContentHolder}>
                                <Text style={styles.newsTitle}>
                                    News description here
                                </Text>
                                <Text style={styles.newsText}>
                                    News description here
                                </Text>
                            </View>
                            <View style={styles.newsImageHolder}>
                                <Image source={require('../../assets/images/profile.jpg')} style={styles.newsImage} />
                            </View>
                        </View>
                        :
                        null
                    }
                </View>
                <View style={styles.trendCount}>
                    <Text style={styles.countText}>240K Tweets</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    mainLine: {
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    trendDetails: {
        color: Colors.offset,
        fontFamily: 'RBold'
    },
    newsHolder: {
        height: 80,
        borderRadius: 15,
        overflow: 'hidden',
        borderWidth: 0.5,
        borderColor: Colors.offset,
        flexDirection: 'row'
    },
    newsImageHolder: {
        height: 80,
        width: 80
    },
    newsContentHolder: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    newsTitle: {
        color: Colors.offset,
        marginBottom: 3
    },
    newsText: {
        color: Colors.secondary,
        fontFamily: 'RRegular'
    },
    trendText: {
        color: Colors.secondary,
        fontSize: 16,
        fontFamily: 'RBold',
        marginBottom: 10
    },
    mainTrend: {
        paddingVertical: 5
    },
    newsImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    },
    countText: {
        color: Colors.offset
    }
});

export default Trend;