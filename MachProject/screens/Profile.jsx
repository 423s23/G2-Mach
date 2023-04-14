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
                {/*<Text style={styles.iconText}>Brady Ash</Text>*/}
            </View>
            <View style={styles.button}>
                <Pressable style={styles.press} onPress={() => navigationRef.current?.navigate('Settings')}>
                    <Text style={styles.buttonText}>User Information</Text>
                </Pressable>
            </View>
            <View style={styles.button}>
                <Pressable style={styles.press} onPress={() => navigationRef.current?.navigate('Awards')}>
                    <Text style={styles.buttonText}>Awards</Text>
                </Pressable>
            </View>
            <View style={styles.button}>
                <Pressable style={styles.press} onPress={() => navigationRef.current?.navigate('Points')}>
                    <Text style={styles.buttonText}>Points</Text>
                </Pressable>
            </View>
            <View style={styles.button}>
                <Pressable style={styles.press} onPress={() => navigationRef.current?.navigate('Login')}>
                    <Text style={styles.buttonText}>Log In/Out</Text>
                </Pressable>
            </View>
        </View>

    );
};
const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        flex: 1,
        backgroundColor: '#000000',
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
        fontSize: 25,
    },
    icon: {
        fontSize: 150,
        textAlign: "center",
        alignContent: "center",
        color: "#ffffff",
        textShadowColor: "#6bd0f6",
        //textShadowRadius: 22,
        shadowOpacity: "100%"
    },
    iconText: {
        fontSize: 50,
        textAlign: "center",
        color: "#000",
        textShadowColor: "#6bd0f6",
        textShadowRadius: 5,
        shadowOpacity: "100%"
    }}
);

export default withNavigation(Profile);