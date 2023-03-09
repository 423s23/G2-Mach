import * as React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import { withNavigation } from 'react-navigation';

function Tasks( { navigation }) {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.massive}>Duties</Text>
                </View>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Workout: </Text>
                    <Text style={styles.buttonText}>20 points</Text>
                </View>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Post a pic: </Text>
                    <Text style={styles.buttonText}>50 points</Text>
                </View>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Compete in an event: </Text>
                    <Text style={styles.buttonText}>1000 points</Text>
                </View>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Healthy meal: </Text>
                    <Text style={styles.buttonText}>10 points</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    massive: {
        fontSize: 100,
    },
    button: {
        backgroundColor: '#6bd0f6',
        padding: 15,
        width: "95%",
        marginTop: 10,
        alignItems: 'center',
        alignContent: "center",
        justifyContent: 'center',
        borderRadius: 15,
        flexDirection: "row"
    },
    buttonText: {
        fontSize: 15
    }}
);

export default withNavigation(Tasks);