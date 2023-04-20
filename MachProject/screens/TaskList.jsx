import React, {version} from 'react';
import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { ScrollView } from 'react-native';
import {withNavigation} from "react-navigation";

// Displays the tasks as buttons in a list with name and points.
// When the button is clicked it takes the user to Tasks screen (Tasks.jsx)

const TaskList = ({ navigation }) => {
    let duties = [
        { id: 1, title: 'Write a Review', points: 5, description: 'Jersey Review = 5 points'+'\nBib Review = 5 points'+'\nTri-suit Review = 5 points'+'\nTotal Points = 15 points' },
        { id: 2, title: 'Race in Mach Kit', points: 5, description: 'Everytime you race in your kit you receive 5 points.' + '\nLet the Athlete Director know when/where you raced (photos encouraged for more points!).'},
        { id: 3, title: 'ZSwift Mach Handle', points: 10, description: ''},
        { id: 4, title: 'Place Handle in Bio', points: 10, description: '@machappareltri' + '\nLet us know if you place our instagram handle in your bio and you’ll receive points.' + '\nFor every new calendar year you’ll receive 10 points.'},
        { id: 5, title: 'Send Us A Quality Photo', points: 10, description: 'MACH Rights' + '\nCollaborate via instagram or send us your quality training photos'},
    ];

    const handlePress = (duty) => { // Goes to Task page (Tasks.jsx)
        navigation.navigate('Task', { duty });
    };

    return (
        <View style={styles.container}>
            <ScrollView style={{marginTop: 10}}>
                {duties.map(duty => (
                    <TouchableOpacity
                        key={duty.id}
                        style={styles.button}
                        navigation={navigation}
                        onPress={() => handlePress(duty)}
                    >
                        <View style={styles.buttonContent}>
                            <Text style={styles.title}>{duty.title}</Text>
                            <Text style={styles.points}>{duty.points} Points</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
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

export default withNavigation(TaskList);