import React from 'react';
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

const Task = ({navigation, route }) => {
    const { duty } = route.params;


    const verify = (duty) => {
        //userPoints += duty.points;
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
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
                    {/*<KeyboardAvoidingView*/}
                    {/*    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}*/}
                    {/*    //style={{ flex: 1 }}*/}
                    {/*>*/}
                        <TextInput
                            placeholder="Submit Task"
                        >
                        </TextInput>
                    {/*</KeyboardAvoidingView>*/}
                </View>
                <TouchableOpacity //Add points
                    onPress={() => verify(duty)}
                    style={styles.button}
                >
                    <Text style={styles.text}>
                        SUBMIT
                    </Text>
                </TouchableOpacity>
            </ScrollView>
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
        textAlign: "center",
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
    },
    text: {
        fontSize: 18,
        color: '#6bd0f6',
    },
    button: {
        height: 50,
        //width: 100,
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