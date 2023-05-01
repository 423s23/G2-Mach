import React, { useState } from 'react';
import {
    Alert,
    Button,
    Image,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import { withNavigation } from 'react-navigation';
import {navigationRef} from "../RootNavigation";
import Ionicons from 'react-native-vector-icons/Ionicons'
import {StatusBar} from "expo-status-bar";


// Alerts
const passwordAlert = () =>
    Alert.alert('Incorrect Password', 'The password you entered is incorrect. Please try again', [
        {text: 'OK', onPress: () => console.log('pasword OK Pressed')},
    ]);

const emailAlert = () =>
    Alert.alert('Incorrect Email', 'The Email you entered is incorrect. Please try again', [
        {text: 'OK', onPress: () => console.log('Email OK Pressed')},
    ]);

const invalidEmailAlert = () =>
    Alert.alert('Invalid Email', 'The Email you entered is invalid. Please try again', [
        {text: 'OK', onPress: () => console.log('Invalid OK Pressed')},
    ]);


// Returns the code to render the login page, navigates back home on success
function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onPress = () => validateLogin(email, password);

    // This function iterates through and validates that there is a user with the inputted email and password; if not, it gives the user an erro
    function validateLogin(email, password) {
        // if( /(.+)@(.+){2,}\.(.+){2,}/.test(email) ){
        //     console.log('Valid Email')
        // } else {
        //     console.log('Invalid Email')
        //     invalidEmailAlert()
        // }
        let b = false
        for (const userElement of allUsers) {
            const emailval = userElement.email.localeCompare(email) === 0;
            const passwordval = userElement.password.localeCompare(password) === 0;
            if (emailval) {
                b = true
                if (emailval && passwordval){
                    currentUser = userElement
                    console.log(currentUser)
                    navigationRef.current?.navigate('Home')
                }
                else if (emailval && !passwordval){
                    console.log('Incorrect password')
                    passwordAlert()
                }
            }
        }
        if (!b) {
            emailAlert()
        }

    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../images/mach-logo.png")} />
            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            {/*<TouchableOpacity>*/}
            {/*    <Text style={styles.forgot_button}>Forgot Password?</Text>*/}
            {/*</TouchableOpacity>*/}
            <TouchableOpacity
                style={styles.loginBtn}
                onPress={onPress}
            >
                <Text>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
            >
                <Text style={styles.forgot_button}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}
export default withNavigation(Login);

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
        marginBottom: 20,
        backgroundColor: "#6bd0f6",
    },
});