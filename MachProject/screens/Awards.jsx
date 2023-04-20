import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, FlatList, Button, ScrollView, TouchableOpacity} from 'react-native';
import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';

// Displays each award's name and points required for it

const Awards = ({ navigation }) => {
    const awardsList = [ // List of the awards
        { name: 'Mach Water Bottle + Stickers + Tattoos', points: 0 },
        { name: 'Mach Drawstring Backpack', points: 300 },
        { name: 'Mach Socks', points: 500 },
        { name: 'Mach Hat', points: 700 },
        { name: 'Mach Coffee Mug', points: 900 },
        { name: 'Mach Beanie', points: 1100 },
        { name: 'Mach T-shirt', points: 1300 },
        { name: 'Mach Hoodie', points: 1500 },
        { name: 'Team Mach Transition Towel', points: 1750 },
        { name: 'Mach Gloves', points: 2000 },
        { name: 'Mach Base Layer', points: 2250 },
        { name: 'Mach Gilet', points: 2500 },
        { name: 'Mach Cycling Jacket', points: 2750 },
        { name: 'Mach Running Shorts', points: 3000 },
        { name: 'Mach Tri-shorts', points: 3250 },
        { name: 'Mach Tri-jersey', points: 3500 },
        { name: 'Mach Swimsuit', points: 4000 },
        { name: '$150 Value Gift Card To Mach Apparels Store', points: 4500 },
        { name: 'Mach Surprise Package', points: 5000 },
        { name: 'Next Years Team T-shirt', points: 5500 },
        { name: 'Next Years Team Tri-suit', points: 6000 },
        { name: 'Next Years Team Cycling Bibs', points: 6500 },
        { name: 'Mach Tri-suit', points: 7000 },
        { name: 'Mach Cycling Kit', points: 7500 },
        { name: 'Team Mach Tri Bag', points: 10000 },
        { name: '$300 Value Gift Card To Mach Apparels Store', points: 12500 },
        { name: 'Custom Mach Race Week Shirt', points: 15000 },
        { name: 'Custom Mach Tri-suit', points: 17500 },
        { name: 'Mach Pays For Your USAT Membership', points: 20000 },
        { name: 'Mach Pays For 3 Race Entries', points: 22500 },
        { name: 'Mach Pays For 1 Flight To A Race Of Your Choosing (North America)', points: 25000 },
        { name: 'Win A Trip To Train With The Pros', points: 30000 },
        { name: 'Mach Surprise Package', points: 35000 },
        { name: 'Mach Sends Videographer For Day In The Life Video (Mach YouTube Channel)', points: 40000 },
        { name: 'Win A Trip To Kona Hawaii World Championships', points: 45000 },
        { name: 'Free Team Bundle For Life', points: 50000 },
    ];

    return (
        <View style={styles.container}>
            <ScrollView style={{marginTop: 10}}>
                {awardsList.map(award => (
                    <View
                        key={award.points}
                        style={[
                            styles.button,
                            { backgroundColor: award.points > currentUser.points ? '#6bd0f6' : '#AAAAAA' },
                        ]}
                    >
                        <View style={styles.buttonContent}>
                            <Text style={styles.title}>{award.name}</Text>
                            <Text style={styles.points}>{award.points} Points</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: "flex-start",
    },
    button: {
        width: 320,
        borderRadius: 10,
        padding: 20,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    buttonContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
    },
    points: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right',
        marginLeft: 10,
        width: 100,
    },
});


export default withNavigation(Awards);