import React, { useState } from 'react';
import {
    Alert,
    Button,
    Image, Keyboard, KeyboardAvoidingView, Platform,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity, TouchableWithoutFeedback,
    View
} from "react-native";
import { withNavigation } from 'react-navigation';
import {navigationRef} from "../RootNavigation";
import Ionicons from 'react-native-vector-icons/Ionicons'
import {StatusBar} from "expo-status-bar";
import User from "../components/User.js"

// Displays a Sign-Up page with prompts for email, first name, last name, phone number, username, password
// and a Sign-up button.

const invalidEmailAlert = () =>
    Alert.alert('Invalid Email', 'The Email you entered is invalid. Please try again', [
        {text: 'OK', onPress: () => console.log('Invalid OK Pressed')},
    ]);

const SignUp = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const SignIn = () => { //verifies and signs in the new user, and navigates to the home page
        if( /(.+)@(.+){2,}\.(.+){2,}/.test(email) ){
            console.log('Valid Email')
        } else {
            console.log('Invalid Email')
            invalidEmailAlert()
            return
        }
        let b = true;
        for (const userElement of allUsers) {
            if (userElement.email.localeCompare(email) === 0) {
                b = false;
            }
        }
        if (b) {
            const temp = new User(email, firstName, lastName, phoneNumber, username, password)
            allUsers.push(temp)
            currentUser = allUsers.pop()
            allUsers.push(temp)
            console.log({email});
            console.log({firstName});
            console.log({lastName});
            console.log({phoneNumber});
            console.log({username});
            console.log({password});
            navigation.navigate('Home');
        }
        else {
            Alert.alert('Email in Use', 'The Email you entered is already in the system. Please log in, or try a different email', [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
            console.log(allUsers)
        }
    }

    return ( //returns the page that the user sees
        <View style={styles.container}>
            <Image style={styles.image} source={require("../images/mach-logo.png")} />
            <StatusBar style="auto" />
            {/*<KeyboardAvoidingView>*/}
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
            {/*</KeyboardAvoidingView>*/}
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="First Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(firstName) => setFirstName(firstName)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Last Name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(lastName) => setLastName(lastName)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Phone Number"
                    placeholderTextColor="#003f5c"
                    onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Username"
                    placeholderTextColor="#003f5c"
                    onChangeText={(username) => setUsername(username)}
                />
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.inputView}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                        secureTextEntry={true}
                        onChangeText={(password) => setPassword(password)}
                    />
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => SignIn()}
            >
                <Text>SIGN UP</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginBottom: 40,
    },
    inputView: {
        backgroundColor: "#6bd0f6",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
    },
    forgot_button: {
        height: 30,
        marginBottom: 30,
        color: "#fff"
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#6bd0f6",
    },
});
export default withNavigation(SignUp);