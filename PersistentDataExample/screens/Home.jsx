import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, FlatList, Button, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import { withNavigation } from 'react-navigation';
import Database from '../components/Database.js'

const db = Database.getDatabase();



function Home( { navigation }) {

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <TouchableOpacity
                navigation={navigation}
                onPress={() => navigation.navigate('Awards')}
                style={styles.awardButton}
                >

                <Text style={styles.text}>CLICK HERE</Text>

            </TouchableOpacity>
        </View>
    );

}


export default withNavigation(Home);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: "flex-start",
    },
    massive: {
        fontSize: 160,
        color: "#FFE133",
    },
    button: {
        backgroundColor: '#FFF',
        padding: 15,
        width: 200,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#6ccff6',
        fontSize: 50,
        paddingTop: 100,
        justifyContent: 'center',
    },
    awardButton: {
        flex: 1,
        width: '90%',
    }

});