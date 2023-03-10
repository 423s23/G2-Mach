import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {withNavigation} from "react-navigation";

const Task = ({ route }) => {
    const { duty } = route.params;

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>{duty.title}</Text>
            </View>
            <View>
                <Text style={styles.points}>{duty.points} Points</Text>
            </View>
            <View style={styles.bubble}>
                <Text style={styles.description}>Description: </Text>
                <Text>{duty.description}</Text>
            </View>
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
    title: {
        fontSize: 36,
        color: '#6bd0f6',
        textAlign: "center",
    },
    points: {
        paddingTop: 10,
        fontSize: 36,
        color: '#6bd0f6',
    },
    description: {
        fontSize: 18,
        color: '#000',
    },
    bubble: {
        padding: 15,
        width: 250,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: '#fff',
    }
});
export default withNavigation(Task);