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
let increment = 1

// Displays an individual task with the name, points, and description
// Have a place to submit information for the task and
// a submit button to give the user points

const Task = ({navigation, route }) => {
    const { duty } = route.params;

    const [text, setText] = useState('');

    const onChangeText = (newText) => { // updates the text when the user presses enter
        setText(newText);
    };

    const verify = (duty) => { // verify that the user submits some information, adds points, and goes home
        if (text === '') {
            return;
        }

        currentUser.points += duty.points;
        console.log(currentUser.points)
        navigation.navigate('Home', {key: ++increment});
        //navigation.goBack('Home');
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior= "padding">
            <ScrollView style={{marginTop: 10}}>
                <View>
                    <Text style={styles.title}>{duty.title}</Text>
                </View>
                <View>
                    <Text style={styles.points}>{duty.points} Points</Text>
                </View>
                <View style={[styles.bubble, {flex: 1,}]}>
                    <Text style={styles.description}>Description: </Text>
                    <Text style={{marginTop: 20}}>{duty.description}</Text>
                </View>
                <View style={[styles.bubble, {flex: 1,}]}>
                    <TextInput
                        placeholder="Submit Task"
                        onChangeText={onChangeText}
                    >
                    </TextInput>
                </View>
                <TouchableOpacity
                    onPress={() => verify(duty)}
                    style={styles.button}
                >
                    <Text style={styles.text}>
                        SUBMIT
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </KeyboardAvoidingView>
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
        textAlign: "center",
    },
    description: {
        fontSize: 18,
        color: '#000',
    },
    bubble: {
        padding: 15,
        //width: 250,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 18,
        color: '#6bd0f6',
    },
    button: {
        height: 50,
        marginTop: 30,
        marginBottom: 50,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#6bd0f6',
    },
});
export default withNavigation(Task);