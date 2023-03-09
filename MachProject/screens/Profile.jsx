import * as React from 'react';
import {Button, Pressable, StyleSheet, Text, View} from "react-native";
import { withNavigation } from 'react-navigation';
import {navigationRef} from "../RootNavigation";
import Settings from "./Settings"

function Profile( { navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <Pressable style={styles.press} onPress={() => navigationRef.current?.navigate('Settings')}>
                    <Text style={styles.buttonText}>Settings</Text>
                </Pressable>
            </View>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Posts</Text>
            </View>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Points</Text>
            </View>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Log Out</Text>
            </View>
        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: "flex-start",
    },
    massive: {
        fontSize: 160,
        color: "#FFE133"
    },
    button: {
        backgroundColor: '#6bd0f6',
        padding: 15,
        width: 250,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    press: {
        backgroundColor: '#6bd0f6',
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    },
    buttonText: {
        fontSize: 25
    }}
);

export default withNavigation(Profile);