import React, {useState} from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import {withNavigation} from "react-navigation";

// Displays each MACH level and the required points

const Points = ({navigation}) => {

    let points = [ // List of each MACH level and required points
        {id: 1, title: "MACH BADASS", points: 0},
        {id: 2, title: "MACH STAR", points: 1500},
        {id: 3,title: "MACH ICON", points: 4000},
        {id: 4,title: "MACH HERO", points: 7500},
        {id: 5,title: "MACH LEGEND", points: 25000},
    ];
    return (
        <View style={styles.container}>
            {points.map(point => (
                <View
                    style={styles.button}
                    key={point.id}
                >
                    <View style={styles.buttonContent}>
                        <Text style={styles.title}>{point.title}</Text>
                        <Text style={styles.points}>{point.points} Points</Text>
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: "flex-start",
    },
    button: {
        width: '100%',
        backgroundColor: '#6bd0f6',
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
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
    points: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
export default withNavigation(Points);