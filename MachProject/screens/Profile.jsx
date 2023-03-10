import * as React from 'react';
import {Button, Pressable, StyleSheet, Text, View} from "react-native";
import { withNavigation } from 'react-navigation';
import {navigationRef} from "../RootNavigation";
import Ionicons from 'react-native-vector-icons/Ionicons'

function Profile( { navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Ionicons style={styles.icon} name="person-circle-outline" />
                <Text style={styles.iconText}>Brady Ash</Text>
            </View>
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
        paddingTop: 60,
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        //justifyContent: "flex-start",
    },
    button: {
        backgroundColor: '#6bd0f6',
        padding: 15,
        width: "95%",
        marginTop: 10,
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
    },
    icon: {
        fontSize: 150,
        textAlign: "center",
        alignContent: "center"
    },
    iconText: {
        fontSize: 50,
        textAlign: "center",

    }}
);

export default withNavigation(Profile);