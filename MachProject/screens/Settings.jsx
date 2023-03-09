import * as React from 'react';
import {StyleSheet, Text, View} from "react-native";
import { withNavigation } from 'react-navigation';

function Settings( { navigation }) {
    return (
        <View style={styles.container} testID={"settings-screen"}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>User Settings</Text>
            </View>
            <View style={styles.button}>
                <Text style={styles.buttonText}>App Preferences</Text>
            </View>
            <View style={styles.button}>
                <Text style={{color: '#FF0000', fontSize: 25}}>Log Out</Text>
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
    buttonText: {
        fontSize: 25
    }

});
export default withNavigation(Settings);