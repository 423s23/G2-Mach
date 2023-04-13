import * as React from 'react';
import {Button, Pressable, StyleSheet, Text, View} from "react-native";
import { withNavigation } from 'react-navigation';
import {navigationRef} from "../RootNavigation";
import Ionicons from 'react-native-vector-icons/Ionicons'
const userInfo = {
    username: "bird",
    name: "Brady Ash",
    password: "abc123",
    email: "bradyash9@gmail.com",
    city: "Bozeman",
    state: "Montana",
    team: "Ultra-Marathon",
    points: 450,
}

function Settings( { navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Ionicons style={styles.icon} name="person-circle-outline" />
            </View>
            <View style={styles.button}>
                <Text style={styles.rowText}>Username: </Text>
                <Text style={styles.rowTextRight}>{userInfo.username}</Text>
            </View>
            <View style={styles.button}>
                <Text style={styles.rowText}>Location: </Text>
                <Text style={styles.rowTextRight}>{userInfo.city}, {userInfo.state}</Text>
            </View>
            <View style={styles.button}>
                <Text style={styles.rowText}>Email: </Text>
                <Text style={styles.rowTextRight}>{userInfo.email}</Text>
            </View>
            <View style={styles.button}>
                <Text style={styles.rowText}>Mach Team: </Text>
                <Text style={styles.rowTextRight}>{userInfo.team}</Text>
            </View>
        </View>

    );
};

export default withNavigation(Settings);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        //justifyContent: "flex-start",
    },
    massive: {
        fontSize: 160,
        color: "#FFE133"
    },
    button: {
        backgroundColor: '#6bd0f6',
        padding: 15,
        width: "95%",
        marginTop: 10,
        // alignItems: 'center',
        // justifyContent: 'center',
        borderRadius: 15,
        flexDirection: "row"
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
        alignContent: "center",
        color: "#ffffff"
    },
    iconText: {
        fontSize: 50,
        textAlign: "center",

    },
    row: {
        borderColor: '#808080',
        borderBottomWidth: 3,
        width: '100%',
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    rowTop: {
        borderColor: '#808080',
        borderBottomWidth: 3,
        borderTopWidth: 3,
        textAlign: "left",
        width: '100%',
        flexDirection: "row",
        justifyContent: "space-between"
    },
    rowText: {
        textAlign: "left",
        fontSize: 20,
        paddingLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        width: "35%"
    },
    rowTextRight: {
        textAlign: "left",
        fontSize: 20,
        paddingRight: 10,
        marginTop: 10,
        marginBottom: 10,
        width: "65%"
    }}

);